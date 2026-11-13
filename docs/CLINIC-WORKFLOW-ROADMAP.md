# MAT Companion — Clinic Workflow and Product Roadmap (Draft)

**Version:** 0.1-draft  
**Date:** 2026-11-13  
**Status:** Proposed product specification; requires clinic-owner, clinical, privacy, and operational review.  
**Repository baseline:** `main` at `11af08ba00b40539e8c4140cb5b427b957d4fde3`.

## 1. Product objective

Move MAT Companion from a static development preview toward a useful, trustworthy companion for people receiving medication for opioid use disorder (MOUD/MAT), while supporting—not replacing—their treatment team.

The first release should solve a narrow, repeatable problem: make clinic-approved education and recovery-support navigation easier to access, understand, and keep current. It should not begin with patient records, treatment decisions, automated clinical triage, or complex clinic integrations.

## 2. Proposed first release: governed education and resource companion

### Patient-facing capabilities
- Browse clinic-approved, plain-language education grouped by topic.
- View source, reviewer role, approval date, content version, and next review date for each published item.
- Browse clinic-verified community resources with service type, location/coverage, contact method, hours when verified, eligibility notes, and last-verified date.
- Access a clearly visible, clinic-approved route for urgent and emergency help.
- Use responsive, accessible pages on a phone without creating an account.
- Provide optional feedback that contains no health details and is not represented as clinical communication.

### Clinic-facing capabilities (initially operational process, not an app dashboard)
- A named content owner submits a draft.
- A qualified clinical reviewer approves, rejects, or requests revision of exact text.
- A resource owner verifies community-resource details on a defined cadence.
- A release owner publishes only approved, in-date content.
- A designated owner can withdraw content quickly and preserve an audit record.

### Explicit exclusions for the first release
- No patient accounts, profiles, patient-specific records, or PHI.
- No diagnosis, prescribing, dose recommendations, tapering instructions, medication changes, or individualized interaction/risk assessments.
- No automated determination of overdose, withdrawal, relapse, or crisis severity.
- No chat or messaging that could be mistaken for monitored clinical communication.
- No treatment-plan management, appointment scheduling, EHR integration, or clinician dashboard.
- No claims that the application monitors patients or provides emergency response.

## 3. Role and authority model

These are proposed functional roles, not assertions about current staff assignments. The supplied organizational charts are historical reference material; current titles, personnel, reporting lines, and delegated authority must be confirmed directly by the clinic before implementation.

| Role | Accountable responsibility | Authority boundary | Evidence required |
|---|---|---|---|
| Clinic executive sponsor | Approves pilot purpose, resources, and operational ownership | Does not approve clinical wording solely by executive role | Signed pilot charter and named accountable owner |
| Program director / clinic operations lead | Owns workflow, staff readiness, escalation routing, and service continuity | Cannot override clinical review requirements | Approved workflow, RACI, training and downtime plan |
| Corporate/consulting medical director or delegated qualified clinician | Owns clinical safety policy and approves clinical content within credentialed scope | Approval applies only to exact text/version and defined audience | Verifiable reviewer identity, credentials, approval record, date, source set |
| Nurse practitioner / nursing lead | Reviews nursing workflow implications and escalation feasibility | Does not independently approve content outside scope/authority | Nursing workflow review and escalation sign-off |
| Counselors / clinical staff | Identify patient education needs, usability issues, and referral gaps | Do not publish unapproved medical claims | Structured feedback and issue records |
| Community-resource coordinator / designated resource owner | Verifies referral listings and contact details | Cannot characterize a resource as clinically endorsed without authorization | Verification timestamp, source, contact outcome, owner |
| Product/release owner | Maintains product backlog, versioning, release checklist, and rollback | Cannot approve clinical content | Release manifest, test evidence, change log, rollback record |
| Privacy/security owner | Determines data handling controls and reviews vendors, access, retention, incidents | Cannot substitute for clinical approval | Data-flow map, risk assessment, agreements, incident plan |
| Patient/user representatives | Provide usability feedback and identify access barriers | Feedback is not clinical approval | Consent-appropriate research notes without PHI |

One person may hold multiple operational roles only if the clinic explicitly documents the assignment and resolves conflicts of interest. Clinical approval and technical publication should remain separable.

## 4. Core workflows

### WF-01 — Create and publish educational content
1. Content owner creates a draft with intended audience, purpose, source citations, reading level, and review-by date.
2. Automated checks validate required metadata, links, version fields, and prohibited-content patterns. These checks do not make clinical judgments.
3. Qualified reviewer evaluates clinical accuracy, clarity, risks, scope, and emergency language.
4. Reviewer approves, rejects, or requests changes against an immutable content version.
5. Release owner verifies approval evidence, source freshness, accessibility checks, and test results.
6. Approved version is published with visible version/review metadata.
7. A source change, safety concern, reviewer withdrawal, or expiry triggers quarantine/withdrawal pending re-review.
8. Prior versions and all decisions remain auditable.

**Fail-closed rule:** missing, expired, mismatched, revoked, or unverifiable approval means the content is not publishable.

### WF-02 — Verify and maintain community resources
1. Resource owner proposes a resource and records category, geography, eligibility, contact channels, and source.
2. Owner verifies the listing directly with the provider or authoritative source.
3. Clinic-designated reviewer checks suitability and wording where the listing could imply clinical endorsement.
4. Release owner publishes only verified listings.
5. Listing is rechecked on a defined schedule and when users report errors.
6. Unverified, closed, or disputed listings are clearly marked or withdrawn.

