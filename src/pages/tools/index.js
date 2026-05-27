import React, {useMemo, useState} from 'react';
import Layout from '@theme/Layout';
import AeroLabFrame, { LabPageHero } from '../../components/AeroLabFrame';
import StatusPill from '../../components/StatusPill';
import ToolStageExplorer from '../../components/ToolStageExplorer';
import { labImages, featuredProjects } from '../../data/aerolabContent';
import { tools, toolCategories, toolLanes } from '../../data/tools';

const recommendedStacks = [
  { title: '轨道任务入门链', desc: 'GMAT / Orekit / Cesium：先跑通轨道传播、事件和可视化。', tags: ['轨道传播', '事件探测', '三维回放'] },
  { title: '任务控制显示链', desc: 'Open MCT / Cesium / Python：把仿真输出变成遥测、轨迹和事件面板。', tags: ['遥测', '任务回放', '数据接口'] },
  { title: '气动初值建模链', desc: 'OpenVSP / SU2 / ParaView：从外形到低阶 CFD 可视化。', tags: ['外形', 'CFD', '可视化'] },
];

export default function ToolsPage() {
  const [cat, setCat] = useState('全部');
  const [q, setQ] = useState('');
  const result = useMemo(() => tools.filter(t => (cat === '全部' || t.category === cat) && JSON.stringify(t).toLowerCase().includes(q.toLowerCase())), [cat, q]);
  return <Layout title="工具库" description="航天仿真专业工具、使用指南、工具链组合和使用示例">
    <AeroLabFrame active="TOOLS">
      <LabPageHero eyebrow="TOOL LIBRARY · 工具库" title="工具库" text="搜集航天仿真相关商业软件、开源工具、可视化平台和开发工具链。重点回答：这个工具用来干什么、怎么入门、在哪个任务阶段使用、能和哪些工具组合。" image={labImages.control} stats={[{label:'工具条目', value:String(tools.length)}, {label:'分类数量', value:String(toolCategories.length - 1)}, {label:'维护方式', value:'数据驱动'}]} />
      <ToolStageExplorer lanes={toolLanes} tools={tools}/>
      <section className="lab-page-section lab-tools-stacks">
        <div className="lab-page-head"><div><span>推荐链路</span><h2>入门工具链</h2></div><p>新用户先理解工具之间的输入输出关系，再进入完整矩阵。</p></div>
        <div className="lab-status-grid">{recommendedStacks.map((stack, i) => <article key={stack.title}><span>链路 {String(i+1).padStart(2,'0')}</span><strong>{stack.title}</strong><p>{stack.desc}</p><footer>{stack.tags.map(t => <em key={t}>{t}</em>)}</footer></article>)}</div>
      </section>
      <section className="lab-page-section">
        <div className="lab-page-head"><div><span>能力地图</span><h2>任务阶段</h2></div><p>工具是否值得学习，要看它在仿真链路里的输入、输出、替代关系和验证价值。</p></div>
        <div className="lab-status-grid">{toolLanes.map((lane, i) => <article key={lane.title}><span>{String(i+1).padStart(2,'0')}</span><strong>{lane.title}</strong><p>{lane.desc}</p><footer>{lane.tools.map(t => <em key={t}>{t}</em>)}</footer></article>)}</div>
      </section>
      <section className="lab-page-section">
        <div className="lab-page-head"><div><span>工具链场景</span><h2>典型组合</h2></div><p>工具库不是软件名录，而是服务任务分析、建模、验证和可视化的组合入口。</p></div>
        <div className="lab-cinema-grid">
          {featuredProjects.slice(0, 3).map((item, i) => <article className={`lab-cinema-card ${i===0?'wide':''}`} key={item.title}><img src={item.image} alt={item.cn}/><div><span>{item.title}</span><h3>{item.cn}</h3><p>{item.desc}</p><footer>{item.tags.map(tag => <em key={tag}>{tag}</em>)}</footer></div></article>)}
        </div>
      </section>
      <section className="lab-page-section">
        <div className="lab-page-head"><div><span>工具矩阵</span><h2>完整工具库</h2></div><p>每个工具条目都要说明类别、商业/开源、难度、典型用途、推荐入门任务和相关工具。</p></div>
        <div className="lab-filter-row"><input value={q} onChange={e=>setQ(e.target.value)} placeholder="搜索 MATLAB / STK / GMAT / CFD / GNC" />{toolCategories.map(c => <button key={c} className={c===cat?'active':''} onClick={()=>setCat(c)}>{c}</button>)}</div>
        <div className="lab-table-grid lab-tool-database">{result.map(tool => <article key={tool.id}><div className="lab-card-status-row"><StatusPill label="许可" value={tool.licenseType}/><StatusPill label="难度" value={tool.difficulty}/><StatusPill label="成熟度" value={tool.status}/><StatusPill label="可信度" value={tool.confidence}/></div><span>{tool.category}</span><h3>{tool.title}</h3><p>{tool.summary}</p><p><b>典型用途：</b>{tool.typicalUse}</p><p><b>入门任务：</b>{tool.starterTask}</p><footer>{tool.relatedTools.map(d => <em key={d}>{d}</em>)}</footer></article>)}</div>
      </section>
    </AeroLabFrame>
  </Layout>;
}
