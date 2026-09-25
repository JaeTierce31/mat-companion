# MAT-CNS-001 — pending clinical review

Status: source identified; clinical review pending; released app copy absent.

The December 2025 FDA METHADOSE label, reference ID 5715751, describes increased risk when methadone is combined with benzodiazepines or other CNS depressants and cautions against categorically denying treatment because of the combination. Sections 5.2 and 7: https://www.accessdata.fda.gov/drugsatfda_docs/label/2025/017116s048lbl.pdf

Supporting research: Hestevik et al., BMC Psychiatry (2024), DOI 10.1186/s12888-024-06191-3; Best et al., BMJ Open (2024), DOI 10.1136/bmjopen-2023-074668. Observational associations are not individualized risk estimates.

Release rule: `RELEASED_CLAIMS` remains empty. A later PR must carry a qualified clinician's verifiable approval for exact copy, the currently applicable product label, a review date, the explicit emergency path, and independent UI/accessibility tests. The current gate is a code review convention, not cryptographic signature verification. Test fixtures with `TEST-ONLY` are synthetic and must never be put in a release manifest. No PHI belongs in this repository or issue.

Tracking: https://linear.app/j3sovereignty/issue/J3S-34/mat-cns-001-clinical-review-and-app-test-for-methadonecns-depressant
