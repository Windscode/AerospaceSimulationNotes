import React, {useMemo, useState} from 'react';
import Layout from '@theme/Layout';
import AeroLabFrame, { LabPageHero } from '../../components/AeroLabFrame';
import ToolStageExplorer from '../../components/ToolStageExplorer';
import { ToolDatabaseCard } from '../../components/DatabaseCards';
import { labImages } from '../../data/aerolabContent';
import { tools, toolCategories, toolLanes, toolSelectionRecipes } from '../../data/tools';

const decisionQuestions = [
  { q: '我要先看轨道、覆盖、过境、任务剖面？', answer: '轨道与任务分析', picks: ['STK', 'GMAT', 'Orekit', 'Tudat'] },
  { q: '我要做姿态控制、反作用轮、传感器闭环？', answer: 'GNC / ADCS', picks: ['Simulink', 'Basilisk', 'NASA 42'] },
  { q: '我要从外形推气动力、热流或再入走廊？', answer: 'CFD / 气动', picks: ['OpenVSP', 'SU2', 'OpenFOAM', 'ParaView'] },
  { q: '我要把结果做成三维轨迹、任务回放、遥测面板？', answer: '可视化', picks: ['CesiumJS', 'Open MCT', 'Unreal Engine', 'ParaView'] },
];

const learningRoutes = [
  {
    title: '个人入门路线',
    goal: '两周内形成第一个可展示的航天仿真闭环。',
    path: ['Python / Jupyter 做二体轨道', 'Orekit 读取 TLE 并做过境', 'CesiumJS 展示轨迹', '写一篇实验记录'],
    reject: '先别碰全套 STK 菜单和复杂 CFD。',
  },
  {
    title: '任务分析路线',
    goal: '把真实航天对象变成可复查的任务剖面。',
    path: ['STK 快速建场景', 'GMAT / Orekit 复核轨道', '导出访问窗口', '关联公开来源和假设'],
    reject: '不要只有三维动画，必须有报告表和对照结果。',
  },
  {
    title: '工程仿真路线',
    goal: '围绕一个子系统建立可验证模型。',
    path: ['OpenVSP 建简化几何', 'SU2 / OpenFOAM 做参数扫描', 'ParaView 后处理', '记录网格、边界和误差'],
    reject: '不要把低保真云图包装成高保真结论。',
  },
];

const toolHealthRules = [
  { title: '先跑示例', text: '任何工具进入本站前，至少要跑通一个官方或自建最小示例。' },
  { title: '写清输入输出', text: '只写“用于轨道仿真”不够，必须写 TLE、星历、网格、控制参数、CSV 等具体输入输出。' },
  { title: '保留替代关系', text: '商业工具负责快速场景，开源工具负责复核和可复现，不要把它们混成一类。' },
  { title: '标注证据价值', text: '工具卡要说明它能产生什么证据：脚本、报告、曲线、日志、场景文件还是只是展示。' },
];

function ToolDecisionPanel() {
  return <section className="lab-page-section lab-tool-decision">
    <div className="lab-page-head"><div><span>选择雷达</span><h2>先回答任务，再选择工具。</h2></div><p>工具库不应该像软件下载站。先判断研究任务属于哪条链路，再从候选工具里选一个最小可运行入口。</p></div>
    <div className="lab-decision-grid">
      {decisionQuestions.map((item, index) => <article key={item.q}>
        <em>{String(index + 1).padStart(2, '0')}</em>
        <h3>{item.q}</h3>
        <strong>{item.answer}</strong>
        <div>{item.picks.map(pick => <span key={pick}>{pick}</span>)}</div>
      </article>)}
    </div>
  </section>;
}

