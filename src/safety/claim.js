// Release entries must be reviewed and committed; there is no patient-supplied approval path.
export const CLAIM_ID = 'MAT-CNS-001';
// DailyMed's METHADOSE set 808a9d0b-720b-4034-a862-5122ff514608,
// version 41 (revised April 2026; published May 1, 2026).
export const SOURCE_REVISION = 'DAILYMED-METHADOSE-808A9D0B-720B-4034-A862-5122FF514608-V41';
// This page follows the latest label. The version-41 archive is
// recorded in docs/MAT-CNS-001.md; recheck the displayed source before release.
export const SOURCE_URL = 'https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=808a9d0b-720b-4034-a862-5122ff514608';

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
