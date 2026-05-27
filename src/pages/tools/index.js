import React, {useMemo, useState} from 'react';
import Layout from '@theme/Layout';
import AeroLabFrame, { LabPageHero } from '../../components/AeroLabFrame';
import { labImages, featuredProjects } from '../../data/aerolabContent';
import { tools, toolCategories, toolLanes } from '../../data/siteContent';

const recommendedStacks = [
  { title: '轨道任务入门链', desc: 'GMAT / Orekit / Cesium：先跑通轨道传播、事件和可视化。', tags: ['轨道传播', '事件探测', '三维回放'] },
  { title: '任务控制显示链', desc: 'Open MCT / Cesium / Python：把仿真输出变成遥测、轨迹和事件面板。', tags: ['遥测', '任务回放', '数据接口'] },
  { title: '气动初值建模链', desc: 'OpenVSP / SU2 / ParaView：从外形到低阶 CFD 可视化。', tags: ['外形', 'CFD', '可视化'] },
];

export default function ToolsPage() {
  const [cat, setCat] = useState('全部');
  const [q, setQ] = useState('');
  const result = useMemo(() => tools.filter(t => (cat === '全部' || t.category === cat) && JSON.stringify(t).toLowerCase().includes(q.toLowerCase())), [cat, q]);
  return <Layout title="工程软件" description="航天仿真工程软件星图与工作流评估">
    <AeroLabFrame active="TOOLS">
      <LabPageHero eyebrow="ENGINEERING TOOLCHAIN · 工程工具链" title="工程软件星图" text="这里不是软件收藏夹，而是把商业软件、开源库、数据工具和可视化平台组织成可执行的航天仿真工具链。" image={labImages.control} stats={[{label:'工具条目', value:String(tools.length)}, {label:'推荐链路', value:String(recommendedStacks.length)}, {label:'维护方式', value:'矩阵化'}]} />
      <section className="lab-page-section lab-tools-stacks">
        <div className="lab-page-head"><div><span>推荐工具链</span><h2>先从三条能跑通的链路开始，而不是直接面对几十个软件。</h2></div><p>新用户先理解工具之间的输入输出关系，再进入完整矩阵。</p></div>
        <div className="lab-status-grid">{recommendedStacks.map((stack, i) => <article key={stack.title}><span>链路 {String(i+1).padStart(2,'0')}</span><strong>{stack.title}</strong><p>{stack.desc}</p><footer>{stack.tags.map(t => <em key={t}>{t}</em>)}</footer></article>)}</div>
      </section>
      <section className="lab-page-section">
        <div className="lab-page-head"><div><span>能力地图</span><h2>工具在任务阶段中的位置。</h2></div><p>一个工具是否值得学习，不只看名气，而看它在仿真链路里的输入、输出、替代关系和验证价值。</p></div>
        <div className="lab-status-grid">{toolLanes.map((lane, i) => <article key={lane.title}><span>{String(i+1).padStart(2,'0')}</span><strong>{lane.title}</strong><p>{lane.desc}</p></article>)}</div>
      </section>
      <section className="lab-page-section">
        <div className="lab-page-head"><div><span>可视化工具链</span><h2>工具链应该服务任务，而不是停留在软件名录。</h2></div><p>这些视觉卡片用于说明工具链最终会流向哪些研究资产。</p></div>
        <div className="lab-cinema-grid">
          {featuredProjects.slice(0, 3).map((item, i) => <article className={`lab-cinema-card ${i===0?'wide':''}`} key={item.title}><img src={item.image} alt={item.cn}/><div><span>{item.title}</span><h3>{item.cn}</h3><p>{item.desc}</p><footer>{item.tags.map(tag => <em key={tag}>{tag}</em>)}</footer></div></article>)}
        </div>
      </section>
      <section className="lab-page-section">
        <div className="lab-page-head"><div><span>软件矩阵</span><h2>完整工程软件矩阵</h2></div><p>完整列表放在后面，用于维护和查询，不抢首屏叙事。</p></div>
        <div className="lab-filter-row"><input value={q} onChange={e=>setQ(e.target.value)} placeholder="搜索 MATLAB / STK / GMAT / CFD / GNC" />{toolCategories.map(c => <button key={c} className={c===cat?'active':''} onClick={()=>setCat(c)}>{c}</button>)}</div>
        <div className="lab-table-grid">{result.map(tool => <article key={tool.name}><span>{tool.category}</span><h3>{tool.name}</h3><p>{tool.vendor} · {tool.type} · {tool.maturity}</p><p>{tool.role}</p><footer>{tool.domains.map(d => <em key={d}>{d}</em>)}</footer></article>)}</div>
      </section>
    </AeroLabFrame>
  </Layout>;
}
