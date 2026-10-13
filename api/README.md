# Suraksha Setu API scaffold

This is an **optional, not-yet-connected** API scaffold. The current public PWA remains local-only and does not call this service. Do not change the frontend CSP or connect the UI to this API until a separate privacy review and explicit rollout decision.

## Included

- `GET /health`: non-sensitive readiness response.
- `POST /v1/check`: deterministic pattern checks only; accepts JSON `{ "text": "...", "language": "en" }`.
- No external API calls, AI, database, authentication tokens, or third-party packages.
- 10 KiB request-body cap, 10,000-character text cap, language allowlist, unexpected-field rejection, JSON content-type enforcement, process-memory rate limiting, security response headers, and exact-origin CORS allowlist.
- Request text is not logged, echoed, or persisted. The request is held in memory only while being processed. The in-memory rate limiter briefly uses the connection address and is not persisted or logged.

## Run locally

Requires Node.js 22 or newer.

```bash
cd api
npm test
npm start
```

Then visit `http://localhost:10000/health`.

## Render setup (not yet deployed)

Create a separate **Web Service** only after reviewing this scaffold. Set its root directory to `api`, runtime to Node, build command to `npm install` (no packages are required), and start command to `npm start`. Render provides `PORT`. Keep `ALLOWED_ORIGINS` unset until the intended frontend origin and CORS requirements have been reviewed; configure only exact origins, never `*`.

This scaffold is not a production-ready security service. Before exposing it publicly, add platform-level abuse protection, a documented retention/privacy review, monitoring that avoids personal data, independent security testing, and an operational owner. A process-memory rate limit resets on restart and is not a substitute for edge protection.

## AI is deliberately disabled

There is no OpenAI SDK, API key, AI route, or model request. At the current ₹0/month budget, AI spend remains ₹0. Never put provider secrets in the frontend or commit them to Git.
