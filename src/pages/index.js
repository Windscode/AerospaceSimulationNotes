import React, { useMemo, useState } from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import useBaseUrl from '@docusaurus/useBaseUrl';
import { visualAssets, domains, intelligenceItems, tools, projects, lifecycle, caseStudies } from '../data/siteContent';

function Img({ src, alt, className = '' }) {
  return <img className={className} src={useBaseUrl(src)} alt={alt} loading="lazy" />;
}

function SectionHeader({ eyebrow, title, children, align = 'left' }) {
  return (
    <div className={`asn-section-head asn-section-head--${align}`}>
      <span>{eyebrow}</span>
      <h2>{title}</h2>
      {children && <p>{children}</p>}
    </div>
  );
}

function MissionVisual({ activeDomain }) {
  const [orbitMode, setOrbitMode] = useState('LEO');
  const orbitInfo = {
    LEO: ['550 km', '低轨任务', '快速复现'],
    MEO: ['20,200 km', '导航星座', '长期评估'],
    GEO: ['35,786 km', '覆盖分析', '工程基准'],
  };
  const info = orbitInfo[orbitMode];
  return (
    <div className="asn-mission-visual asn-mission-visual--image">
      <Img src={visualAssets.hero} alt="航天仿真研究平台主视觉" />
      <div className="asn-quick-panel">
        <div className="asn-panel-title">快速任务视图</div>
        <div className="asn-mode-switch">
          {Object.keys(orbitInfo).map((mode) => <button key={mode} className={orbitMode === mode ? 'active' : ''} onClick={() => setOrbitMode(mode)}>{mode}</button>)}
        </div>
        <div className="asn-panel-metric"><span>轨道高度</span><strong>{info[0]}</strong></div>
        <div className="asn-panel-metric"><span>任务类型</span><strong>{info[1]}</strong></div>
        <div className="asn-panel-metric"><span>研究状态</span><strong>{info[2]}</strong></div>
        <div className="asn-panel-metric"><span>当前领域</span><strong>{activeDomain.title}</strong></div>
      </div>
    </div>
  );
}

function RadarBoard({ projects }) {
  const [active, setActive] = useState(projects[0]);
  const positions = [
    ['72%', '30%'], ['55%', '54%'], ['34%', '38%'], ['68%', '72%'], ['30%', '68%'], ['46%', '23%'], ['78%', '58%'], ['24%', '50%'], ['59%', '40%'], ['42%', '76%'],
  ];
  return (
    <div className="asn-radar-board">
      <div className="asn-radar-map">
        <Img src={visualAssets.radar} alt="项目雷达视觉图" className="asn-radar-bg" />
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
          >
            <span>{project.rating}</span>
          </button>
        ))}
      </div>
      <div className="asn-radar-detail">
        <div className="asn-kicker">ACTIVE TARGET</div>
        <h3>{active.name}</h3>
        <p>{active.value}</p>
        <div className="asn-tags"><span>{active.domain}</span><span>{active.language}</span><span>{active.reproduction}</span></div>
      </div>
    </div>
  );
}

