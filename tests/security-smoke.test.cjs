'use strict';

const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const { spawnSync } = require('node:child_process');

const root = path.resolve(__dirname, '..');
const read = (name) => fs.readFileSync(path.join(root, name), 'utf8');
const appSource = read('app.js');

function loadLocalCheckers() {
  const elements = new Map();
  const makeElement = () => ({
    value: '',
    innerHTML: '',
    textContent: '',
    dataset: {},
    classList: { toggle() {}, add() {}, remove() {} },
    addEventListener() {},
    setAttribute() {},
    removeAttribute() {},
    focus() {},
    appendChild() {},
    replaceChildren() {}
  });
  const document = {
    documentElement: { lang: 'en' },
    title: '',
    getElementById(id) {
      if (!elements.has(id)) elements.set(id, makeElement());
      return elements.get(id);
    },
    querySelectorAll() { return []; },
    querySelector() { return null; },
    addEventListener() {},
    createElement() { return makeElement(); }
  };
  const sandbox = {
    document,
    localStorage: { getItem() { return null; }, setItem() {} },
    navigator: {},
    location: { protocol: 'https:' },
    window: { addEventListener() {}, scrollTo() {}, matchMedia() { return { matches: true }; } },
    URL,
    console
  };
  vm.createContext(sandbox);
  vm.runInContext(
    appSource + '\n;globalThis.__surakshaSetuTestApi = { scanMessage, scanUrl, escapeHTML };',
    sandbox,
    { timeout: 2000 }
  );
  return sandbox.__surakshaSetuTestApi;
}

test('application and service-worker JavaScript parse', () => {
  for (const file of ['app.js', 'sw.js']) {
    const result = spawnSync(process.execPath, ['--check', file], { cwd: root, encoding: 'utf8' });
    assert.equal(result.status, 0, result.stderr || result.stdout);
  }
});

test('message checker catches common high-risk patterns without returning the pasted text', () => {
  const api = loadLocalCheckers();
  const suspicious = 'URGENT: Your bank account will be blocked today. Open this link to update KYC and share your OTP and UPI PIN: https://secure-kyc.example.xyz';
  const result = api.scanMessage(suspicious);
  assert.equal(result.level, 'high');
  assert.ok(result.keys.includes('reasonOtp'));
  assert.ok(result.keys.includes('reasonUrgency'));
  assert.ok(result.keys.includes('reasonLink'));
  assert.equal(JSON.stringify(result).includes(suspicious), false);
});

test('ordinary message does not get a warning from the initial rule set', () => {
  const api = loadLocalCheckers();
  const result = api.scanMessage('Hi, are we still meeting at 3 PM tomorrow?');
  assert.equal(result.level, 'low');
  assert.deepEqual(Array.from(result.keys), []);
});

test('URL checker flags insecure transport and shortened links', () => {
  const api = loadLocalCheckers();
  const http = api.scanUrl('http://example.com');
  assert.equal(http.level, 'medium');
  assert.ok(Array.from(http.keys).includes('reasonHttp'));

  const shortened = api.scanUrl('https://bit.ly/abc123');
  assert.ok(['medium', 'high'].includes(shortened.level));
  assert.ok(Array.from(shortened.keys).includes('reasonShort'));
});

test('URL checker rejects non-web protocols and flags embedded credentials', () => {
  const api = loadLocalCheckers();
  assert.equal(api.scanUrl('javascript:alert(1)').invalid, true);
  assert.equal(api.scanUrl('data:text/html,hello').invalid, true);

  const credentials = api.scanUrl('https://user:secret@example.com');
  assert.equal(credentials.level, 'high');
  assert.ok(Array.from(credentials.keys).includes('reasonCred'));
});

test('known legitimate root example stays low-caution and look-alike domain is flagged', () => {
  const api = loadLocalCheckers();
  assert.equal(api.scanUrl('https://www.google.com').level, 'low');

  const lookalike = api.scanUrl('https://google.com.bad-domain.xyz');
  assert.ok(Array.from(lookalike.keys).includes('reasonBrand'));
});

test('HTML escaping protects untrusted text before display', () => {
  const api = loadLocalCheckers();
  assert.equal(api.escapeHTML('<img src=x onerror=alert(1)>'), '&lt;img src=x onerror=alert(1)&gt;');
});

test('runtime page has a restrictive local-only Content Security Policy', () => {
  const html = read('index.html');
  const headers = read('_headers');
  for (const source of [html, headers]) {
    assert.match(source, /default-src 'self'/);
    assert.match(source, /script-src 'self'/);
    assert.match(source, /connect-src 'none'/);
    assert.match(source, /object-src 'none'/);
    assert.match(source, /base-uri 'none'/);
  }
  assert.match(html, /frame-ancestors 'none'/);
});

test('the checker does not call network APIs and only saves language preference', () => {
  assert.doesNotMatch(appSource, /\bfetch\s*\(|XMLHttpRequest|navigator\.sendBeacon|new\s+WebSocket/);
  assert.match(appSource, /localStorage\.setItem\('suraksha-setu-language', lang\)/);
  assert.doesNotMatch(appSource, /localStorage\.setItem\([^)]*(?:message|url|result)/i);
});

test('service worker only intercepts same-origin GET requests', () => {
  const worker = read('sw.js');
  assert.match(worker, /event\.request\.method !== 'GET' \|\| url\.origin !== self\.location\.origin/);
  assert.match(worker, /const APP_SHELL = \[/);
});

test('links opened in a new tab use safe rel attributes', () => {
  const tags = [...appSource.matchAll(/<a\b[^>]*target="_blank"[^>]*>/g)].map((match) => match[0]);
  assert.ok(tags.length > 0, 'expected at least one external link');
  for (const tag of tags) assert.match(tag, /rel="noopener noreferrer"/);
});
