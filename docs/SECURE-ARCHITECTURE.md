# Suraksha Setu — Secure architecture (proposed)

## Current production boundary

The current site is a static PWA. Message and URL checks run in the browser using deterministic heuristics. The browser Content Security Policy currently blocks network connections. There is no backend, authentication, analytics, AI request, or server-side storage in the MVP. Preserve these properties until a reviewed backend is deployed.

## Target architecture

User on mobile browser / PWA
- Local rules: message patterns and URL text inspection
- Help, learning, and accessible language
- Optional explicit AI request in a future release, disabled by default

Future Render API service
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

## Future API contract — not deployed

- GET /health: non-sensitive readiness status only.
- POST /v1/explain: optional explicit request with user-selected text and an allowlisted language. Reject overlong content and likely secrets; do not persist payloads. Return a structured summary, warning signs, safe next steps, and an uncertainty notice.
- The endpoint stays disabled until the owner approves an API budget and configures server-only secrets.

## Deployment checklist

- [ ] HTTPS and expected-origin allowlist configured.
- [ ] Secrets exist only in Render environment, never in Git.
- [ ] Request schema, body-size limit, rate limit, timeouts, and output caps tested.
- [ ] Logs verified to contain no pasted message or link content.
- [ ] Spend controls and a kill switch configured before AI is enabled.
- [ ] CSP, CORS, headers, dependency audit, accessibility, and abuse cases reviewed.
- [ ] Incident owner, disclosure contact, rollback, and retention policy documented.
