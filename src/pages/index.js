import React, { useMemo, useState } from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import useBaseUrl from '@docusaurus/useBaseUrl';
import {
  visualAssets,
  dashboardStats,
  operatingModel,
  researchPillars,
  domains,
  intelligenceItems,
  tools,
  projects,
  lifecycle,
  missionDossiers,
  modelInferenceMethods,
} from '../data/siteContent';

function Img({ src, alt, className = '' }) {
  return <img className={className} src={useBaseUrl(src)} alt={alt} loading="lazy" />;
}

function SectionHeader({ eyebrow, title, children }) {
  return (
    <div className="asn-section-head">
      <span>{eyebrow}</span>
      <h2>{title}</h2>
      {children && <p>{children}</p>}
    </div>
  );
}

function MissionAtlas({ activeDomain }) {
  const [mode, setMode] = useState('LEO');
  const modeInfo = {
    LEO: ['550 km', '星座覆盖 / 入轨验证', 'STK + Orekit + Cesium'],
    Transfer: ['TLI / Hohmann', '转移窗口 / 机动预算', 'GMAT + Tudat + Python'],
    Descent: ['15 km → 0 m', '月面下降 / 软着陆', 'Basilisk + Simulink'],
  };
  const info = modeInfo[mode];

  return (
    <div className="asn-atlas-card asn-atlas-card--prime">
      <Img src={visualAssets.hero} alt="航天任务仿真主视觉" />
      <div className="asn-orbit-hud">
        <div className="asn-hud-top">
          <span>MISSION ATLAS</span>
          <b>{activeDomain.accent}</b>
        </div>
        <div className="asn-mode-switch">
          {Object.keys(modeInfo).map((item) => (
            <button key={item} className={mode === item ? 'active' : ''} onClick={() => setMode(item)}>
              {item}
            </button>
          ))}
        </div>
        <div className="asn-hud-metrics">
          <div><span>尺度</span><strong>{info[0]}</strong></div>
          <div><span>任务对象</span><strong>{info[1]}</strong></div>
          <div><span>工具链</span><strong>{info[2]}</strong></div>
          <div><span>当前研究域</span><strong>{activeDomain.title}</strong></div>
        </div>
      </div>
    </div>
  );
}

