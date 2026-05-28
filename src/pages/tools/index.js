import React, {useMemo, useState} from 'react';
import Layout from '@theme/Layout';
import AeroLabFrame, { LabPageHero } from '../../components/AeroLabFrame';
import ToolStageExplorer from '../../components/ToolStageExplorer';
import { ToolDatabaseCard } from '../../components/DatabaseCards';
import { labImages } from '../../data/aerolabContent';
import { tools, toolCategories, toolLanes, toolSelectionRecipes } from '../../data/tools';

const recommendedStacks = [
  { title: '轨道任务入门链', desc: 'Orekit / GMAT / Cesium：先跑通轨道传播、事件和可视化。', tags: ['TLE', '事件探测', '三维回放'], warning: '不要只做动画，必须保留访问窗口表。' },
  { title: '火箭入轨估算链', desc: 'RocketCEA / GMAT / Python：从公开参数推到速度增量和入轨事件。', tags: ['比冲估算', '质量假设', 'TLE 对照'], warning: '公开参数不足时只能写工程估算。' },
  { title: '气动热初筛链', desc: 'OpenVSP / SU2 / OpenFOAM：从简化外形进入流场和气动力趋势。', tags: ['外形', 'CFD', '验证边界'], warning: '漂亮云图不是结论，网格和边界条件才是证据。' },
];

function ToolRecipeBoard() {
  return <section className="lab-page-section lab-tool-recipes">
    <div className="lab-page-head"><div><span>任务配方</span><h2>先选一个可跑通的工具任务。</h2></div><p>借鉴那个网站的优点：不要只给卡片，要给“从输入到输出”的操作路径。每条配方都应该能变成一篇实验记录。</p></div>
    <div className="lab-recipe-grid">{toolSelectionRecipes.map((recipe, index) => <article key={recipe.title}>
      <span>{String(index + 1).padStart(2, '0')} · RECIPE</span>
      <h3>{recipe.title}</h3>
      <p>{recipe.scenario}</p>
      <div className="lab-recipe-tools">{recipe.primaryTools.map(tool => <em key={tool}>{tool}</em>)}</div>
      <ol>{recipe.steps.map(step => <li key={step}>{step}</li>)}</ol>
      <strong>{recipe.output}</strong>
      <small>{recipe.trap}</small>
    </article>)}</div>
  </section>;
}

function StackBoard() {
  return <section className="lab-page-section lab-tools-stacks">
    <div className="lab-page-head"><div><span>推荐链路</span><h2>不要学孤立软件，先学组合。</h2></div><p>一个工具单独学很容易变成菜单截图。组合起来，才知道它在真实仿真流程里负责哪一段。</p></div>
    <div className="lab-status-grid">{recommendedStacks.map((stack, i) => <article key={stack.title} className="lab-stack-card"><span>链路 {String(i+1).padStart(2,'0')}</span><strong>{stack.title}</strong><p>{stack.desc}</p><footer>{stack.tags.map(t => <em key={t}>{t}</em>)}</footer><small>{stack.warning}</small></article>)}</div>
  </section>;
}

export default function ToolsPage() {
  const [cat, setCat] = useState('全部');
  const [q, setQ] = useState('');
  const result = useMemo(() => tools.filter(t => (cat === '全部' || t.category === cat) && JSON.stringify(t).toLowerCase().includes(q.toLowerCase())), [cat, q]);
  return <Layout title="工具库" description="航天仿真专业工具、使用指南、工具链组合和使用示例">
    <AeroLabFrame active="TOOLS">
      <LabPageHero eyebrow="TOOL LIBRARY · 工具库" title="工具库" text="这里不再只是软件名录，而是按任务选择工具：先明确要解决的航天仿真问题，再看输入、输出、第一步、证据链用途和不适用边界。" image={labImages.control} stats={[{label:'工具条目', value:String(tools.length)}, {label:'任务配方', value:String(toolSelectionRecipes.length)}, {label:'维护方式', value:'任务驱动'}]} />
      <ToolStageExplorer lanes={toolLanes} tools={tools}/>
      <ToolRecipeBoard />
      <StackBoard />
      <section className="lab-page-section">
        <div className="lab-page-head"><div><span>能力地图</span><h2>任务阶段</h2></div><p>工具是否值得学习，要看它在仿真链路里的输入、输出、替代关系和验证价值。</p></div>
        <div className="lab-status-grid">{toolLanes.map((lane, i) => <article key={lane.title}><span>{String(i+1).padStart(2,'0')}</span><strong>{lane.title}</strong><p>{lane.problem}</p><div className="lab-card-brief"><b>输入</b><span>{lane.input}</span></div><div className="lab-card-brief"><b>输出</b><span>{lane.output}</span></div><footer>{lane.tools.map(t => <em key={t}>{t}</em>)}</footer></article>)}</div>
      </section>
      <section className="lab-page-section">
        <div className="lab-page-head"><div><span>工具矩阵</span><h2>完整工具库</h2></div><p>每个工具条目必须回答：第一步怎么跑、适合干什么、不适合干什么、输入输出是什么、怎样进入证据链。</p></div>
        <div className="lab-filter-row"><input value={q} onChange={e=>setQ(e.target.value)} placeholder="搜索 MATLAB / STK / GMAT / CFD / GNC" />{toolCategories.map(c => <button key={c} className={c===cat?'active':''} onClick={()=>setCat(c)}>{c}</button>)}</div>
        <div className="lab-database-toolbar"><strong>{result.length}</strong><span>个匹配工具</span><p>先筛选类别，再展开卡片判断它是否适合当前任务阶段。</p></div>
        <div className="lab-table-grid lab-database-grid lab-tool-database">{result.map(tool => <ToolDatabaseCard key={tool.id} tool={tool}/>)}</div>
      </section>
    </AeroLabFrame>
  </Layout>;
}
