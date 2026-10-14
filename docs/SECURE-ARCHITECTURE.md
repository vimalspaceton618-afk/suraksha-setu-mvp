# Suraksha Setu — Secure architecture (proposed)

## Current deployment boundary (staged, not production-ready)

The public site remains a static PWA. Message, URL, and UPI payload checks run in the browser using deterministic heuristics. Its Content Security Policy blocks network connections. A separate Render Node.js service is deployed at https://suraksha-setu-api-3i7u.onrender.com with a non-sensitive /health endpoint. The API's POST /v1/check route is disabled by default with ENABLE_REMOTE_CHECKS=false and returns 503 before reading request bodies. The PWA does not call the API. There is no account system, analytics, AI request, or server-side content storage. This staged deployment is for engineering validation, not production or a bank pilot.

## Target architecture

User on mobile browser / PWA
- Local rules: message patterns and URL text inspection
- Help, learning, and accessible language
- Optional explicit AI request in a future release, disabled by default

Staged Render API service (deployed, remote text checks disabled by default)
- HTTPS and strict origin allowlist
- Schema validation and request body-size limits
- Per-IP/session rate limiting and global usage controls
- Request IDs and redacted operational logs
- Deterministic rules first
- Optional OpenAI API adapter using server-side secrets only
- No message/link persistence by default

Optional PostgreSQL only when a defined bank-pilot requirement needs it.

## Non-negotiable controls

1. Never expose API keys in HTML, JavaScript, public configuration, commits, or client-side storage.
2. Never request OTPs, UPI PINs, passwords, card security codes, or full account credentials. Warn users not to paste them.
3. Do not claim a message or link is definitively safe or fraudulent based only on heuristics or a model.
4. Do not save pasted content, full URLs, IP addresses, or user identifiers in application logs by default. Prefer redacted error codes, latency, status, and aggregate counts.
5. Validate language against an allowlist (English, Tamil, Hindi), enforce a small request size, cap model output, and apply per-IP and global usage limits.
6. If configuration, quota, or the provider is unavailable, keep local checks and show a plain-language fallback.
7. Do not auto-contact banks, police, or trusted contacts. Show official options and let the user decide.
8. Require independent security review, native-speaker review, accessibility testing, and legal/privacy review before a bank pilot.
9. Keep staging separate from production. Use a dedicated provider project/key per environment and rotate secrets after suspected exposure.
10. Add any future API origin deliberately to the Content Security Policy and CORS allowlist. Never use wildcard origins with credentials.

## Current API contract

- GET /health: non-sensitive readiness response (`status`, deterministic-only mode, AI disabled, and whether remote checks are enabled).
- POST /v1/check: deterministic text check exists for isolated test use only. In the deployed service it is gated off by default (`ENABLE_REMOTE_CHECKS=false`), returns 503 before reading the body, and is not called by the PWA.
- The endpoint remains disabled until the owner explicitly approves a data-flow/privacy decision and any required budget. No OpenAI integration is active or configured.

## Deployment checklist

- [ ] HTTPS and expected-origin allowlist configured.
- [ ] Secrets exist only in Render environment, never in Git.
- [ ] Request schema, body-size limit, rate limit, timeouts, and output caps tested.
- [ ] Logs verified to contain no pasted message or link content.
- [ ] Spend controls and a kill switch configured before AI is enabled.
- [ ] CSP, CORS, headers, dependency audit, accessibility, and abuse cases reviewed.
- [ ] Incident owner, disclosure contact, rollback, and retention policy documented.
