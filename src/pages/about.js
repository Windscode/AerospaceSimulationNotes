import React from 'react';
import Layout from '@theme/Layout';
import SectionHeader from '../components/SectionHeader';

export default function AboutPage() {
  return (
    <Layout title="About" description="About Aerospace Simulation Notes.">
      <main className="asn-page asn-list-page">
        <section className="asn-page-hero">
          <div className="container">
            <div className="asn-badge">ABOUT</div>
            <h1>Aerospace Simulation Notes</h1>
            <p>A long-term personal research portal for aerospace simulation tools, projects, papers and reproducible engineering practice.</p>
          </div>
        </section>
        <section className="container asn-section asn-prose-block">
          <SectionHeader eyebrow="POSITIONING" title="A research portal, not a casual blog" description="The site is designed to become a durable technical asset: structured, searchable, maintainable and honest about uncertainty." />
          <p>It combines three layers: an intelligence layer for daily updates, a curated layer for evaluated resources, and a stable knowledge layer for reusable engineering notes.</p>
        </section>
      </main>
    </Layout>
  );
}
