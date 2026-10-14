# Suraksha Setu API (staged deployment)

The API is deployed as a separate **free-tier prototype service** for health checks and backend integration testing. It is **not connected to the public PWA**. The browser's Content Security Policy continues to block network requests, so pasted messages and URLs remain on the user's device.

## Routes

- `GET /health`: returns non-sensitive readiness and feature-flag state.
- `POST /v1/check`: deterministic pattern checks, but **disabled by default**. Until a privacy review and explicit rollout decision are approved, this route returns `503 remote_checks_disabled` before reading or processing the request body.

## Safety boundary

- No external API calls, generative AI, database, authentication tokens, or third-party packages.
- No pasted content is logged, echoed, persisted, or processed by the production service while remote checking is disabled.
- If remote checks are deliberately enabled for isolated testing, the endpoint enforces a 10 KiB request-body cap, 10,000-character text cap, language allowlist, unexpected-field rejection, JSON content-type enforcement, process-memory rate limiting, security headers, and an exact-origin CORS allowlist.
- `ENABLE_REMOTE_CHECKS` defaults to disabled. Do not enable it on the public service until an explicit privacy/data-flow decision and abuse controls are approved.
- `ALLOWED_ORIGINS` should contain exact origins, never `*`. CORS is not authentication: non-browser clients can call a public endpoint directly.
- The in-memory rate limit resets on restart and is not a substitute for edge abuse protection.
- The service must not log request bodies, URLs, or client IP addresses. Render/platform-level request logs and retention should be reviewed before a public user pilot.

## Run and test locally

Requires Node.js 22 or newer.

```bash
cd api
npm test
npm start
```

Then visit `http://localhost:10000/health`. To exercise the guarded `POST /v1/check` route in a local test environment only, set `ENABLE_REMOTE_CHECKS=true`.

## Render

The service runs on Render's **Free** web-service plan in Singapore. Free services can spin down after inactivity and cold-start slowly; this setup is for development and validation, not a production SLA. See [Render's current free-instance limits](https://render.com/docs/free).

Environment settings:
- `ENABLE_REMOTE_CHECKS=false`
- `ALLOWED_ORIGINS=https://suraksha-setu-mvp.onrender.com`

The frontend is deliberately not configured to call this API. Do not loosen the page CSP or send users' pasted content to a server without an explicit, informed opt-in and a privacy/security review.

## AI and budget

There is no OpenAI SDK, API key, AI route, or model request. At the current ₹0/month budget, AI spend remains ₹0. Never put provider secrets in browser JavaScript or commit them to Git.
