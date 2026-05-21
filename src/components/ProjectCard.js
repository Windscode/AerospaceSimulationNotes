import React from 'react';
import StatusPill from './StatusPill';

function ratingTone(rating) {
  if (rating === 'A') return 'cyan';
  if (rating === 'B') return 'blue';
  return 'muted';
}

export default function ProjectCard({ project }) {
  return (
    <article className="asn-card asn-project-card">
      <div className="asn-card-topline">
        <span>{project.domain}</span>
        <StatusPill tone={ratingTone(project.rating)}>Rating {project.rating}</StatusPill>
      </div>
      <h3>{project.name}</h3>
      <p>{project.description}</p>
      <dl className="asn-mini-specs">
        <div><dt>Language</dt><dd>{project.language}</dd></div>
        <div><dt>License</dt><dd>{project.license}</dd></div>
        <div><dt>Status</dt><dd>{project.status}</dd></div>
        <div><dt>Repro</dt><dd>{project.reproduction}</dd></div>
      </dl>
      <div className="asn-card-footer">
        <StatusPill tone="green">{project.maturity}</StatusPill>
        <a href={project.link}>Source →</a>
      </div>
    </article>
  );
}
