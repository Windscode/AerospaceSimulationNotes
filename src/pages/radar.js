import React, { useMemo, useState } from 'react';
import Layout from '@theme/Layout';
import SectionHeader from '../components/SectionHeader';
import ProjectCard from '../components/ProjectCard';
import { projects } from '../data/siteContent';

const domains = ['All', ...Array.from(new Set(projects.map((project) => project.domain)))];
const ratings = ['All', 'A', 'B', 'C', 'D'];

export default function RadarPage() {
  const [domain, setDomain] = useState('All');
  const [rating, setRating] = useState('All');
  const [query, setQuery] = useState('');

  const filtered = useMemo(() => {
    const q = query.toLowerCase();
    return projects.filter((project) => {
      const matchDomain = domain === 'All' || project.domain === domain;
      const matchRating = rating === 'All' || project.rating === rating;
      const matchQuery = !q || [project.name, project.domain, project.description, project.language, project.status].join(' ').toLowerCase().includes(q);
      return matchDomain && matchRating && matchQuery;
    });
  }, [domain, rating, query]);

  return (
    <Layout title="Project Radar" description="Structured evaluation board for aerospace simulation projects.">
      <main className="asn-page asn-list-page">
        <section className="asn-page-hero">
          <div className="container">
            <div className="asn-badge">PROJECT RADAR</div>
            <h1>Open-source project intelligence board</h1>
            <p>Track maturity, reproduction status, license, engineering value and next action. This is not a bookmark list.</p>
          </div>
        </section>
        <section className="container asn-section">
          <SectionHeader eyebrow="EVALUATION BOARD" title={`${filtered.length} projects in current view`} description="Project entries should be promoted only after source review and basic reproduction planning." />
          <div className="asn-filter-panel">
            <input placeholder="Search project, language, status..." value={query} onChange={(e) => setQuery(e.target.value)} />
            <select value={domain} onChange={(e) => setDomain(e.target.value)}>{domains.map((item) => <option key={item}>{item}</option>)}</select>
            <select value={rating} onChange={(e) => setRating(e.target.value)}>{ratings.map((item) => <option key={item}>{item}</option>)}</select>
          </div>
          <div className="asn-card-grid asn-card-grid--three">
            {filtered.map((project) => <ProjectCard project={project} key={project.id} />)}
          </div>
        </section>
      </main>
    </Layout>
  );
}
