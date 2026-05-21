import React from 'react';
import Layout from '@theme/Layout';
import SectionHeader from '../components/SectionHeader';
import StatusPill from '../components/StatusPill';
import { experiments } from '../data/siteContent';

export default function ReproductionLabPage() {
  return (
    <Layout title="Reproduction Lab" description="Reproducible experiment tracking for aerospace simulation.">
      <main className="asn-page asn-list-page">
        <section className="asn-page-hero">
          <div className="container">
            <div className="asn-badge">REPRODUCTION LAB</div>
            <h1>Build confidence through repeatable experiments</h1>
            <p>Every important tool or method should eventually be tied to a minimal reproducible experiment and a benchmark.</p>
          </div>
        </section>
        <section className="container asn-section">
          <SectionHeader eyebrow="EXPERIMENT QUEUE" title="Initial benchmark plan" description="Use this page to track planned, running and validated reproduction efforts." />
          <div className="asn-card-grid asn-card-grid--two">
            {experiments.map((exp) => (
              <article className="asn-card asn-exp-card" key={exp.id}>
                <div className="asn-card-topline"><span>{exp.domain}</span><StatusPill tone="green">{exp.status}</StatusPill></div>
                <h3>{exp.title}</h3>
                <dl className="asn-mini-specs">
                  <div><dt>Difficulty</dt><dd>{exp.difficulty}</dd></div>
                  <div><dt>Benchmark</dt><dd>{exp.benchmark}</dd></div>
                  <div><dt>Output</dt><dd>{exp.output}</dd></div>
                </dl>
              </article>
            ))}
          </div>
        </section>
      </main>
    </Layout>
  );
}
