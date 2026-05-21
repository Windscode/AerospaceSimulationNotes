import React from 'react';

export default function StatusPill({ children, tone = 'blue' }) {
  return <span className={`asn-pill asn-pill--${tone}`}>{children}</span>;
}