export default function Home() {
  const [activeDomain, setActiveDomain] = useState(domains[0]);
  const [toolQuery, setToolQuery] = useState('');
  const topTools = useMemo(() => tools.filter((tool) => tool.priority === 'A').slice(0, 10), []);
  const visibleTools = useMemo(() => {
    const query = toolQuery.trim().toLowerCase();
    if (!query) return topTools.slice(0, 6);
    return tools.filter((tool) => [tool.name, tool.vendor, tool.category, tool.type, tool.maturity, ...tool.domains].join(' ').toLowerCase().includes(query)).slice(0, 8);
  }, [toolQuery, topTools]);

  return (
    <Layout title="首页" description="航天仿真工程软件、开源项目、论文资料与复现实验的中文研究门户">
      <main className="asn-home">
        <section className="asn-hero-v3">
          <div className="asn-star-layer" />
          <div className="asn-shell asn-hero-grid">
            <div className="asn-hero-copy-v3">
              <div className="asn-badge-v3">航天仿真研究门户 · 个人知识库</div>
              <h1>让航天仿真资料，变成可验证的工程知识资产。</h1>
              <p>围绕 MATLAB / Simulink、Ansys STK、GMAT、Orekit、Tudat、Basilisk、CFD、GNC、推进、结构和可视化工具链，建立研究情报、项目雷达、论文笔记和复现实验闭环。</p>
              <div className="asn-hero-actions-v3">
                <Link className="asn-button-v3 asn-button-v3--primary" to="/tools">探索工程软件栈</Link>
                <Link className="asn-button-v3 asn-button-v3--ghost" to="/radar">查看项目雷达</Link>
              </div>
              <div className="asn-hero-stats-v3">
                <div><strong>30+</strong><span>工程软件</span></div>
                <div><strong>A-D</strong><span>项目评级</span></div>
                <div><strong>5 阶段</strong><span>内容生命周期</span></div>
              </div>
            </div>
            <MissionVisual activeDomain={activeDomain} />
          </div>
        </section>

        <section className="asn-shell asn-domain-switcher">
          {domains.map((domain) => (
            <button key={domain.title} className={activeDomain.title === domain.title ? 'active' : ''} onClick={() => setActiveDomain(domain)}>
              <Img src={domain.image} alt={domain.title} />
              <span>{domain.title}</span>
              <small>{domain.desc}</small>
            </button>
          ))}
        </section>

        <section className="asn-shell asn-section-v3">
          <SectionHeader eyebrow="Research Operating Model" title="不是博客目录，而是研究工作台">首页只展示关键入口。每天新增资料先进入研究情报，经过评估后再沉淀到工具矩阵、项目雷达、论文笔记和复现实验。</SectionHeader>
          <div className="asn-workbench-grid">
            <div className="asn-large-card asn-large-card--visual">
              <Img src={visualAssets.tools} alt="工程软件生态地图" />
              <div>
                <span>Engineering Software Landscape</span>
                <h3>工程软件栈</h3>
                <p>把 MATLAB、Ansys、STK、GMAT、Orekit、Basilisk、SU2 等工具放进统一工程语境。</p>
              </div>
            </div>
            <div className="asn-console-card asn-console-card--image">
              <Img src={visualAssets.intelligence} alt="研究情报流视觉图" />
              <span>当前选中领域</span>
              <h3>{activeDomain.title}</h3>
              <p>{activeDomain.desc}</p>
              <div className="asn-console-list"><b>关联工具</b>{topTools.slice(0, 5).map((tool) => <em key={tool.name}>{tool.name}</em>)}</div>
            </div>
          </div>
        </section>

        <section className="asn-shell asn-section-v3" id="intelligence">
          <SectionHeader eyebrow="Intelligence Feed" title="每日维护的研究情报流">新工具、新论文、新项目、新资料先进入动态层，标记价值、状态和下一步动作，避免知识库污染。</SectionHeader>
          <div className="asn-feed-layout">
            <div className="asn-feed-visual"><Img src={visualAssets.intelligence} alt="研究情报流视觉图" /></div>
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
        </section>

        <section className="asn-shell asn-section-v3" id="software">
          <div className="asn-software-layout">
            <div className="asn-software-intro">
              <SectionHeader eyebrow="Tool Stack" title="工程软件生态地图">商业软件与开源工具并列评估：用途、成熟度、学习优先级、替代方案和集成价值。</SectionHeader>
              <Img src={visualAssets.tools} alt="工程软件生态地图" className="asn-side-visual" />
              <label className="asn-search-v3"><span>搜索</span><input value={toolQuery} onChange={(event) => setToolQuery(event.target.value)} placeholder="MATLAB / STK / CFD / GNC..." /></label>
            </div>
            <div className="asn-tool-grid-v3">
              {visibleTools.map((tool) => (
                <a className="asn-tool-card-v3" key={tool.name} href={tool.url} target="_blank" rel="noreferrer">
                  <div><span>{tool.category}</span><strong>{tool.priority}</strong></div>
                  <h3>{tool.name}</h3>
                  <p>{tool.vendor} · {tool.type} · {tool.maturity}</p>
                  <footer>{tool.domains.map((domain) => <em key={domain}>{domain}</em>)}</footer>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="asn-shell asn-section-v3" id="cases">
          <SectionHeader eyebrow="Selected Cases" title="精选研究案例">用具体任务场景承载工具、理论和复现实验，不让网站停留在抽象资料列表。</SectionHeader>
          <div className="asn-case-grid">
            {caseStudies.map((item) => (
              <Link className="asn-case-card" to={item.link} key={item.title}>
                <Img src={item.image} alt={item.title} />
                <div><span>{item.type}</span><h3>{item.title}</h3><p>{item.desc}</p></div>
              </Link>
            ))}
          </div>
        </section>

        <section className="asn-shell asn-section-v3" id="radar">
          <div className="asn-radar-layout">
            <RadarBoard projects={projects} />
            <div className="asn-radar-copy">
              <SectionHeader eyebrow="Project Radar" title="用雷达筛选项目，而不是收藏链接">项目雷达关注成熟度、复现状态、许可证、语言、文档质量和工程集成价值。A 级项目进入复现实验室，B 级进入观察池，C/D 级只留索引或废弃。</SectionHeader>
              <div className="asn-radar-criteria"><span>成熟度</span><span>复现状态</span><span>许可证</span><span>工程价值</span></div>
            </div>
          </div>
        </section>

        <section className="asn-shell asn-section-v3" id="lab">
          <div className="asn-lab-panel">
            <div>
              <span className="asn-kicker-v3">Reproduction Lab</span>
              <h2>复现实验室：让资料变成可信结论。</h2>
              <p>每个高价值工具、论文和项目都要留下环境、依赖、命令、输入、输出、误差和结论。未来的你必须能重新跑通。</p>
              <Img src={visualAssets.lab} alt="复现实验室视觉图" className="asn-lab-visual" />
            </div>
            <div className="asn-lifecycle-v3">
              {lifecycle.slice(0, 5).map((step, index) => <div key={step.name}><span>{String(index + 1).padStart(2, '0')}</span><strong>{step.name}</strong><em>{step.desc}</em></div>)}
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
