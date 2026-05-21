import React from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import useBaseUrl from '@docusaurus/useBaseUrl';
import SectionHeader from '../components/SectionHeader';
import StatusPill from '../components/StatusPill';
import ToolCard from '../components/ToolCard';
import ProjectCard from '../components/ProjectCard';
import HeroVisual from '../components/HeroVisual';
import { domains, tools, projects, intelligenceFeed, lifecycle, experiments } from '../data/siteContent';

export default function Home() {
  const softwareMap = useBaseUrl('/img/diagrams/software-map.svg');
  const coreTools = tools.filter((tool) => tool.priority === 1).slice(0, 6);
  const coreProjects = projects.slice(0, 4);
  return (
    <Layout title="Aerospace Simulation Intelligence Hub" description="Professional aerospace simulation research portal and maintainable knowledge base.">
      <main className="asn-page asn-home">
        <section className="asn-hero">
          <div className="asn-hero-bg" />
          <div className="container asn-hero-grid">
            <div className="asn-hero-copy">
              <div className="asn-badge">AEROSPACE SIMULATION INTELLIGENCE HUB</div>
              <h1>Professional research infrastructure for aerospace simulation.</h1>
              <p>
                A maintainable portal for engineering software, open-source projects, papers, reproduction logs and long-term domain knowledge across orbital mechanics, GNC, propulsion, CFD, structures and digital-twin visualization.
              </p>
              <div className="asn-action-row">
                <Link className="asn-btn asn-btn--primary" to="/tools">Explore Tool Stack</Link>
                <Link className="asn-btn asn-btn--secondary" to="/radar">Open Project Radar</Link>
              </div>
              <div className="asn-metric-strip">
                <div><strong>{tools.length}</strong><span>tracked tools</span></div>
                <div><strong>{domains.length}</strong><span>knowledge domains</span></div>
                <div><strong>6-state</strong><span>content lifecycle</span></div>
              </div>
            </div>
            <HeroVisual />
          </div>
        </section>

        <section className="container asn-mission-grid">
          <article><span>01</span><h3>Not a blog. A research operating system.</h3><p>Daily discoveries are converted into evaluated tools, project dossiers, paper notes and reproducible experiments.</p></article>
          <article><span>02</span><h3>Engineering software is first-class content.</h3><p>MATLAB, Simulink, Ansys, STK, GMAT, Orekit, Tudat, Basilisk, OpenFOAM and SU2 are treated as a navigable ecosystem.</p></article>
          <article><span>03</span><h3>Quality is governed, not guessed.</h3><p>Every entry carries maturity, license, interface, reproducibility and engineering-value fields.</p></article>
        </section>

        <section className="asn-dark-section">
          <div className="container">
            <SectionHeader eyebrow="INTELLIGENCE FEED" title="Daily intake, weekly digest and stable archive" description="The site is designed for daily maintenance: capture new information quickly, then promote it into stable knowledge when it has been evaluated." />
            <div className="asn-feed-grid">
              {intelligenceFeed.map((item) => (
                <Link className="asn-feed-card" to={item.link} key={item.title}>
                  <div><span>{item.date}</span><StatusPill tone="blue">{item.type}</StatusPill></div>
                  <h3>{item.title}</h3>
                  <p>{item.summary}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="container asn-section">
          <SectionHeader eyebrow="ENGINEERING SOFTWARE LANDSCAPE" title="A serious aerospace simulation site needs a serious tool matrix" description="The new package includes a data-driven tool stack page with core commercial and open-source software used in mission analysis, controls, CFD, structures, propulsion, MBSE and visualization." />
          <div className="asn-landscape-grid">
            <div className="asn-landscape-image"><img src={softwareMap} alt="Aerospace simulation software landscape" /></div>
            <div className="asn-tool-preview-grid">
              {coreTools.map((tool) => <ToolCard tool={tool} key={tool.id} />)}
            </div>
          </div>
          <div className="asn-action-row asn-center"><Link className="asn-btn asn-btn--primary" to="/tools">Open full software landscape</Link></div>
        </section>

        <section className="asn-dark-section">
          <div className="container">
            <SectionHeader eyebrow="PROJECT RADAR" title="Structured evaluation replaces link dumping" description="Open-source projects are graded by language, license, maturity, build status, reproduction status and engineering value." />
            <div className="asn-card-grid asn-card-grid--four">
              {coreProjects.map((project) => <ProjectCard project={project} key={project.id} />)}
            </div>
          </div>
        </section>

        <section className="container asn-section">
          <SectionHeader eyebrow="KNOWLEDGE DOMAINS" title="Stable engineering knowledge is separated from daily noise" description="Evergreen domain pages provide long-term technical structure while blog and intake pages handle fast-moving updates." />
          <div className="asn-domain-grid">
            {domains.map((domain) => (
              <Link className="asn-domain-card" to={domain.link} key={domain.id}>
                <div><StatusPill tone={domain.maturity === 'Core' ? 'cyan' : 'blue'}>{domain.maturity}</StatusPill></div>
                <h3>{domain.title}</h3>
                <small>{domain.subtitle}</small>
                <p>{domain.description}</p>
              </Link>
            ))}
          </div>
        </section>

        <section className="asn-dark-section">
          <div className="container">
            <SectionHeader eyebrow="REPRODUCTION LAB" title="Experiments are the difference between collection and competence" description="The lab format tracks benchmark, input, output, environment and validation evidence for each experiment." />
            <div className="asn-card-grid asn-card-grid--four">
              {experiments.map((exp) => (
                <Link className="asn-card asn-exp-card" to={exp.link} key={exp.id}>
                  <div className="asn-card-topline"><span>{exp.domain}</span><StatusPill tone="green">{exp.status}</StatusPill></div>
                  <h3>{exp.title}</h3>
                  <p><strong>Benchmark:</strong> {exp.benchmark}</p>
                  <p><strong>Output:</strong> {exp.output}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="container asn-section">
          <SectionHeader eyebrow="CONTENT LIFECYCLE" title="A governance model for daily maintenance" description="Every item has a state. This prevents the site from becoming a chaotic bookmark list." align="center" />
          <div className="asn-lifecycle">
            {lifecycle.map((item, index) => (
              <article key={item.state}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <h3>{item.state}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </section>
      </main>
    </Layout>
  );
}
