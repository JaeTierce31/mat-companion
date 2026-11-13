# MAT Companion — Intended Use and Product Boundary

- **Document ID:** MAT-CLIN-001
- **Version:** 0.1-draft
- **Status:** Draft for product-owner and qualified clinical review
- **Repository baseline:** `main` at `11af08ba00b40539e8c4140cb5b427b957d4fde3`
- **Approval:** None. This document is not clinical validation, regulatory clearance, or authorization for patient use.

## 1. Proposed intended use

MAT Companion is proposed as a non-diagnostic patient education and support-resource application for people receiving medication for opioid use disorder (MOUD, historically often called medication-assisted treatment or MAT). Its intended purpose is to make clinic-approved educational information and relevant recovery and community-support resources easier to access between clinical encounters, while reinforcing that treatment decisions and individualized medical advice come from the patient's qualified care team.

The clinic and qualified clinical reviewers must confirm the target population, care settings, terminology, and exact scope before this statement is approved or used in a deployment or marketing claim.

## 2. Intended users

Subject to clinic review, intended user groups may include:
- Patients receiving MOUD/MAT who are directed to the application by their care team.
- Clinical staff who review the application's educational content and explain its limitations.
- Authorized clinic personnel who maintain or distribute clinic-approved educational materials.
- Community-service organizations only where a separately defined, authorized resource-maintenance workflow exists.

The current repository does not implement separate patient, clinician, administrator, or community-service accounts or workflows. These are proposed user groups, not verified product capabilities.

## 3. Proposed permitted functions

After the relevant content and workflows are implemented, verified, and approved, the application may:
- Present general educational material about MOUD/MAT and recovery.
- Present medication education only where exact patient-facing wording has been approved by a qualified reviewer against a version-pinned authoritative source.
- Present clinic-approved safety information and clear directions for contacting the patient's care team or emergency services.
- Help users find relevant community and recovery-support resources, provided listings have a defined source, owner, review date, and correction process.
- Make approved educational material available for patients to revisit outside appointments.

No function in this list should be represented as implemented merely because it appears in this intended-use proposal.

## 4. Explicit exclusions and safety boundaries

MAT Companion is not intended to:
- Diagnose, screen for, or predict a disease or medical condition.
- Prescribe, initiate, discontinue, select, or change medication or treatment.
- Recommend an individualized dose, dosing schedule, taper, or treatment plan.
- Determine whether a patient should start, stop, continue, or change MOUD/MAT.
- Provide patient-specific drug-interaction analysis or individualized risk scores.
- Replace a physician, advanced practice clinician, nurse, pharmacist, counselor, or other qualified professional.
- Monitor patients or provide continuous clinical supervision.
- Function as an emergency-response service, crisis line, or substitute for 911/emergency services.
- Send clinical alerts or make care recommendations unless a separate, validated, authorized workflow is specified and reviewed.

Any future feature that appears to cross these boundaries requires a new intended-use and regulatory assessment before implementation or release.

## 5. Clinical authority and content governance

- The treating clinic and its qualified professionals retain authority over diagnosis, prescribing, treatment, and patient-specific care.
- Clinical claims must be maintained in a claim register with exact wording, intended audience, authoritative source, source revision/date, reviewer identity and credentials, decision, review date, and content version.
- Approval must apply to the exact wording and exact source revision. A source update, material wording change, or changed intended use triggers re-review.
- The current application release gate is a software convention, not proof of reviewer identity or a cryptographically authenticated signature.
- Unapproved or stale clinical claims must remain unavailable to users (fail closed).

## 6. Current implementation versus proposal

As of the repository baseline above, the README describes version `0.1.0-dev` as an early React/Vite foundation and says it has not been deployed. The current UI contains:
- A single development-preview page.
- A medication-safety section that displays a review-pending state because `RELEASED_CLAIMS` is empty.
- Generic emergency placeholder text explicitly marked as pending clinical review.
- A footer stating that no personal health information is collected.

The repository describes a static client-side application with no backend, database, analytics, or third-party network calls. It does not currently demonstrate patient onboarding, accounts, care-team messaging, individualized medication tools, resource directories, clinical dashboards, or clinic workflow integration.

These are repository observations, not an independent runtime, penetration, privacy, or deployment audit. No live deployment has been verified.

## 7. Demonstration restrictions

Until separate technical, privacy, security, clinical, and institutional gates are satisfied:
- Demonstrations must use synthetic information only.
- Do not enter, collect, store, or transmit patient-identifiable or protected health information.
- Keep medication claims blocked unless the exact content and source revision have qualified clinical approval.
- Label the build as a development preview and clearly identify placeholders and unavailable functions.
- Do not invite patients to rely on the application for medical decisions or urgent assistance.

## 8. Required decisions before approval

The product owner and clinic reviewer must resolve:
1. The precise target population, including age range and care settings.
2. Whether the initial scope is limited to general education and static resource navigation.
3. Which medications and claims, if any, are in scope for the first release.
4. Which clinician credentials and clinic authority are acceptable for content approval.
5. The exact emergency and urgent-care wording and escalation destinations.
6. Whether any data collection, accounts, analytics, messaging, or integrations are proposed.
7. Whether the intended functions raise FDA device/CDS, HIPAA, 42 CFR Part 2, state-law, or other regulatory obligations in the actual deployment context.

## 9. Approval record — intentionally blank

- Clinic / organization:
- Clinical reviewer:
- Credentials and scope:
- Product version and commit:
- Document version:
- Decision: Pending / Approved with conditions / Revision required / Not approved
- Conditions and rationale:
- Reviewer signature and date:

**No approval is implied by this draft.**