# Suraksha Setu — MVP 0.2

A privacy-first, no-AI product prototype for everyday digital safety in India. The public PWA is live, and a separate API is being staged with remote text checks disabled by default. This is **not yet a production-grade security service**.

## Included in this MVP

- Refreshed responsive interface with English, Tamil and Hindi language choices; mobile-first cards, clearer page hierarchy, and accessible focus states.
- Local message-pattern checker using explicit regular-expression rules.
- Local URL inspector that parses an address but **never visits the entered site**.
- Dedicated QR/UPI safety-guidance page with recipient, amount, and PIN checks; image decoding and camera scanning are not implemented.
- Step-by-step help paths for suspected fraud, money already sent, remote-access pressure, and shared secrets.
- Official links for India's cybercrime reporting services and a tap-to-call link for 1930.
- Four-question, offline practice quiz with visual progress feedback.
- PWA manifest and versioned service worker cache for app-like installation and offline loading; cache version bumped with the refreshed UI.
- Strict Content Security Policy and hosting security headers.
- No account, analytics, ad tracker, generative AI, third-party script, or upload of checked message/link content from the PWA. A separate API service is deployed for health/integration testing but is not connected to the frontend; remote text processing is disabled by default.

## Run locally

Because service workers require HTTPS or localhost, start a local static server in this folder:

```bash
python -m http.server 8080
```

Open `http://localhost:8080` in a browser. Most pages also work when opened as a file, but offline installation needs localhost/HTTPS.

## Deploy

Deploy the folder as a static site on a host that supports the `_headers` file (for example, Netlify). Ensure HTTPS is enabled. For other hosts, copy the headers in `_headers` into the host's equivalent security-header configuration. Do not deploy behind third-party analytics or scripts without a privacy/security review.

## Privacy and security choices

- Message/link text is handled in the current page only; the app does not send it to an API.
- Only the language preference may be saved in local storage.
- The app does not request contacts, SMS, call-log, microphone, camera, location, accessibility, or screen-capture permissions.
- CSP blocks scripts/styles from external origins and blocks network connections from the page (`connect-src 'none'`).
- The service worker caches only local app-shell files. It does not cache any cross-origin URLs or entered text.
- Input is not included in result HTML. The URL hostname is HTML-escaped before display.
- Link checking has no reputation feed, DNS lookup, certificate check, page download, or remote scan. It evaluates only the text of the URL.

## Important limitations — do not remove these disclaimers

- Rules are deliberately limited and can miss scams or flag legitimate messages. The labels are caution levels, **not a probability or a guarantee**.
- A “no obvious warning signs” result does not mean safe.
- This PWA cannot inspect live phone calls, SMS inboxes, WhatsApp, QR camera scans, payment app screens, UPI transactions, installed APKs, or operating-system state.
- It cannot block/freeze transactions, call a bank automatically, file an official complaint, or send trusted-contact alerts. It only provides guidance and links.
- 1930 and government portal links direct users to official channels but the prototype does not file reports for users.
- Multi-language coverage is incomplete; some specialised technical wording in translations needs native-speaker review before broad use.

## Before real-world launch

1. Define an abuse/threat model and have an independent security engineer review the code and hosting.
2. Add automated tests for message rules, URL parsing, accessibility, internationalised domains, and malicious input.
3. Run penetration testing and test security headers after deployment.
4. Commission native Tamil/Hindi copy review and research usability with older users, people with disabilities, low-literacy users, and shared-device households.
5. Create a vulnerability disclosure contact, patch SLA, release signing and rollback plan.
6. Obtain legal/privacy review for applicable Indian law, government integrations, data retention and consent.
7. For native Android integration (call/SMS protection, QR scanning, share-sheet handling), use narrow runtime permissions, explicit consent, Play policy review, and independent security testing. Do not attempt hidden monitoring or accessibility-service abuse.
8. Integrate government/bank APIs only with documented authorisation, official API contracts, key rotation, audit trails, rate limiting, and privacy review. Never simulate an integration or suggest the app can freeze money.

## Official reporting links

- National Cyber Crime Reporting Portal: https://www.cybercrime.gov.in/
- Suspicious cyber identifiers report page: https://cybercrime.gov.in/Webform/cyber_suspect.aspx
- Sanchar Saathi: https://sancharsaathi.gov.in/
- For financial cyber fraud in India, the portal currently lists helpline **1930**.

## Files

- `index.html` — accessible application shell and Content Security Policy meta tag
- `styles.css` — responsive high-contrast, low-distraction UI
- `app.js` — local rules and interactive flows
- `manifest.webmanifest` — installable web app metadata
- `sw.js` — same-origin app-shell cache only
- `icon.svg` — local app icon
- `_headers` — production-style security headers for supporting static hosts


## Bank-first implementation direction — zero-budget phase

The current hosted app remains a static, local-first PWA. A separate Render API service is staged for health/integration testing only; its remote text-check route is disabled by default and the frontend is not connected to it. No paid AI call, account system, or message upload is enabled.

### Intended architecture

- Client: existing static PWA; local message and URL heuristics remain available offline.
- API (separate Render web service, staged): currently exposes a non-sensitive health endpoint; remote text checks remain disabled until privacy/security review and an explicit rollout decision. If later enabled, validate requests, apply rate limits, and return minimal structured results.
- AI boundary: provider credentials stay in server-side environment variables; never put keys in browser JavaScript or the repository.
- Data: do not persist pasted messages or links by default. If a bank pilot needs metrics, collect consented, non-content operational counts with a documented retention period.
- Operations: separate staging and production, health checks, dependency scanning, security headers, incident contact, and rollback procedure.

### Budget and release gate

The initial monthly infrastructure and AI budget is **₹0**. The live MVP must not make paid AI requests or promise AI-powered features yet. Validate the simplified experience with volunteer users and prospective bank partners first. Before enabling a remote API, obtain explicit budget approval, configure provider spend controls, set per-request limits, and confirm current hosting charges.

### Bank-first pilot sequence

1. Interview bank fraud-prevention, customer-support, accessibility, and information-security stakeholders; do not imply bank endorsement.
2. Test the local-only PWA with 10–15 users across English, Tamil, and Hindi. Native speakers must review translations before public launch.
3. Agree on pilot scope, data-processing terms, threat model, security review, and success metrics with one prospective institution.
4. Validate the staged API service and review platform-level logs, abuse controls, privacy terms, and rate limits; keep the static app functional if the API is unavailable. Do not enable remote text processing until users can make an explicit informed choice and the privacy/security review is approved.
5. Add AI explanations only after budget, privacy, model quality, and incident-handling gates are approved.

### Proposed pilot measures

- Correct comprehension of the recommended next action in user tests.
- Time taken to find emergency guidance.
- False-positive and false-negative rates for local warning rules on a reviewed test set.
- Accessibility and language comprehension by language and user group.
- No collection of message content by default; document any approved exception.

See docs/SECURE-ARCHITECTURE.md and docs/BANK-PILOT.md for the staged design and partner plan.


## Local regression tests

The repository includes a no-dependency Node.js test suite for the local message/URL rules, risky URL schemes, HTML escaping, Content Security Policy, service-worker boundaries, and the no-network/no-message-storage contract.

Run it with Node.js 20 or newer:

```bash
node --check app.js
node --check sw.js
node --test tests/security-smoke.test.cjs
```

GitHub Actions runs these checks on pushes to `main` and on pull requests. These tests are a regression gate, not a substitute for browser testing, independent security review, penetration testing, or native-speaker review of translations.
