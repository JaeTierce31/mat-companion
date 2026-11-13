# MAT Companion — Preliminary Clinical Readiness Audit

**Audit date:** 2026-11-13  
**Repository:** `JaeTierce31/mat-companion`  
**Audited ref:** `main` at `11af08ba00b40539e8c4140cb5b427b957d4fde3`  
**Status:** Preliminary source inspection; not a clinical, privacy, security, regulatory, or production certification.

## 1. Executive finding

The repository is an early, static React/Vite development preview. Its strongest implemented control is a fail-closed medication-claim display gate: the released claim manifest is empty, and the current UI renders review-pending copy rather than medication-specific content. The source also contains unit/accessibility tests and a Playwright smoke-test suite.

The current product is **not yet a clinic-ready patient or clinician application**. The inspected source does not implement patient accounts, care-team messaging, clinician dashboards, treatment-plan workflows, community-resource navigation, patient-specific medication tools, backend services, a database, or clinic-system integrations. The README states that the app is not deployed.

No patient data should be entered. No clinical use, patient pilot, or public release is authorized by this audit.

## 2. Evidence and implementation inventory

| Area | Observed evidence | Assessment |
|---|---|---|
| Application shell | `src/App.jsx`, `src/main.jsx`, `src/style.css` | Implemented as a single-page React interface |
| Medication safety gate | `src/safety/claim.js` | Implemented; `RELEASED_CLAIMS` is empty and default state is blocked |
| Claim approval validation | `getClaimView()` | Checks claim ID, status, source revision, non-empty text, reviewer ID, credential, and signed date |
| Actual approval authority | Same gate implementation | Not cryptographically authenticated; reviewer identity/credential/signature are strings, so this is a code-review convention rather than proof of authorized approval |
| Clinical source record | `docs/MAT-CNS-001.md` | Source identified; clinical review pending; no released app copy |
| Emergency content | `src/App.jsx` | Generic placeholder only; explicitly marked pending clinical review |
| Error handling | `src/components/ErrorBoundary.jsx` | Error-boundary component exists |
| Unit/component tests | `tests/app.test.jsx`, `tests/claim.test.js` | Tests cover default blocking, caller-prop bypass resistance, and synthetic gate fixtures |
| Accessibility tests | `tests/a11y.test.jsx` | Axe scan and basic landmark/heading/tabindex assertions exist for the pending-review page |
| Browser smoke tests | `e2e/smoke.spec.js` | Playwright tests cover preview state, JS mount, and 360px/768px overflow |
| CI workflow | `.github/workflows/ci.yml` | Runs `npm ci`, `npm test`, and `npm run build` on push to main and pull requests |
| Static deployment configuration | `vercel.json`, `netlify.toml` | Configuration exists; README says no live deployment has been made |
| Data/backend architecture | README | README states no backend, database, analytics, or third-party network calls |
| Privacy claim | README and UI footer | Repository asserts no PHI is collected; this audit did not independently perform runtime traffic inspection or privacy/security testing |

## 3. Important CI/documentation discrepancy

The README and changelog describe linting, accessibility checks, and deployment/test hardening. The inspected `.github/workflows/ci.yml` currently runs only:

1. `npm ci`
2. `npm test`
3. `npm run build`

It does **not** run `npm run lint`, `npm run format:check`, `npm run test:e2e`, or `npm run test:coverage`. The existence of those scripts and test files is not evidence that those checks run in CI. This mismatch should be corrected before relying on CI as a release gate.

The latest checks visible for the audited main SHA included Dependabot-managed runs; those are not evidence that the full application test matrix ran. This audit therefore does not certify a passing build/test state.

## 4. Safety and clinical governance findings

### Controls already present
- Medication claim manifest is empty by default.
- Medication copy is withheld unless an exact claim/source revision and reviewer fields are present.
- App component calls the gate itself and does not trust a caller-supplied approved claim view.
- Tests use synthetic `TEST-ONLY` approval fixtures.
- Emergency copy is explicitly labelled as a placeholder pending clinical review.
- Repository instructions prohibit PHI and prohibit adding or releasing medication wording without clinical approval.

