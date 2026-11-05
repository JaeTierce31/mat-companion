# MAT Companion

Early React/Vite app foundation for medication-assisted-treatment (MAT)
recovery support. **Medication safety content remains blocked until
clinical review. No personal health information (PHI) is collected.**

## Status

- Version `0.1.0-dev` — development preview, not deployed anywhere yet.
- The app shell, safety gate, tests, linting, accessibility checks, and
  deployment config are in place. Clinical content is intentionally absent
  until a qualified clinician approves exact wording (Linear J3S-34).

## Architecture

```
index.html                  SPA shell: meta description, inline SVG favicon,
                            loading state inside #root, <noscript> message
src/main.jsx                createRoot render, wrapped in <ErrorBoundary>
src/App.jsx                 single page: header, safety section, generic
                            emergency placeholder, footer
src/components/
  ErrorBoundary.jsx         class error boundary — a render error shows a
                            fallback with a "Try again" button, never a
                            blank page
src/safety/claim.js         THE RELEASE GATE — see below, do not edit casually
src/style.css               system-ui, single column, focus-visible outlines,
                            reduced-motion support, responsive to 360px
tests/                      Vitest + Testing Library + vitest-axe
e2e/                        Playwright smoke tests against `vite preview`
```

Stack: React 19 + Vite 8 + Vitest 5 + jsdom 31. Node 24 is pinned
(`.nvmrc`, `engines: { node: ">=24" }`). No backend, no database, no
analytics, no network calls to third parties.

## Safety release gate — read this before touching anything clinical

`src/safety/claim.js` keeps the released claim manifest empty:

```js
export const RELEASED_CLAIMS = Object.freeze([]);
```

- `getClaimView()` returns `{ status: 'blocked' }` by default, so the app
  shows **"Medication safety content under review"** and no source link.
- Approval requires an exact match on claim ID `MAT-CNS-001`, source
  revision `FDA-METHADOSE-2025-12-REF-5715751`, non-empty text, reviewer ID,
  credential, and signed date — otherwise it fails closed.
- `src/App.jsx` calls `getClaimView()` with no arguments and ignores any
  `claimView` prop a caller tries to pass (a test proves this).
- Tests use `TEST-ONLY` synthetic fixtures only. There is no patient data
  anywhere in the repo, and nothing in the app collects, stores, or sends
  health information.

The clinical source and release conditions are in
[MAT-CNS-001](docs/MAT-CNS-001.md);
[Linear J3S-34](https://linear.app/j3sovereignty/issue/J3S-34/mat-cns-001-clinical-review-and-app-test-for-methadonecns-depressant)
tracks the reviewer decision. **Do not add, change, or release medication
wording without that approval.** The emergency section on the page is a
generic placeholder ("If you feel unsafe, call emergency services") whose
final wording is also pending that review.

## Local development

Requires Node 24 (`nvm use` reads `.nvmrc`).

```sh
npm ci
npm test            # unit + accessibility tests (Vitest)
npm run test:coverage
npm run lint        # ESLint
npm run format:check
npm run build       # production build into dist/
npm run preview     # serve dist/ locally, http://127.0.0.1:4173
npm run test:e2e    # Playwright smoke test against the preview server
npm run dev         # Vite dev server
```

Formatting is Prettier (`npm run format`). The gate file
`src/safety/claim.js` and the two original fail-closed tests
(`tests/app.test.jsx`, `tests/claim.test.js`) are listed in
`.prettierignore` and kept byte-identical on purpose — formatting them
would only add diff noise to safety-critical code.

## Deploy

Static hosting only — the build output in `dist/` is plain HTML/CSS/JS.

- **Vercel:** `vercel.json` is configured (`npm run build`, `dist/`).
  Connect the repo and deploy; no environment variables are needed.
- **Netlify:** `netlify.toml` is configured the same way.
- No live deploy has been made from this work. Verify locally first with
  `npm run build && npm run preview`, then confirm the page returns
  HTTP 200 and shows the review-pending state.

## What is intentionally blocked

- Any medication-safety copy, drug-specific wording, or populating
  `RELEASED_CLAIMS` — needs clinician approval (J3S-34).
- Any PHI collection, storage, or transmission.
- Contacting a clinician on the project's behalf — the reviewer step is
  owned by Jesse / the reviewer, not by this repo's automation.

## License

MIT — see [LICENSE](LICENSE). This is a provisional pick; Jesse can change
it. Changes are tracked in [CHANGELOG.md](CHANGELOG.md).