function RadarBoard({ projects }) {
  const [active, setActive] = useState(projects[0]);
  const positions = [
    ['70%', '29%'], ['53%', '52%'], ['34%', '38%'], ['67%', '72%'], ['30%', '68%'],
    ['46%', '23%'], ['79%', '58%'], ['24%', '50%'], ['58%', '41%'], ['43%', '77%'],
  ];

  return (
    <div className="asn-radar-board">
      <div className="asn-radar-map">
        <Img src={visualAssets.radar} alt="开源项目雷达阵列" className="asn-radar-bg" />
        <span className="asn-radar-ring asn-radar-ring--1" />
        <span className="asn-radar-ring asn-radar-ring--2" />
        <span className="asn-radar-ring asn-radar-ring--3" />
        <span className="asn-radar-sweep" />
        {projects.slice(0, 10).map((project, index) => (
          <button
            key={project.name}
            className={`asn-radar-dot ${active.name === project.name ? 'active' : ''}`}
            style={{ left: positions[index][0], top: positions[index][1] }}
            onMouseEnter={() => setActive(project)}
            onClick={() => setActive(project)}
            aria-label={`查看 ${project.name}`}
          >
            {project.rating}
          </button>
        ))}
      </div>
      <div className="asn-radar-detail">
        <div className="asn-kicker">ACTIVE TARGET</div>
        <h3>{active.name}</h3>
        <p>{active.value}</p>
        <div className="asn-tags">
          <span>{active.domain}</span>
          <span>{active.language}</span>
          <span>{active.reproduction}</span>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  const [activeDomain, setActiveDomain] = useState(domains[0]);
  const [toolQuery, setToolQuery] = useState('');
  const topTools = useMemo(() => tools.filter((tool) => tool.priority === 'A'), []);
  const visibleTools = useMemo(() => {
    const query = toolQuery.trim().toLowerCase();
    if (!query) return topTools.slice(0, 8);
    return tools.filter((tool) => [tool.name, tool.vendor, tool.category, tool.type, tool.maturity, tool.role, ...tool.domains].join(' ').toLowerCase().includes(query)).slice(0, 10);
  }, [toolQuery, topTools]);

  return (
    <Layout title="首页" description="航天仿真工程软件、开源项目、论文资料与复现实验的中文研究门户">
      <main className="asn-home">
        <section className="asn-hero asn-hero--showcase">
          <div className="asn-starfield" />
          <div className="asn-shell asn-hero-grid">
            <div className="asn-hero-copy">
              <div className="asn-badge">AEROSPACE SIMULATION RESEARCH OS</div>
              <h1>一个面向航天仿真的个人研究控制台。</h1>
              <p>
                不是普通博客，也不是链接收藏夹。这里把航天仿真的工具链、开源项目、公开数据、论文方法、
                参数反推、任务案例和复现实验组织成一套可持续维护的证据系统。
              </p>
              <div className="asn-hero-actions">
                <Link className="asn-button asn-button--primary" to="/tools">查看工程软件星图</Link>
                <Link className="asn-button asn-button--ghost" to="/reproduction-lab">进入复现实验室</Link>
              </div>
              <div className="asn-stat-grid">
                {dashboardStats.map((item) => (
                  <div key={item.label}>
                    <strong>{item.value}</strong>
                    <span>{item.label}</span>
                    <em>{item.detail}</em>
                  </div>
                ))}
              </div>
            </div>
            <MissionAtlas activeDomain={activeDomain} />
          </div>
        </section>

        <section className="asn-shell asn-domain-dock">
          {domains.map((domain) => (
            <button key={domain.title} className={activeDomain.title === domain.title ? 'active' : ''} onClick={() => setActiveDomain(domain)}>
              <Img src={domain.image} alt={domain.title} />
              <span>{domain.title}</span>
              <small>{domain.desc}</small>
            </button>
          ))}
        </section>

        <section className="asn-shell asn-section asn-section--dense">
          <SectionHeader eyebrow="Operating Model" title="先建立研究工作流，再谈页面好不好看">
            网站的核心不是炫图，而是每天新增资料后仍然能维护：来源、可信度、仿真对象、模型假设、复现实验和结论都要有位置。
          </SectionHeader>
          <div className="asn-ops-rail">
            {operatingModel.map((item) => (
              <article key={item.step}>
                <span>{item.step}</span>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="asn-shell asn-section">
          <div className="asn-pillar-grid asn-pillar-grid--editorial">
            {researchPillars.map((item) => (
              <Link className="asn-pillar-card" to={item.link} key={item.title}>
                <Img src={item.image} alt={item.title} />
                <div>
                  <span>{item.label}</span>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section className="asn-shell asn-section">
          <div className="asn-editorial-split">
            <div>
              <SectionHeader eyebrow="Mission Dossiers" title="用任务档案承载真正的航天仿真内容">
                首页必须直接展示研究对象，而不是只说“这里有资料”。任务档案负责把工具、数据、模型、验证和可视化串起来。
              </SectionHeader>
              <div className="asn-dossier-list">
                {missionDossiers.map((item) => (
                  <article className="asn-dossier-card" key={item.title}>
                    <Img src={item.image} alt={item.title} />
                    <div>
                      <span>{item.type}</span>
                      <h3>{item.title}</h3>
                      <p>{item.desc}</p>
                      <footer>{item.metrics.map((metric) => <em key={metric}>{metric}</em>)}</footer>
                    </div>
                  </article>
                ))}
              </div>
            </div>
            <div className="asn-side-visual-card asn-side-visual-card--tall">
              <Img src={visualAssets.knowledge} alt="知识图谱视觉图" />
              <div>
                <span>KNOWLEDGE FABRIC</span>
                <strong>资料必须能连到模型，模型必须能连到验证。</strong>
                <p>一条新闻、一个仓库、一篇论文，最终要能说明它支撑了哪个仿真对象、哪个参数、哪个验证指标。</p>
              </div>
            </div>
          </div>
        </section>

        <section className="asn-shell asn-section">
          <SectionHeader eyebrow="Parameter Inference" title="公开数据不够时，如何诚实地建立仿真参数">
            航天仿真研究经常拿不到完整真实数据。这个网站要明确区分公开事实、工程假设、低阶估计和反推参数，不能把猜测包装成真值。
          </SectionHeader>
          <div className="asn-inference-grid">
            {modelInferenceMethods.map((item, index) => (
              <article key={item.title}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
                <strong>{item.output}</strong>
              </article>
            ))}
          </div>
        </section>

        <section className="asn-shell asn-section">
          <div className="asn-tool-layout">
            <div className="asn-tool-intro">
              <SectionHeader eyebrow="Engineering Toolchain" title="软件栈按任务链路组织，而不是按名字堆砌">
                工具条目要回答：它在什么阶段用，输入输出是什么，能和什么工具交叉验证，适合学习还是适合工程集成。
              </SectionHeader>
              <label className="asn-search">
                <span>搜索工具</span>
                <input value={toolQuery} onChange={(event) => setToolQuery(event.target.value)} placeholder="STK / GMAT / CFD / GNC / Open MCT..." />
              </label>
              <Img src={visualAssets.tools} alt="工程软件栈视觉图" className="asn-tool-visual" />
            </div>
            <div className="asn-tool-grid">
              {visibleTools.map((tool) => (
                <a className="asn-tool-card" key={tool.name} href={tool.url} target="_blank" rel="noreferrer">
                  <div><span>{tool.category}</span><strong>{tool.priority}</strong></div>
                  <h3>{tool.name}</h3>
                  <p>{tool.vendor} · {tool.type} · {tool.maturity}</p>
                  <small>{tool.role}</small>
                  <footer>{tool.domains.map((domain) => <em key={domain}>{domain}</em>)}</footer>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="asn-shell asn-section">
          <div className="asn-radar-layout">
            <RadarBoard projects={projects} />
            <div>
              <SectionHeader eyebrow="Project Radar" title="开源项目要评估，不是收藏">
                重点不是项目多，而是判断它能不能成为基准、能不能复现、许可证是否清楚、是否值得进入你的工程链路。
              </SectionHeader>
              <div className="asn-criteria-grid">
                <span>成熟度</span><span>复现状态</span><span>许可证</span><span>工程价值</span>
              </div>
            </div>
          </div>
        </section>

        <section className="asn-shell asn-section">
          <div className="asn-lab-panel">
            <div>
              <span className="asn-kicker">REPRODUCTION LAB</span>
              <h2>最后沉淀的不是文章，是证据链。</h2>
              <p>每个高价值工具、论文和项目都要留下环境、依赖、命令、输入、输出、误差和结论。未来的你必须能重新跑通。</p>
              <Img src={visualAssets.lab} alt="复现实验室视觉图" />
            </div>
            <div className="asn-lifecycle">
              {lifecycle.map((step) => (
                <div key={step.step}>
                  <span>{step.step}</span>
                  <strong>{step.name}</strong>
                  <em>{step.desc}</em>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
