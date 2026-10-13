# Manual MVP verification checklist

## Basic navigation
- [ ] Home to Message, Link, Help, Practice, and Privacy pages works.
- [ ] Language switch to English, Tamil, Hindi works on every page.
- [ ] A draft in the message/link field survives changing language; the old result is cleared until rechecked.
- [ ] Keyboard-only navigation has a visible focus ring; skip link works.

## Message checks
- [ ] Empty message displays an accessible prompt.
- [ ] Example loads and shows caution indicators.
- [ ] OTP/PIN wording, urgency, police impersonation, remote-access apps, payment requests, and links trigger relevant explanations.
- [ ] Harmless plain text gives “no obvious warning signs” with the guarantee disclaimer.
- [ ] Entered message content is never reflected into result HTML, saved to local storage, or transmitted.

## Link checks
- [ ] `example.com` is parsed without opening a new page.
- [ ] HTTP, known shorteners, punycode, IP hosts, embedded user credentials, unusual ports, and mismatched brand domains show the relevant reasons.
- [ ] `javascript:...` is rejected.
- [ ] A normal HTTPS address does not get described as verified or guaranteed safe.

## Help and quiz
- [ ] Payment-loss flow displays 1930 and official reporting links.
- [ ] Remote access/shared-secret/general suspicious communication options show different steps.
- [ ] Quiz marks answers, explains the reason, scores, advances and restarts.

## Deployment
- [ ] Deploy only over HTTPS.
- [ ] Confirm `_headers` were applied by the host.
- [ ] Inspect CSP in browser devtools; there should be no third-party scripts or data calls from the page.
- [ ] Confirm service worker caches same-origin app files only.
- [ ] Run accessibility review and security testing before any real-user pilot.
