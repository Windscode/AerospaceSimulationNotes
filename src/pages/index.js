import React from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import useBaseUrl from '@docusaurus/useBaseUrl';
import { visualAssets, domains, intelligenceItems, tools, projects, lifecycle } from '../data/siteContent';

function SectionTitle({ label, title, children }) {
  return <div className="asn-section-title"><span>{label}</span><h2>{title}</h2><p>{children}</p></div>;
}
function Img({ src, alt, className = '' }) { return <img className={className} src={useBaseUrl(src)} alt={alt} loading="lazy" />; }

export default function Home() {
  const topTools = tools.filter(t => t.priority === 'A').slice(0, 6);
  const topProjects = projects.slice(0, 4);
  return (
    <Layout title="首页" description="航天仿真工程软件、开源项目、论文资料与复现实验的长期知识门户">
      <main className="asn-page">
        <section className="asn-hero asn-shell">
          <div className="asn-hero__content">
            <div className="asn-hero__copy">
              <div className="asn-badge">航天仿真研究门户</div>
              <h1>可持续维护的航天仿真知识资产</h1>
              <p>围绕 MATLAB / Simulink、Ansys STK、GMAT、Orekit、Tudat、Basilisk、CFD、GNC、推进、结构和可视化，建立工程软件矩阵、项目雷达、论文笔记和复现实验记录。</p>
              <div className="asn-actions"><Link className="asn-button asn-button--primary" to="/tools">进入工程软件栈</Link><Link className="asn-button asn-button--ghost" to="/radar">查看项目雷达</Link></div>
              <div className="asn-hero__chips"><span>轨道</span><span>GNC</span><span>MATLAB</span><span>Ansys STK</span><span>CFD</span></div>
            </div>
            <div className="asn-hero__visual">
              <Img src={visualAssets.hero} alt="航天仿真任务控制与轨道数据可视化主视觉" />
              <div className="asn-command-panel"><h3>站点运行面板</h3><div className="asn-metric"><span>软件工具</span><strong>30+</strong></div><div className="asn-metric"><span>项目雷达</span><strong>A-D 评级</strong></div><div className="asn-metric"><span>内容状态</span><strong>发现 → 归档</strong></div><div className="asn-metric"><span>默认语言</span><strong>中文</strong></div></div>
            </div>
          </div>
        </section>

        <section className="asn-section asn-shell asn-section--intro">
          <SectionTitle label="核心定位" title="工程软件、开源项目、研究情报与复现实验的统一入口">首页不再做普通博客目录，而是把每天新增资料先导入研究情报，再沉淀到软件栈、项目雷达、论文笔记和实验记录。</SectionTitle>
          <div className="asn-feature asn-feature--compact"><Img src={visualAssets.tools} alt="工程软件生态地图"/><div className="asn-feature__body"><div className="asn-kicker">Engineering Software Landscape</div><h2>把 MATLAB、Ansys、STK、GMAT、Orekit 等工具放进同一个工程语境。</h2><p>每个工具都记录用途、成熟度、适用领域、优先级、替代方案和学习价值，避免只停留在“知道有这个软件”的层面。</p><div className="asn-actions"><Link className="asn-button asn-button--primary" to="/tools">查看工具矩阵</Link></div></div></div>
        </section>

        <section className="asn-section asn-shell">
          <SectionTitle label="研究情报" title="每日更新先进入动态层">新文章、新项目、新工具、新论文不直接塞进知识库，先做轻量评估和状态标记。</SectionTitle>
          <div className="asn-grid asn-grid--3">{intelligenceItems.map((item) => <article className="asn-card" key={item.title}><div className="asn-kicker">{item.date} · {item.type}</div><h3>{item.title}</h3><p>{item.status}</p><div className="asn-tags">{item.tags.map(tag => <span className="asn-tag" key={tag}>{tag}</span>)}</div></article>)}</div>
        </section>

        <section className="asn-section asn-shell">
          <SectionTitle label="知识领域" title="按航天仿真工作流组织内容">领域不是孤立目录，而是和工具、项目、论文、复现实验互相连接。</SectionTitle>
          <div className="asn-grid asn-grid--3">{domains.map((d) => <Link className="asn-card asn-domain-card" to={d.link} key={d.title}><Img src={d.image} alt={d.title}/><div className="asn-kicker">Knowledge Domain</div><h3>{d.title}</h3><p>{d.desc}</p></Link>)}</div>
        </section>

        <section className="asn-section asn-shell">
          <SectionTitle label="工具预览" title="优先跟踪真正重要的工程软件">商业工具和开源工具并列，不搞开源崇拜，也不迷信商业软件。</SectionTitle>
          <div className="asn-grid asn-grid--3">{topTools.map((tool) => <a className="asn-card asn-data-card" href={tool.url} target="_blank" rel="noreferrer" key={tool.name}><div className="asn-data-card__top"><div><div className="asn-kicker">{tool.category}</div><h3>{tool.name}</h3><div className="asn-data-card__meta">{tool.vendor} · {tool.type} · {tool.maturity}</div></div><span className="asn-priority">{tool.priority}</span></div><p>{tool.role}</p><div className="asn-tags">{tool.domains.map(tag => <span className="asn-tag" key={tag}>{tag}</span>)}</div></a>)}</div>
        </section>

        <section className="asn-section asn-shell">
          <div className="asn-feature asn-feature--reverse"><div className="asn-feature__body"><div className="asn-kicker">Project Radar</div><h2>开源项目必须经过工程评估，而不是只看 Star。</h2><p>项目雷达记录语言、许可证、成熟度、复现状态、工程价值和下一步动作，目标是找到真正值得学习、复现和集成的项目。</p><div className="asn-actions"><Link className="asn-button asn-button--primary" to="/radar">进入项目雷达</Link></div></div><Img src={visualAssets.radar} alt="开源项目雷达视觉图"/></div>
        </section>

        <section className="asn-section asn-shell">
          <SectionTitle label="精选项目" title="当前优先跟踪对象">后续每个 A 级项目都应该有单独评估页和复现实验记录。</SectionTitle>
          <div className="asn-grid asn-grid--2">{topProjects.map((p) => <a className="asn-card asn-data-card" href={p.url} target="_blank" rel="noreferrer" key={p.name}><div className="asn-data-card__top"><div><div className="asn-kicker">{p.domain}</div><h3>{p.name}</h3><div className="asn-data-card__meta">{p.language} · {p.license} · {p.maturity}</div></div><span className="asn-priority">{p.rating}</span></div><p>{p.value}</p><div className="asn-tags"><span className="asn-tag">{p.reproduction}</span></div></a>)}</div>
        </section>

        <section className="asn-section asn-shell">
          <div className="asn-visual-band"><Img src={visualAssets.lab} alt="复现实验室视觉图"/><div><h2>复现实验室：把资料变成可信结论。</h2><p>记录环境、依赖、命令、输入、输出、误差和结论。真正有价值的资料必须能被未来的自己复查。</p><div className="asn-actions"><Link className="asn-button asn-button--primary" to="/reproduction-lab">查看复现实验室</Link></div></div></div>
        </section>

        <section className="asn-section asn-shell">
          <SectionTitle label="内容生命周期" title="每天维护也不会乱的原因">所有资料都有状态，不让“以后再看”变成无底洞。</SectionTitle>
          <div className="asn-grid asn-grid--3">{lifecycle.map((s) => <article className="asn-card" key={s.step}><div className="asn-kicker">{s.step}</div><h3>{s.name}</h3><p>{s.desc}</p></article>)}</div>
        </section>
      </main>
    </Layout>
  );
}
