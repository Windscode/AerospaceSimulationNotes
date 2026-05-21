import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import SectionHeader from '../components/SectionHeader';
import StatusPill from '../components/StatusPill';
import { intelligenceFeed, lifecycle } from '../data/siteContent';

export default function IntelligencePage() {
  return (
    <Layout title="Intelligence Feed" description="Daily intake and research operation flow.">
      <main className="asn-page asn-list-page">
        <section className="asn-page-hero">
          <div className="container">
            <div className="asn-badge">DAILY INTELLIGENCE</div>
            <h1>Daily intake → evaluated knowledge</h1>
            <p>Fast-moving discoveries should not pollute the stable knowledge base. They enter the feed, then move through a lifecycle.</p>
          </div>
        </section>
        <section className="container asn-section">
          <SectionHeader eyebrow="CURRENT FEED" title="Latest site intelligence" description="Use blog posts for narrative updates and structured data files for tools and projects." />
          <div className="asn-feed-grid asn-feed-grid--wide">
            {intelligenceFeed.map((item) => (
              <Link className="asn-feed-card" to={item.link} key={item.title}>
                <div><span>{item.date}</span><StatusPill tone="cyan">{item.type}</StatusPill></div>
                <h3>{item.title}</h3>
                <p>{item.summary}</p>
              </Link>
            ))}
          </div>
        </section>
        <section className="asn-dark-section">
          <div className="container">
            <SectionHeader eyebrow="CONTENT GOVERNANCE" title="Lifecycle states" description="This model gives you a daily operating discipline." />
            <div className="asn-lifecycle">
              {lifecycle.map((item, index) => (
                <article key={item.state}>
                  <span>{String(index + 1).padStart(2, '0')}</span>
                  <h3>{item.state}</h3>
                  <p>{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
