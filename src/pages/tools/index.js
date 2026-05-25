import React, {useMemo, useState} from 'react';
import Layout from '@theme/Layout';
import AeroLabFrame, { LabPageHero } from '../../components/AeroLabFrame';
import { labImages } from '../../data/aerolabContent';
import { tools, toolCategories, toolLanes } from '../../data/siteContent';

export default function ToolsPage() {
  const [cat, setCat] = useState('全部');
  const [q, setQ] = useState('');
  const result = useMemo(() => tools.filter(t => (cat === '全部' || t.category === cat) && JSON.stringify(t).toLowerCase().includes(q.toLowerCase())), [cat, q]);
  return <Layout title="工程软件" description="航天仿真工程软件星图与工作流评估">
    <AeroLabFrame active="TOOLS">
      <LabPageHero eyebrow="ENGINEERING TOOLCHAIN" title="TOOLS & SOFTWARE" text="把商业软件、开源库、数据工具和可视化平台放入同一条任务链路：任务设计、建模、传播、控制、气动、验证和回放。" image={labImages.control} stats={[{label:'TOOL ITEMS', value:String(tools.length)}, {label:'CATEGORIES', value:String(toolCategories.length - 1)}, {label:'PRIORITY', value:'A / B'}]} />
      <section className="lab-page-section">
        <div className="lab-page-head"><div><span>WORKFLOW LANES</span><h2>先看工具在任务阶段中的位置。</h2></div><p>一个工具是否值得学习，不只看名气，而看它在仿真链路里的输入、输出、替代关系和验证价值。</p></div>
        <div className="lab-table-grid">{toolLanes.map(lane => <article key={lane.title}><span>LANE</span><h3>{lane.title}</h3><p>{lane.desc}</p><footer>{lane.tools.map(t => <em key={t}>{t}</em>)}</footer></article>)}</div>
      </section>
      <section className="lab-page-section">
        <div className="lab-page-head"><div><span>TOOL MATRIX</span><h2>工程软件矩阵</h2></div><p>后续每天维护时，只新增条目和判断，不重新改页面结构。</p></div>
        <div className="lab-filter-row"><input value={q} onChange={e=>setQ(e.target.value)} placeholder="搜索 MATLAB / STK / GMAT / CFD / GNC" />{toolCategories.map(c => <button key={c} className={c===cat?'active':''} onClick={()=>setCat(c)}>{c}</button>)}</div>
        <div className="lab-table-grid">{result.map(tool => <article key={tool.name}><span>{tool.category}</span><h3>{tool.name}</h3><p>{tool.vendor} · {tool.type} · {tool.maturity}</p><p>{tool.role}</p><footer>{tool.domains.map(d => <em key={d}>{d}</em>)}</footer></article>)}</div>
      </section>
    </AeroLabFrame>
  </Layout>;
}
