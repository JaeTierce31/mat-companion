import React from 'react';
import {getClaimView} from './safety/claim.js';

export function App({claimView = getClaimView()}) {
  return (
    <main className="layout">
      <header>
        <p className="eyebrow">MAT Companion · development preview</p>
        <h1>Support that keeps safety visible</h1>
        <p className="intro">A recovery support app in development. Medication decisions belong with your treatment team.</p>
      </header>
      <section aria-labelledby="safety-heading" className="safety">
        {claimView.status === 'approved' ? (
          <>
            <h2 id="safety-heading">Medication safety</h2>
            <p>{claimView.text}</p>
            <a href={claimView.sourceUrl} target="_blank" rel="noreferrer">View source label</a>
          </>
        ) : (
          <>
            <h2 id="safety-heading">Medication safety content under review</h2>
            <p>This section is unavailable until its wording and source have been clinically reviewed.</p>
          </>
        )}
      </section>
      <footer>Development preview · no personal health information is collected.</footer>
    </main>
  );
}
