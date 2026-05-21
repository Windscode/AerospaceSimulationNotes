import React from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import SectionHeader from '../components/home/SectionHeader';
import OrbitalVisual from '../components/home/OrbitalVisual';
import { focusDomains, featuredProjects, latestRadar, workflowSteps } from '../data/homeContent';
import styles from './index.module.css';

export default function Home() {
  return (
    <Layout title="Aerospace Simulation Intelligence Hub" description="A professional knowledge hub for aerospace simulation research.">
      <main className={styles.main}>
        <section className={styles.hero}>
          <div className={styles.heroBackdrop} />
          <div className={`${styles.heroInner} container`}>
            <div className={styles.heroCopy}>
              <div className={styles.badge}>AEROSPACE SIMULATION INTELLIGENCE HUB</div>
              <h1>面向长期积累的航天仿真研究门户。</h1>
              <p>
                聚焦轨道、姿态、GNC、推进、气动、六自由度仿真、任务分析和开源工具评估。
                这里不是链接收藏夹，而是一个可持续维护的技术知识库、项目雷达和研究日志系统。
              </p>
              <div className={styles.actions}>
                <Link className={styles.primaryAction} to="/docs/intro">Explore Knowledge Base</Link>
                <Link className={styles.secondaryAction} to="/docs/radar/overview">View Project Radar</Link>
              </div>
              <div className={styles.metrics}>
                <div><strong>6</strong><span>Core domains</span></div>
                <div><strong>Daily</strong><span>Research intake</span></div>
                <div><strong>A-D</strong><span>Project grading</span></div>
              </div>
            </div>
            <OrbitalVisual />
          </div>
        </section>

        <section className={`${styles.mission} container`}>
          <article><span>01</span><h3>Curated Knowledge</h3><p>资料进入网站前先分类、判定价值和标注适用边界。</p></article>
          <article><span>02</span><h3>Engineering Review</h3><p>项目不仅看热度，更看能否编译、复现、验证和集成。</p></article>
          <article><span>03</span><h3>Living Archive</h3><p>每天的新发现先进入动态层，再沉淀为稳定知识条目。</p></article>
        </section>

        <section className={`${styles.section} container`}>
          <SectionHeader
            eyebrow="Focus Domains"
            title="长期跟踪的核心方向"
            description="首页只放高层入口，稳定知识写入 docs，日常发现写入 Research Log，项目价值判断写入 Project Radar。"
          />
          <div className={styles.domainGrid}>
            {focusDomains.map((domain) => (
              <Link key={domain.title} to={domain.link} className={styles.domainCard}>
                <small>{domain.kicker}</small>
                <h3>{domain.title}</h3>
                <p>{domain.description}</p>
                <span>Open dossier →</span>
              </Link>
            ))}
          </div>
        </section>

        <section className={styles.radarSection}>
          <div className="container">
            <SectionHeader
              eyebrow="Latest Radar"
              title="最新动态入口"
              description="这个区域用于放每天新增、正在评估、准备复现或值得继续跟踪的内容。"
            />
            <div className={styles.radarList}>
              {latestRadar.map((item) => (
                <Link key={item.title} to={item.link} className={styles.radarItem}>
                  <div><span>{item.date}</span><span>{item.category}</span></div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className={`${styles.section} container`}>
          <SectionHeader
            eyebrow="Featured Projects"
            title="精选项目雷达"
            description="开源项目不要只收藏链接，要记录用途、成熟度、复现状态、授权风险和下一步动作。"
          />
          <div className={styles.projectGrid}>
            {featuredProjects.map((project) => (
              <Link key={project.name} to={project.link} className={styles.projectCard}>
                <div className={styles.projectTop}><span>{project.type}</span><strong>{project.rating}</strong></div>
                <h3>{project.name}</h3>
                <p>{project.description}</p>
                <footer>{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</footer>
              </Link>
            ))}
          </div>
        </section>

        <section className={styles.workflowSection}>
          <div className="container">
            <SectionHeader
              eyebrow="Operating Model"
              title="从发现资料到沉淀知识的维护流程"
              description="网站能否长期有价值，核心不在于页面好看，而在于日常维护是否稳定。"
            />
            <div className={styles.workflowGrid}>
              {workflowSteps.map((item) => (
                <article key={item.step}>
                  <span>{item.step}</span>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className={`${styles.finalCta} container`}>
          <div>
            <span>Maintainable by Design</span>
            <h2>先让资料有结构，再让内容有价值。</h2>
            <p>每次新增内容时，记录来源、用途、判断、复现状态和下一步动作。这样几个月后它会变成资产，而不是杂乱收藏夹。</p>
          </div>
          <div className={styles.finalActions}>
            <Link className={styles.primaryAction} to="/docs/methodology/maintenance-workflow">Open Workflow</Link>
            <Link className={styles.secondaryAction} to="/blog">Read Research Log</Link>
          </div>
        </section>
      </main>
    </Layout>
  );
}
