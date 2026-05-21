import React from 'react';

export default function SectionHeader({ eyebrow, title, description, align = 'left' }) {
  return (
    <div className={`asn-section-header asn-section-header--${align}`}>
      {eyebrow && <div className="asn-eyebrow">{eyebrow}</div>}
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  );
}
