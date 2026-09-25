import {describe, expect, it} from 'vitest';
import {CLAIM_ID, SOURCE_REVISION, RELEASED_CLAIMS, getClaimView} from '../src/safety/claim.js';

const syntheticApproval = {
  claimId: CLAIM_ID,
  status: 'approved',
  sourceRevision: SOURCE_REVISION,
  text: 'Synthetic approved copy for a test only.',
  reviewerId: 'TEST-ONLY',
  credential: 'TEST-ONLY',
  signedAt: '2026-09-25T00:00:00Z',
};

describe('MAT-CNS-001 release gate', () => {
  it('keeps the real release manifest empty until clinical approval', () => {
    expect(RELEASED_CLAIMS).toEqual([]);
    expect(getClaimView().status).toBe('blocked');
  });
  it('rejects missing and rejected review records', () => {
    expect(getClaimView([{...syntheticApproval, reviewerId: ''}]).status).toBe('blocked');
    expect(getClaimView([{...syntheticApproval, status: 'rejected'}]).status).toBe('blocked');
  });
  it('rejects the superseded FDA revision', () => {
    expect(getClaimView([{...syntheticApproval, sourceRevision: 'FDA-METHADOSE-2023-12-REF-5294248'}]).status).toBe('blocked');
  });
  it('allows a synthetic approved fixture on the exact source revision', () => {
    expect(getClaimView([syntheticApproval])).toMatchObject({status: 'approved', text: syntheticApproval.text});
  });
});
