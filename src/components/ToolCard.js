import React from 'react';
import StatusPill from './StatusPill';

function priorityTone(priority) {
  if (priority === 1) return 'cyan';
  if (priority === 2) return 'blue';
  return 'muted';
}

export default function ToolCard({ tool }) {
  return (
    <article className="asn-card asn-tool-card">
      <div className="asn-card-topline">
        <span>{tool.category}</span>
        <StatusPill tone={priorityTone(tool.priority)}>P{tool.priority}</StatusPill>
      </div>
      <h3>{tool.name}</h3>
      <p className="asn-muted">{tool.vendor} · {tool.type}</p>
      <p>{tool.description}</p>
      <div className="asn-tag-row">
        {tool.domains.map((domain) => <span key={domain}>{domain}</span>)}
      </div>
      <div className="asn-card-footer">
        <StatusPill tone="green">{tool.maturity}</StatusPill>
        <a href={tool.link}>Open dossier →</a>
      </div>
    </article>
  );
}