function ToolRecipeBoard() {
  return <section className="lab-page-section lab-tool-recipes">
    <div className="lab-page-head"><div><span>任务配方</span><h2>每条配方都要能变成实验记录。</h2></div><p>这里直接给出“输入 → 工具 → 步骤 → 输出 → 坑点”，避免工具页继续停留在名词罗列。</p></div>
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

function LearningRoutes() {
  return <section className="lab-page-section lab-learning-routes">
    <div className="lab-page-head"><div><span>学习路径</span><h2>不同目标，不同工具顺序。</h2></div><p>工具学习最容易失控。先限制目标和路线，避免在软件菜单里空转。</p></div>
    <div className="lab-route-grid">{learningRoutes.map(route => <article key={route.title}>
      <h3>{route.title}</h3>
      <p>{route.goal}</p>
      <ol>{route.path.map(step => <li key={step}>{step}</li>)}</ol>
      <small>{route.reject}</small>
    </article>)}</div>
  </section>;
}

function ToolHealthChecklist() {
  return <section className="lab-page-section lab-tool-health">
    <div className="lab-page-head"><div><span>维护规则</span><h2>工具条目必须有工程含量。</h2></div><p>以后每天新增工具时，先按这些规则补齐字段，页面会自动渲染，而不是改布局。</p></div>
    <div className="lab-health-grid">{toolHealthRules.map(rule => <article key={rule.title}><h3>{rule.title}</h3><p>{rule.text}</p></article>)}</div>
  </section>;
}

function StackBoard() {
  return <section className="lab-page-section lab-tools-stacks">
    <div className="lab-page-head"><div><span>能力地图</span><h2>任务阶段对应工具组合。</h2></div><p>每个阶段都要说明问题、输入、输出和工具候选。真正有用的是链路，不是孤立软件名。</p></div>
    <div className="lab-status-grid">{toolLanes.map((lane, i) => <article key={lane.title}><span>{String(i+1).padStart(2,'0')}</span><strong>{lane.title}</strong><p>{lane.problem}</p><div className="lab-card-brief"><b>输入</b><span>{lane.input}</span></div><div className="lab-card-brief"><b>输出</b><span>{lane.output}</span></div><footer>{lane.tools.map(t => <em key={t}>{t}</em>)}</footer></article>)}</div>
  </section>;
}

export default function ToolsPage() {
  const [cat, setCat] = useState('全部');
  const [q, setQ] = useState('');
  const result = useMemo(() => tools.filter(t => (cat === '全部' || t.category === cat) && JSON.stringify(t).toLowerCase().includes(q.toLowerCase())), [cat, q]);
  return <Layout title="工具库" description="航天仿真专业工具、使用指南、工具链组合和使用示例">
    <AeroLabFrame active="TOOLS">
      <LabPageHero eyebrow="TOOL LIBRARY · 工具库" title="专业仿真工具库" text="这里不是软件名录，而是面向航天仿真任务的工具选择台：先明确任务，再看输入输出、第一步、证据链用途、组合工具和不适用边界。" image={labImages.control} stats={[{label:'工具条目', value:String(tools.length)}, {label:'任务配方', value:String(toolSelectionRecipes.length)}, {label:'分类', value:String(toolCategories.length - 1)}, {label:'维护方式', value:'数据驱动'}]} />
      <ToolDecisionPanel />
      <ToolStageExplorer lanes={toolLanes} tools={tools}/>
      <ToolRecipeBoard />
      <LearningRoutes />
      <StackBoard />
      <ToolHealthChecklist />
      <section className="lab-page-section">
        <div className="lab-page-head"><div><span>工具矩阵</span><h2>完整工具库</h2></div><p>每个工具条目必须回答：第一步怎么跑、适合干什么、不适合干什么、输入输出是什么、怎样进入证据链。</p></div>
        <div className="lab-filter-row"><input value={q} onChange={e=>setQ(e.target.value)} placeholder="搜索 MATLAB / STK / GMAT / CFD / GNC" />{toolCategories.map(c => <button key={c} className={c===cat?'active':''} onClick={()=>setCat(c)}>{c}</button>)}</div>
        <div className="lab-database-toolbar"><strong>{result.length}</strong><span>个匹配工具</span><p>先筛选类别，再展开卡片判断它是否适合当前任务阶段。</p></div>
        <div className="lab-table-grid lab-database-grid lab-tool-database">{result.map(tool => <ToolDatabaseCard key={tool.id} tool={tool}/>)}</div>
      </section>
    </AeroLabFrame>
  </Layout>;
}