### WF-03 — Patient uses the companion
1. Patient opens the app without signing in.
2. Patient chooses an education topic or resource category.
3. App displays approved material, source/review metadata, and clear scope boundaries.
4. For urgent situations, app displays only the clinic-approved emergency pathway.
5. App does not imply a clinician is monitoring the session or that a message has been sent.

### WF-04 — Urgent or emergency escalation
1. Clinic defines the exact scenarios and wording that the app may present.
2. Qualified clinical leadership approves the wording and destination(s).
3. Operational owner verifies that contact routes are staffed, geographically appropriate, and maintained.
4. The app communicates limitations plainly and does not diagnose, triage autonomously, or promise response.
5. The clinic defines a withdrawal/downtime procedure if the route becomes inaccurate.

**Blocker:** current app wording is placeholder text. Do not expand it into detailed clinical instructions without approved clinical and operational ownership.

### WF-05 — Report an issue or incorrect resource
1. Provide a feedback route that does not solicit symptoms, medication details, names, or other PHI.
2. Tell users not to use the route for emergencies or clinical advice.
3. Assign a named operational owner and response-time expectation.
4. Triage reports as content defect, broken resource, accessibility issue, privacy/security concern, or urgent safety concern.
5. Preserve a non-PHI issue record and close with evidence of correction or disposition.

## 5. Product architecture sequence

### Phase A — Trustworthy static companion
- Keep the app static and account-free.
- Add structured content and resource schemas.
- Add an approval/release manifest with versioned evidence and fail-closed publication.
- Build topic navigation, search/filter, resource cards, source metadata, and accessibility support.
- Add content withdrawal and stale-content handling.
- Keep all content synthetic until clinical review is complete.

### Phase B — Operational governance
- Establish named owners, reviewer verification, review cadence, source surveillance, incident routing, and release/rollback procedure.
- Establish a privacy/security assessment and data-flow inventory before any analytics, forms, accounts, or integrations.
- Add audit evidence for content decisions without collecting patient data.

### Phase C — Clinic pilot
- Only after clinic approval, clinical content approval, privacy/security review, accessibility/usability validation, and operational readiness.
- Start with a small, supervised pilot using the account-free education/resource experience.
- Measure usability, comprehension, resource accuracy, accessibility, staff workload, and incident rates.
- Define stop criteria and rollback before launch.

### Phase D — Consider integrations only with evidence
Patient accounts, messaging, EHR connectivity, scheduling, and patient-specific features are separate projects requiring distinct intended-use analysis, threat modeling, legal/privacy assessment, clinical safety cases, and operational funding. They are not prerequisites for a useful first release.

## 6. Minimum acceptance criteria for Phase A

- No PHI collection, storage, transmission, or third-party analytics.
- Every published educational item has exact-version approval evidence and source metadata.
- Missing, expired, revoked, or mismatched approval blocks publication and display.
- Resource listings have an owner, verification source, and last-verified date.
- Emergency pathway is absent or clearly blocked until clinic-approved wording and operational ownership exist; no placeholder is presented as final advice.
- Keyboard navigation, screen-reader semantics, responsive layout, and automated accessibility checks pass.
- Unit, integration, browser E2E, lint, formatting, build, and dependency checks are required in CI.
- Content withdrawal and rollback are tested.
- Privacy notice and scope statement accurately describe actual behavior.
- Release record identifies commit SHA, content manifest version, test evidence, approvers, and rollback target.

## 7. Open decisions — clinic confirmation required

1. Which clinic/site is the initial design partner and who is the accountable executive sponsor?
2. Who is the current qualified clinical authority for patient-facing educational content?
3. Who owns nursing review and urgent escalation operations?
4. Which initial education topics are in scope, and which are explicitly excluded?
5. Which community-resource categories and geographic service area are in scope?
6. What exact emergency pathway is approved for the target patient population and clinic geography?
7. Who owns resource verification, how often are listings rechecked, and what is the removal SLA?
8. What privacy/legal determinations apply before even optional feedback or analytics are introduced?
9. What pilot success measures and stop criteria will the clinic accept?

## 8. Delivery gates

| Gate | Required evidence | Current disposition |
|---|---|---|
| Product intent and clinic sponsor | Approved charter and accountable owner | Open |
| Clinical authority | Named reviewer, verified credentials, delegation | Open |
| Scope and workflows | Approved role/workflow specification | Draft |
| Content governance | Versioned review, approval, expiry, withdrawal | Design required |
| Resource governance | Verification ownership and cadence | Design required |
| Privacy/security | Data map and qualified assessment | Open |
| Engineering quality | Required CI matrix and tested rollback | Partial; CI matrix incomplete |
| Accessibility/usability | Automated and representative-user evidence | Partial |
| Pilot operations | Training, incident routing, downtime, stop criteria | Open |
| Release authorization | Signed approvals and evidence-linked release record | Not authorized |

## 9. Recommended immediate build sequence

1. Correct CI so lint, format check, unit/accessibility tests, coverage, production build, and Playwright E2E are all enforced.
2. Add content/resource schemas and tests while keeping the release manifest empty.
3. Build a small, static topic/resource browsing experience using clearly synthetic fixtures.
4. Add content metadata, stale/withdrawn states, and a tested release manifest.
5. Conduct clinic workflow review before adding clinical content or operational contact routes.

**Current decision:** Proceed with non-PHI, static education/resource product work in a draft branch. Do not add patient accounts, clinical claims, emergency advice, or integrations until their separate approval gates are satisfied.
