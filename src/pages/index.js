import React, { useMemo, useState } from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import useBaseUrl from '@docusaurus/useBaseUrl';
import {
  visualAssets,
  dashboardStats,
  researchPillars,
  domains,
  intelligenceItems,
  tools,
  projects,
  lifecycle,
  caseStudies,
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
    LEO: ['550 km', '低轨星座 / 近地任务', '快速覆盖与回放验证'],
    MEO: ['20,200 km', '导航星座 / 中轨任务', '长期传播与误差评估'],
    GEO: ['35,786 km', '通信覆盖 / 地球同步', '链路窗口与载荷可见性'],
  };
  const info = modeInfo[mode];

  return (
    <div className="asn-atlas-card">
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
          <div><span>轨道高度</span><strong>{info[0]}</strong></div>
          <div><span>任务场景</span><strong>{info[1]}</strong></div>
          <div><span>研究用途</span><strong>{info[2]}</strong></div>
          <div><span>当前领域</span><strong>{activeDomain.title}</strong></div>
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
        <section className="asn-hero">
          <div className="asn-starfield" />
          <div className="asn-shell asn-hero-grid">
            <div className="asn-hero-copy">
              <div className="asn-badge">AEROSPACE SIMULATION RESEARCH</div>
              <h1>把零散资料，整理成可验证的航天仿真知识资产。</h1>
              <p>
                面向个人长期维护的航天仿真研究站：沉淀工程软件、开源项目、公开数据、论文笔记、
                复现实验、任务案例和“从公开信息推测仿真数据”的方法论。
              </p>
              <div className="asn-hero-actions">
                <Link className="asn-button asn-button--primary" to="/tools">进入工程软件栈</Link>
                <Link className="asn-button asn-button--ghost" to="/intelligence">查看研究情报流</Link>
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

        <section className="asn-shell asn-section">
          <SectionHeader eyebrow="Research Operating System" title="不是普通博客，而是一个可维护的研究工作台">
            首页只承担导航、筛选和展示骨架；真正的内容通过数据文件、文档模板和日志流持续扩展，后续每天维护不会把页面改乱。
          </SectionHeader>
          <div className="asn-pillar-grid">
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
          <div className="asn-split">
            <div>
              <SectionHeader eyebrow="Intelligence Feed" title="每天新增资料先进入情报流">
                新工具、新论文、新项目、新资料先标记状态、价值和下一步动作，再决定是否进入工具矩阵、项目雷达或复现实验。
              </SectionHeader>
              <div className="asn-feed-grid">
                {intelligenceItems.map((item) => (
                  <article className="asn-feed-card" key={item.title}>
                    <div><span>{item.date}</span><b>{item.type}</b></div>
                    <h3>{item.title}</h3>
                    <p>{item.status}</p>
                    <footer>{item.tags.map((tag) => <em key={tag}>{tag}</em>)}</footer>
                  </article>
                ))}
              </div>
            </div>
            <div className="asn-side-visual-card">
              <Img src={visualAssets.intelligence} alt="研究情报墙" />
              <div>
                <span>DAILY INTAKE</span>
                <strong>资料入口 ≠ 知识结论</strong>
                <p>先收集、再评估、再复现，最后沉淀。这个规则能防止网站很快变成低质量链接仓库。</p>
              </div>
            </div>
          </div>
        </section>

        <section className="asn-shell asn-section">
          <div className="asn-tool-layout">
            <div className="asn-tool-intro">
              <SectionHeader eyebrow="Engineering Toolchain" title="工程软件生态地图">
                商业软件与开源工具并列评估：用途、成熟度、学习优先级、替代方案、工程集成价值和复现状态。
              </SectionHeader>
              <label className="asn-search">
                <span>搜索工具</span>
                <input value={toolQuery} onChange={(event) => setToolQuery(event.target.value)} placeholder="MATLAB / STK / CFD / GNC / Open MCT..." />
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
          <SectionHeader eyebrow="Mission Cases" title="用任务案例承载知识，而不是堆目录">
            每个案例都能关联工具链、理论模型、公开数据、复现实验和误差分析，这样网站会越维护越有价值。
          </SectionHeader>
          <div className="asn-case-grid">
            {caseStudies.map((item) => (
              <Link className="asn-case-card" to={item.link} key={item.title}>
                <Img src={item.image} alt={item.title} />
                <div><span>{item.type}</span><h3>{item.title}</h3><p>{item.desc}</p></div>
              </Link>
            ))}
          </div>
        </section>

        <section className="asn-shell asn-section">
          <div className="asn-radar-layout">
            <RadarBoard projects={projects} />
            <div>
              <SectionHeader eyebrow="Project Radar" title="用雷达筛选项目，而不是收藏链接">
                项目雷达关注成熟度、复现状态、许可证、语言、文档质量和工程集成价值。A 级进入复现实验，B 级观察，C/D 级只保留索引或废弃原因。
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
              <h2>把资料跑通，再把结论留下。</h2>
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
