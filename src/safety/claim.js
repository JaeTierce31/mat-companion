// Release entries must be reviewed and committed; there is no patient-supplied approval path.
export const CLAIM_ID = 'MAT-CNS-001';
export const SOURCE_REVISION = 'FDA-METHADOSE-2025-12-REF-5715751';
export const SOURCE_URL = 'https://www.accessdata.fda.gov/drugsatfda_docs/label/2025/017116s048lbl.pdf';

// Empty until an actual qualified reviewer approves exact wording and a later PR releases it.
export const RELEASED_CLAIMS = Object.freeze([]);

export function getClaimView(releases = RELEASED_CLAIMS) {
  const match = Array.isArray(releases) ? releases.find(item => item?.claimId === CLAIM_ID) : null;
  if (match?.status !== 'approved' || match.sourceRevision !== SOURCE_REVISION ||
      typeof match.text !== 'string' || !match.text.trim() ||
      typeof match.reviewerId !== 'string' || !match.reviewerId.trim() ||
      typeof match.credential !== 'string' || !match.credential.trim() ||
      typeof match.signedAt !== 'string' || !match.signedAt.trim()) {
    return {status: 'blocked', claimId: CLAIM_ID};
  }
  return {status: 'approved', claimId: CLAIM_ID, text: match.text, sourceUrl: SOURCE_URL};
}
