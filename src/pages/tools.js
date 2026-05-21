import React, { useMemo, useState } from 'react';
import Layout from '@theme/Layout';
import SectionHeader from '../components/SectionHeader';
import ToolCard from '../components/ToolCard';
import { tools } from '../data/siteContent';

const categories = ['All', ...Array.from(new Set(tools.map((tool) => tool.category)))];
const types = ['All', 'Commercial', 'Open Source', 'Reference', 'Mixed'];

export default function ToolsPage() {
  const [category, setCategory] = useState('All');
  const [type, setType] = useState('All');
  const [query, setQuery] = useState('');

  const filtered = useMemo(() => {
    const q = query.toLowerCase();
    return tools.filter((tool) => {
      const matchCategory = category === 'All' || tool.category === category;
      const matchType = type === 'All' || tool.type.includes(type);
      const matchQuery = !q || [tool.name, tool.vendor, tool.category, tool.description, tool.domains.join(' ')].join(' ').toLowerCase().includes(q);
      return matchCategory && matchType && matchQuery;
    });
  }, [category, type, query]);

  return (
    <Layout title="Engineering Software Landscape" description="Tool matrix for aerospace simulation software and engineering workflows.">
      <main className="asn-page asn-list-page">
        <section className="asn-page-hero">
          <div className="container">
            <div className="asn-badge">ENGINEERING SOFTWARE LANDSCAPE</div>
            <h1>Tool Stack</h1>
            <p>Commercial and open-source software for mission analysis, GNC, CFD, structures, propulsion, MBSE, digital twin and automation.</p>
          </div>
        </section>
        <section className="container asn-section">
          <SectionHeader eyebrow="FILTERABLE MATRIX" title={`${filtered.length} tools in current view`} description="Use this as the daily-maintained software landscape. Add new tools in src/data/siteContent.js first, then create a full dossier when needed." />
          <div className="asn-filter-panel">
            <input placeholder="Search tools, vendors, domains..." value={query} onChange={(e) => setQuery(e.target.value)} />
            <select value={category} onChange={(e) => setCategory(e.target.value)}>{categories.map((item) => <option key={item}>{item}</option>)}</select>
            <select value={type} onChange={(e) => setType(e.target.value)}>{types.map((item) => <option key={item}>{item}</option>)}</select>
          </div>
          <div className="asn-card-grid asn-card-grid--three">
            {filtered.map((tool) => <ToolCard key={tool.id} tool={tool} />)}
          </div>
        </section>
      </main>
    </Layout>
  );
}