### Control weaknesses / required hardening
- Reviewer ID, credential, and signed date are ordinary strings; they do not establish reviewer identity, credential validity, signature authenticity, or approval authority.
- Source revision is hard-coded to a 2025 FDA label reference. Before any clinical content is approved, a qualified reviewer must verify the currently applicable authoritative source and exact product/label scope. The source identifier alone is not clinical validation.
- Emergency wording and escalation pathways remain unapproved and underspecified.
- No documented clinical content lifecycle is visible in the inspected app: source surveillance, reviewer assignment, review expiry, change-impact assessment, withdrawal/revocation, and audit evidence need explicit design.
- No clinician-approved patient-facing claims are currently released.

## 5. Missing capabilities for a clinic-facing product

The following are not evidenced in the inspected repository and must not be represented as implemented:

- Patient onboarding, identity proofing, authentication, and account recovery.
- Role-based patient, clinician, nurse, administrator, and community-service access.
- Care-team messaging, escalation inbox, or secure communications.
- Clinician dashboard, patient roster, review queue, or task assignment.
- Treatment-plan display or workflow integration.
- Community-resource directory, referral workflow, and resource verification.
- Patient-specific medication interaction, dosing, taper, or risk calculation.
- Backend API, persistent data store, backup/restore, and operational monitoring.
- EHR/clinic integration, interoperability, consent, and data-sharing controls.
- Privacy/security operations, incident response, retention/deletion, and vendor governance.
- Validated clinical usability, accessibility with target users, and clinical pilot evidence.

These are gaps in the inspected source, not proof that no separate system or planning artifact exists elsewhere.

## 6. Readiness status

| Gate | Status | Basis |
|---|---|---|
| Intended use | Draft only | Proposed document exists on this audit branch; requires clinic/clinical-owner approval |
| Product scope and user roles | Open | No formally approved intended population, user-role model, or workflow boundary |
| Functional inventory | Preliminary | Single-page app and safety gate inspected; full product requirements not yet approved |
| Clinical content approval | Blocked | Empty release manifest; no verified qualified approval |
| Emergency pathway | Blocked | Placeholder only; clinician-approved wording and operational pathway absent |
| Privacy/legal assessment | Not assessed | No formal HIPAA, 42 CFR Part 2, state-law, or applicability determination in this audit |
| Security architecture | Not assessed | No threat model, access-control design, penetration test, or production security evidence |
| CI/release verification | Partial | Unit tests/build are configured in CI; lint, formatting, E2E, and coverage are not in the inspected CI workflow |
| Deployment | Not released | README states no live deployment |
| Clinical pilot | Not authorized | Prerequisite gates remain open |

## 7. Required next actions — ordered by dependency

1. **Clinic owner decision:** approve or revise intended use, target population, care setting, initial use cases, and prohibited functions.
2. **Clinical governance:** name qualified clinical reviewers and define credential verification, exact-copy approval, review expiry, source surveillance, revocation, and emergency escalation ownership.
3. **Product specification:** produce a traceable functional inventory and role/workflow map; separate current implementation from proposed capabilities.
4. **Safety engineering:** strengthen approval evidence beyond free-text reviewer fields; add negative, stale-source, revoked-review, mismatch, and tamper-resistance fixtures.
5. **CI correction:** add lint, format check, E2E, and coverage jobs or accurately narrow the documentation; require all designated checks before merge.
6. **Privacy/security assessment:** map data flows and vendors before introducing any collection or transmission; assess HIPAA, 42 CFR Part 2, applicable state law, consent, retention, and incident response with qualified counsel/privacy leadership.
7. **Pilot protocol:** define eligibility, clinician oversight, training, adverse-event handling, usability endpoints, evaluation metrics, and explicit stop criteria before any patient pilot.

## 8. Audit limitations

This is a source-level review of the GitHub main branch at the SHA stated above, using repository files and GitHub metadata. It did not execute the application, install dependencies, run tests locally, inspect production traffic, conduct a penetration test, validate legal applicability, interview clinic staff, or obtain clinical approval. A successful CI run, if later observed, would establish only the checks actually configured in that run—not clinical readiness or regulatory compliance.

**Disposition: HOLD — development preview only. Do not use with patients or release clinical claims.**
