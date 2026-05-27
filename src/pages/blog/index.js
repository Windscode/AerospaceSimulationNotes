import React from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import AeroLabFrame, { LabPageHero } from '../../components/AeroLabFrame';
import { labImages, latestUpdates, missionDossiers, featuredProjects, researchDomains } from '../../data/aerolabContent';

const archiveTypes = [
  { title: '每日研究简报', tag: 'DAILY DIGEST', image: labImages.orbit, desc: '快速记录新论文、新工具、新项目、新任务动态和公开数据线索。', href: '/log' },
  { title: '复现实验记录', tag: 'REPRODUCTION', image: labImages.control, desc: '记录环境、依赖、命令、输入输出、误差、对照基准和结论。', href: '/reproduction-lab' },
  { title: '任务案例更新', tag: 'MISSION CASE', image: labImages.space, desc: '围绕火箭、星座、月球、再入等任务案例维护研究进展。', href: '/missions' },
  { title: '工具链评估', tag: 'TOOLCHAIN', image: labImages.data, desc: '记录工程软件、开源项目、版本、许可证、工程价值和替代关系。', href: '/tools' },
];

export default function BlogGateway(){
  return <Layout title="研究日志归档" description="航天仿真研究日志与更新归档">
    <AeroLabFrame active="LOG">
      <LabPageHero eyebrow="BLOG ARCHIVE · 研究日志归档" title="研究日志归档" text="这里是航天仿真研究库的更新归档入口。日志用于记录每天的资料收集、工具评估、复现实验、任务案例更新和阶段性判断，再把成熟内容沉淀到知识库。" image={labImages.control} stats={[{label:'入口', value:'品牌归档'}, {label:'原始文章', value:'保留'}, {label:'沉淀方向', value:'知识库'}]} />
      <section className="lab-page-section">
        <div className="lab-page-head"><div><span>归档类型</span><h2>博客页不再是默认列表，而是研究工作流入口。</h2></div><p>保留 Docusaurus Blog 的文章能力，但入口必须符合整个网站的品牌和信息结构。</p></div>
        <div className="lab-cinema-grid">{archiveTypes.map((item, i) => <Link to={item.href} className={`lab-cinema-card ${i === 0 ? 'wide' : ''}`} key={item.title}><img src={item.image} alt={item.title}/><div><span>{item.tag}</span><h3>{item.title}</h3><p>{item.desc}</p><footer><em>进入模块</em></footer></div></Link>)}</div>
      </section>
      <section className="lab-page-section">
        <div className="lab-page-head"><div><span>最近更新</span><h2>最近研究更新</h2></div><p>这里展示归档入口，完整 Markdown 文章仍保留在原始博客归档中。</p></div>
        <div className="lab-feature-list">{latestUpdates.map((item, i) => <article className="lab-feature-row" key={item.title}><img src={[labImages.orbit, labImages.space, labImages.control, labImages.data][i % 4]} alt={item.title}/><div><span>{item.type}</span><h3>{item.title}</h3><p>记录来源、判断、后续动作和沉淀去向。成熟内容再进入知识库、项目雷达或复现实验室。</p></div><strong>{item.date}</strong></article>)}</div>
      </section>
      <section className="lab-page-section">
        <div className="lab-overlay-panel"><img src={labImages.orbit} alt="研究日志归档系统"/><div><span>原始博客归档</span><h3>需要查看 Markdown 原始文章时，再进入原始归档。</h3><p>默认博客列表不再作为主入口，只作为底层文章归档。这样既保留维护便利性，又不会破坏主站设计完整性。</p><p><Link to="/blog-archive">打开原始博客归档 ↗</Link></p></div></div>
      </section>
      <section className="lab-page-section">
        <div className="lab-page-head"><div><span>沉淀去向</span><h2>日志最终要流向稳定资产。</h2></div><p>每条日志都应该能指向一个研究域、任务对象、工具链或复现实验。</p></div>
        <div className="lab-table-grid">{researchDomains.map((d, i) => <article key={d.name}><span>领域 {String(i+1).padStart(2,'0')}</span><h3>{d.name}</h3><p>{d.text}</p></article>)}</div>
      </section>
      <section className="lab-page-section">
        <div className="lab-page-head"><div><span>任务关联</span><h2>近期任务案例</h2></div><p>研究日志不是孤立文章，而是围绕真实任务持续沉淀。</p></div>
        <div className="lab-table-grid">{missionDossiers.map(m => <article key={m.title}><span>{m.phase}</span><h3>{m.cn}</h3><p>{m.desc}</p><footer>{m.tags.map(t => <em key={t}>{t}</em>)}</footer></article>)}</div>
      </section>
      <section className="lab-page-section">
        <div className="lab-page-head"><div><span>研究资产</span><h2>日志可以沉淀成这些资产。</h2></div><p>同一份资料不要重复维护，而是按成熟度进入不同模块。</p></div>
        <div className="lab-table-grid">{featuredProjects.map(p => <article key={p.title}><span>{p.title}</span><h3>{p.cn}</h3><p>{p.desc}</p><footer>{p.tags.map(t => <em key={t}>{t}</em>)}</footer></article>)}</div>
      </section>
    </AeroLabFrame>
  </Layout>;
}
