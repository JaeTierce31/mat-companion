import React from 'react';
import { getClaimView } from './safety/claim.js';

export function App() {
  const claimView = getClaimView();
  return (
    <main className="layout">
      <header>
        <p className="eyebrow">MAT Companion · development preview</p>
        <h1>Support that keeps safety visible</h1>
        <p className="intro">
          A recovery support app in development. Medication decisions belong with your treatment
          team.
        </p>
      </header>
      <section aria-labelledby="safety-heading" className="safety">
        {claimView.status === 'approved' ? (
          <>
            <h2 id="safety-heading">Medication safety</h2>
            <p>{claimView.text}</p>
            <a href={claimView.sourceUrl} target="_blank" rel="noreferrer">
              View source label
            </a>
          </>
        ) : (
          <>
            <h2 id="safety-heading">Medication safety content under review</h2>
            <p>
              This section is unavailable until its wording and source have been clinically
              reviewed.
            </p>
          </>
        )}
      </section>
      <section aria-labelledby="emergency-heading" className="emergency">
        <h2 id="emergency-heading">If you feel unsafe</h2>
        <p>Call emergency services, or call your local emergency number.</p>
        <p className="placeholder-note">
          Placeholder — final wording is pending clinical review (Linear J3S-34). No clinical
          guidance is provided here.
        </p>
      </section>
      <footer>Development preview · no personal health information is collected.</footer>
    </main>
  );
}
