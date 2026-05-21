import React from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';

export default function HeroVisual() {
  const consoleImage = useBaseUrl('/img/hero/mission-console.svg');
  return (
    <div className="asn-hero-visual" aria-label="Aerospace simulation visual system">
      <img src={consoleImage} alt="Mission control style aerospace simulation dashboard" />
      <div className="asn-floating-panel asn-floating-panel--one">
        <span>MODEL STATUS</span>
        <strong>Validated pipeline</strong>
      </div>
      <div className="asn-floating-panel asn-floating-panel--two">
        <span>SOFTWARE LANDSCAPE</span>
        <strong>30+ tracked tools</strong>
      </div>
    </div>
  );
}
