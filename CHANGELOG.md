# Changelog

All notable changes to MAT Companion will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/).

## [0.1.0-dev] — 2026-11-05

### Added

- ESLint + Prettier with `npm run lint` / `npm run format`, wired into CI.
- Automated accessibility tests (vitest-axe): no axe violations on the
  review-pending page, keyboard-focus and contrast-relevant checks.
- React error boundary (`src/components/ErrorBoundary.jsx`) with a fallback
  UI, plus loading and empty states, so a render error never blanks the page.
- Emergency-path UI scaffolding only: a generic placeholder directing people
  who feel unsafe to call emergency services / their local emergency number.
  It carries no clinical wording and is marked as pending clinician approval
  (Linear J3S-34). No clinical content was added or released.
- Deployment readiness config for static hosting (`vercel.json`,
  `netlify.toml`); no live deploy was made.
- Playwright E2E smoke test: preview server, main heading present,
  review-pending state visible.
- CI hardening: Dependabot config, scheduled weekly CI run, coverage
  thresholds in `vitest.config.js`.
- Polish: meta description, inline SVG favicon, `prefers-reduced-motion`
  support, responsive layout verified at 360px and 768px.
- This changelog.

### Changed

- Dependencies patched: react / react-dom 19.3.1, vite 8.3.6,
  vitest 5.1.0, jsdom 31.0.0 (major bump, tests re-verified).
- Node pinned: `.nvmrc` (24) and `engines: { node: ">=24" }`.
- Version bumped 0.0.0 → 0.1.0-dev.
- README expanded: architecture, safety-gate explainer, setup, deploy,
  and what is intentionally blocked.

### Unchanged (intentionally)

- The safety gate in `src/safety/claim.js`: the release manifest is still
  empty and the app still shows the review-pending state. No medication
  copy was added, changed, or released, and no personal health information
  is collected.
