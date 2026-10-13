'use strict';

const test = require('node:test');
const assert = require('node:assert/strict');
const { spawn } = require('node:child_process');
const net = require('node:net');
const path = require('node:path');

const apiDir = path.resolve(__dirname, '..');
let child;
let baseUrl;

async function unusedPort() {
  const probe = net.createServer();
  await new Promise((resolve, reject) => {
    probe.once('error', reject);
    probe.listen(0, '127.0.0.1', resolve);
  });
  const port = probe.address().port;
  await new Promise((resolve, reject) => probe.close((error) => error ? reject(error) : resolve()));
  return port;
}

async function waitUntilReady(url) {
  const deadline = Date.now() + 8000;
  while (Date.now() < deadline) {
    if (child && child.exitCode !== null) throw new Error('API process exited before readiness');
    try {
      const response = await fetch(url);
      if (response.ok) return;
    } catch { /* Server is still starting. */ }
    await new Promise((resolve) => setTimeout(resolve, 100));
  }
  throw new Error('API did not become ready within 8 seconds');
}

test('API enforces input boundaries and never echoes submitted text', async (t) => {
  const port = await unusedPort();
  baseUrl = `http://127.0.0.1:${port}`;
  child = spawn(process.execPath, ['server.js'], {
    cwd: apiDir,
    env: { ...process.env, PORT: String(port), ALLOWED_ORIGINS: '' },
    stdio: ['ignore', 'ignore', 'pipe']
  });
  let stderr = '';
  child.stderr.on('data', (chunk) => { stderr += chunk.toString(); });

  t.after(() => {
    if (child && child.exitCode === null) child.kill('SIGTERM');
  });

  try {
    await waitUntilReady(`${baseUrl}/health`);
  } catch (error) {
    throw new Error(`${error.message}\n${stderr}`);
  }

  await t.test('health response reports AI disabled', async () => {
    const response = await fetch(`${baseUrl}/health`);
    assert.equal(response.status, 200);
    assert.deepEqual(await response.json(), {
      status: 'ok',
      mode: 'deterministic-only',
      aiEnabled: false
    });
    assert.equal(response.headers.get('cache-control'), 'no-store');
    assert.equal(response.headers.get('x-content-type-options'), 'nosniff');
  });

  await t.test('message check returns only rule codes and risk guidance', async () => {
    const submitted = 'URGENT: share your OTP and UPI PIN immediately';
    const response = await fetch(`${baseUrl}/v1/check`, {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ text: submitted, language: 'en' })
    });
    const result = await response.json();
    assert.equal(response.status, 200);
    assert.equal(result.level, 'high');
    assert.ok(result.reasons.includes('otp_or_secret'));
    assert.equal(JSON.stringify(result).includes(submitted), false);
  });

  await t.test('rejects unknown fields and unsupported languages', async () => {
    const extra = await fetch(`${baseUrl}/v1/check`, {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ text: 'hello', accountNumber: '123456' })
    });
    assert.equal(extra.status, 400);
    assert.equal((await extra.json()).error, 'unexpected_field');

    const language = await fetch(`${baseUrl}/v1/check`, {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ text: 'hello', language: 'xx' })
    });
    assert.equal(language.status, 400);
    assert.equal((await language.json()).error, 'unsupported_language');
  });

  await t.test('rejects non-JSON requests and oversized content', async () => {
    const wrongType = await fetch(`${baseUrl}/v1/check`, {
      method: 'POST',
      headers: { 'content-type': 'text/plain' },
      body: 'hello'
    });
    assert.equal(wrongType.status, 415);

    const oversized = await fetch(`${baseUrl}/v1/check`, {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ text: 'x'.repeat(10_001) })
    });
    assert.equal(oversized.status, 400);
  });

  await t.test('rejects browser origins unless explicitly allowlisted', async () => {
    const response = await fetch(`${baseUrl}/health`, {
      headers: { origin: 'https://untrusted.example' }
    });
    assert.equal(response.status, 403);
    assert.equal((await response.json()).error, 'origin_not_allowed');
  });

  await t.test('unknown routes return 404', async () => {
    const response = await fetch(`${baseUrl}/unknown`);
    assert.equal(response.status, 404);
  });
});
