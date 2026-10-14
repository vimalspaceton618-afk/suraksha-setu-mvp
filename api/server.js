'use strict';

const http = require('node:http');

const PORT = Number.parseInt(process.env.PORT || '10000', 10);
const MAX_BODY_BYTES = 10 * 1024;
const RATE_WINDOW_MS = 60_000;
const RATE_LIMIT = 30;
// Remote text processing is opt-in; production remains closed until a privacy review approves it.
const REMOTE_CHECKS_ENABLED = process.env.ENABLE_REMOTE_CHECKS === 'true';
const allowedOrigins = new Set(
  (process.env.ALLOWED_ORIGINS || '')
    .split(',')
    .map((value) => value.trim())
    .filter(Boolean)
);

// Process-memory only; keys expire after one minute and are never logged or persisted.
const requestBuckets = new Map();

const RULES = [
  { key: 'otp_or_secret', points: 3, re: /\b(?:otp|one[- ]time password|upi\s*pin|password|verification code|passcode)\b/i },
  { key: 'urgency_or_threat', points: 1, re: /\b(?:urgent|immediately|within\s+\d+\s*(?:minutes?|mins?|hours?)|today only|account (?:will be|is being) (?:blocked|suspended)|last warning|final notice|act now)\b/i },
  { key: 'authority_impersonation', points: 3, re: /\b(?:police|cbi|enforcement directorate|digital arrest|customs officer|cyber cell)\b/i },
  { key: 'remote_access', points: 3, re: /\b(?:anydesk|teamviewer|remote access|screen sharing|share your screen|install (?:this|the|an?) app)\b/i },
  { key: 'link_present', points: 1, re: /(?:https?:\/\/|www\.)\S+/i },
  { key: 'payment_request', points: 2, re: /\b(?:send money|transfer (?:money|funds)|upi|qr code|scan (?:the )?qr|payment request|collect request|approve (?:the )?payment|processing fee|receive money)\b/i },
  { key: 'prize_or_refund', points: 2, re: /\b(?:won|winner|prize|lottery|free gift|cashback|refund|guaranteed returns?|job offer|double your money)\b/i }
];

function sendJson(res, status, payload, origin) {
  res.writeHead(status, {
    'Content-Type': 'application/json; charset=utf-8',
    'Cache-Control': 'no-store',
    'X-Content-Type-Options': 'nosniff',
    'Referrer-Policy': 'no-referrer',
    'Content-Security-Policy': "default-src 'none'; frame-ancestors 'none'",
    ...(origin && allowedOrigins.has(origin) ? {
      'Access-Control-Allow-Origin': origin,
      'Vary': 'Origin',
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type'
    } : {})
  });
  res.end(JSON.stringify(payload));
}

function rateLimited(req) {
  const now = Date.now();
  const key = req.socket.remoteAddress || 'unknown';
  let bucket = requestBuckets.get(key);
  if (!bucket || now - bucket.start >= RATE_WINDOW_MS) {
    bucket = { start: now, count: 0 };
    requestBuckets.set(key, bucket);
  }
  bucket.count += 1;

  // Bound memory if this process receives traffic from many transient addresses.
  if (requestBuckets.size > 5000) {
    for (const [address, item] of requestBuckets) {
      if (now - item.start >= RATE_WINDOW_MS) requestBuckets.delete(address);
    }
  }
  return bucket.count > RATE_LIMIT;
}

function checkText(text) {
  const matches = RULES.filter((rule) => rule.re.test(text));
  const score = matches.reduce((sum, rule) => sum + rule.points, 0);
  const directRisk = matches.some((rule) =>
    ['otp_or_secret', 'authority_impersonation', 'remote_access'].includes(rule.key)
  );
  const level = score >= 4 || (directRisk && score >= 3)
    ? 'high'
    : score >= 2 ? 'medium' : 'low';

  return {
    level,
    reasons: matches.map((rule) => rule.key),
    disclaimer: 'Limited pattern check only. This result cannot prove that a message is safe or fraudulent.'
  };
}

async function readJson(req) {
  const declaredLength = Number(req.headers['content-length'] || 0);
  if (declaredLength > MAX_BODY_BYTES) {
    const error = new Error('body_too_large');
    error.status = 413;
    throw error;
  }
  if (!/^application\/json(?:\s*;|$)/i.test(req.headers['content-type'] || '')) {
    const error = new Error('json_required');
    error.status = 415;
    throw error;
  }

  const chunks = [];
  let size = 0;
  for await (const chunk of req) {
    size += chunk.length;
    if (size > MAX_BODY_BYTES) {
      const error = new Error('body_too_large');
      error.status = 413;
      throw error;
    }
    chunks.push(chunk);
  }
  try {
    return JSON.parse(Buffer.concat(chunks).toString('utf8'));
  } catch {
    const error = new Error('invalid_json');
    error.status = 400;
    throw error;
  }
}

const server = http.createServer(async (req, res) => {
  const origin = req.headers.origin;
  if (origin && !allowedOrigins.has(origin)) {
    return sendJson(res, 403, { error: 'origin_not_allowed' });
  }

  if (req.method === 'OPTIONS') {
    if (!origin || !allowedOrigins.has(origin)) {
      return sendJson(res, 403, { error: 'origin_not_allowed' });
    }
    return sendJson(res, 204, {});
  }

  const path = new URL(req.url, 'http://localhost').pathname;
  if (req.method === 'GET' && path === '/health') {
    return sendJson(res, 200, { status: 'ok', mode: 'deterministic-only', aiEnabled: false, remoteChecksEnabled: REMOTE_CHECKS_ENABLED }, origin);
  }

  if (req.method !== 'POST' || path !== '/v1/check') {
    return sendJson(res, 404, { error: 'not_found' }, origin);
  }

  if (!REMOTE_CHECKS_ENABLED) {
    return sendJson(res, 503, {
      error: 'remote_checks_disabled',
      message: 'Remote message checks are disabled. Use the local checker on the website.'
    }, origin);
  }

  if (rateLimited(req)) {
    return sendJson(res, 429, { error: 'rate_limited', retryAfterSeconds: 60 }, origin);
  }

  try {
    const body = await readJson(req);
    if (!body || typeof body !== 'object' || Array.isArray(body)) {
      return sendJson(res, 400, { error: 'invalid_request' }, origin);
    }
    const keys = Object.keys(body);
    if (keys.some((key) => !['text', 'language'].includes(key))) {
      return sendJson(res, 400, { error: 'unexpected_field' }, origin);
    }
    if (typeof body.text !== 'string' || !body.text.trim() || body.text.length > 10_000) {
      return sendJson(res, 400, { error: 'text_must_be_1_to_10000_characters' }, origin);
    }
    if (body.language !== undefined && !['en', 'ta', 'hi'].includes(body.language)) {
      return sendJson(res, 400, { error: 'unsupported_language' }, origin);
    }

    // Do not log, persist, or echo the submitted text. This route uses local rules only.
    return sendJson(res, 200, checkText(body.text), origin);
  } catch (error) {
    return sendJson(res, error.status || 400, {
      error: error.status === 413 ? 'body_too_large' :
        error.status === 415 ? 'json_required' : 'invalid_request'
    }, origin);
  }
});

server.requestTimeout = 10_000;
server.headersTimeout = 12_000;
server.keepAliveTimeout = 5_000;

server.listen(PORT, '0.0.0.0', () => {
  // Startup log only; never log request bodies, URLs, or client addresses.
  console.log('Suraksha Setu API listening; AI disabled.');
});
