import React, {useMemo, useState} from 'react';
import Layout from '@theme/Layout';
import AeroLabFrame, { LabPageHero } from '../../components/AeroLabFrame';
import StatusPill from '../../components/StatusPill';
import DataEvidenceChain from '../../components/DataEvidenceChain';
import { ProjectDatabaseCard } from '../../components/DatabaseCards';
import { labImages, methodCards } from '../../data/aerolabContent';
import { openSourceProjects, datasets } from '../../data/openSource';
import '../../css/aerolab-open-v4.css';

const categories = ['全部', ...Array.from(new Set(openSourceProjects.map(p => p.category)))];

const pipelineSteps = [
  { title: '发现资源', desc: '从 GitHub、NASA/JPL/ESA 页面、论文和任务页面发现工具、项目或数据源。', output: '候选条目', tag: 'DISCOVER' },
  { title: '跑通示例', desc: '开源项目必须能跑通官方示例；数据源必须能完成一次下载、解析或查询。', output: '最小可运行记录', tag: 'RUN' },
  { title: '接入任务', desc: '把资源放进真实对象链路，例如 ISS 过境、Starlink 覆盖、Apollo 再入曲线复现。', output: '任务连接', tag: 'CONNECT' },
  { title: '沉淀证据', desc: '记录版本、输入输出、限制、误差和下一步，避免只收藏链接。', output: '研究资产', tag: 'EVIDENCE' },
];

const resourceDecisions = [
  { q: '我要做轨道传播/过境/覆盖？', answer: '先用 TLE + Orekit/GMAT。', picks: ['CelesTrak', 'Orekit', 'GMAT', 'CesiumJS'] },
  { q: '我要做深空转移或星历？', answer: '先确认时间系统和参考系。', picks: ['JPL Horizons', 'SPICE', 'GMAT', 'Tudat'] },
  { q: '我要做姿态/GNC 或飞行软件？', answer: '先跑最小闭环，不要直接上大系统。', picks: ['Basilisk', 'NASA 42', 'cFS', 'F Prime'] },
  { q: '我要做再入/CFD/外形？', answer: '先从几何和边界条件开始。', picks: ['OpenVSP', 'SU2', 'OpenFOAM', 'NASA NTRS'] },
];

const datasetRecipes = [
  { title: 'ISS / 天宫过境', data: ['TLE', '地面站经纬度', 'UTC 时间段'], steps: ['读取最新 TLE', 'SGP4/Orekit 传播', '计算可见窗口', '导出 Cesium 回放'], output: '过境时间表 + 三维轨迹 + TLE 精度说明' },
  { title: 'Starlink 星座覆盖', data: ['Starlink TLE', '区域边界', '仰角门限'], steps: ['批量下载 TLE', '按高度/倾角分壳层', '计算区域可见卫星数', '输出覆盖热力图'], output: '壳层统计 + 覆盖曲线 + 数据更新时间戳' },
  { title: 'Apollo 再入曲线复现', data: ['NASA NTRS 报告', '论文曲线', '外形尺寸'], steps: ['图表数字化', '建立简化再入模型', '积分速度高度走廊', '对照峰值热流/过载'], output: '曲线对照 + 模型假设 + 误差来源' },
];

const maintenanceRules = [
  { title: '能运行才收录', text: '开源项目至少要有一个可运行入口；跑不通的先进入候选池，不放进稳定推荐。' },
  { title: '数据源必须说明限制', text: 'TLE、SPICE、任务页面、新闻稿的精度和适用范围不同，不能混成一种证据。' },
  { title: '项目要绑定对象', text: '资源只有接到 Falcon 9、ISS、天宫、Starlink、Apollo 等真实对象后才有研究价值。' },
  { title: '每天维护靠字段', text: '新增资源时补齐用途、输入输出、接入流程、坑点和可信度，而不是修改页面布局。' },
];

function ResourcePipeline() {
  return <section className="lab-page-section lab-resource-pipeline">
    <div className="lab-page-head"><div><span>资源流水线</span><h2>从发现资源到进入仿真链路。</h2></div><p>开源项目和公开数据不是收藏夹。每个资源都要经过发现、跑通、接入、沉淀四步，最后才能变成本站资产。</p></div>
    <div className="lab-pipeline-grid">{pipelineSteps.map((step, index) => <article key={step.title}>
      <span>{String(index + 1).padStart(2, '0')} · {step.tag}</span>
      <h3>{step.title}</h3>
      <p>{step.desc}</p>
      <strong>{step.output}</strong>
    </article>)}</div>
  </section>;
}

function ResourceDecisionBoard() {
  return <section className="lab-page-section lab-resource-decision">
    <div className="lab-page-head"><div><span>资源选择</span><h2>先问任务，再找数据和项目。</h2></div><p>把资源入口从“看起来有用”改成“当前任务必须用到什么”。</p></div>
    <div className="lab-decision-grid lab-resource-decision-grid">{resourceDecisions.map((item, i) => <article key={item.q}>
      <em>{String(i + 1).padStart(2, '0')}</em>
      <h3>{item.q}</h3>
      <strong>{item.answer}</strong>
      <div>{item.picks.map(p => <span key={p}>{p}</span>)}</div>
    </article>)}</div>
  </section>;
}

function DatasetRecipes() {
  return <section className="lab-page-section lab-data-recipes">
    <div className="lab-page-head"><div><span>数据配方</span><h2>公开数据必须形成可运行实验。</h2></div><p>这里把数据源变成具体实验路径，而不是只列 NASA、CelesTrak、JPL 这些名字。</p></div>
    <div className="lab-recipe-grid">{datasetRecipes.map((recipe, index) => <article key={recipe.title}>
      <span>{String(index + 1).padStart(2, '0')} · DATA RECIPE</span>
      <h3>{recipe.title}</h3>
      <div className="lab-recipe-tools">{recipe.data.map(d => <em key={d}>{d}</em>)}</div>
      <ol>{recipe.steps.map(step => <li key={step}>{step}</li>)}</ol>
      <strong>{recipe.output}</strong>
    </article>)}</div>
  </section>;
}

function SourceMatrix() {
  return <section className="lab-page-section lab-source-matrix-section">
    <div className="lab-page-head"><div><span>公开来源</span><h2>数据来源要带限制条件。</h2></div><p>每个来源都要标注用途、可信度、更新频率、格式、适用场景和边界。</p></div>
    <div className="lab-status-grid lab-source-matrix">{datasets.map((s, i) => <article key={s.id}>
      <div className="lab-card-status-row"><StatusPill label="可信度" value={s.confidence}/><StatusPill label="类型" value={s.type}/></div>
      <span>{String(i + 1).padStart(2,'0')} · {s.organization}</span>
      <strong>{s.title}</strong>
      <p>{s.updateCycle} · {s.format}</p>
      <p>{s.scenario}</p>
      <div className="lab-card-brief lab-card-brief--strong"><b>限制</b><span>{s.limitation}</span></div>
      <footer><em>{s.exampleUse}</em></footer>
    </article>)}</div>
  </section>;
}

function MaintenanceRules() {
  return <section className="lab-page-section lab-open-rules">
    <div className="lab-page-head"><div><span>维护规则</span><h2>资源库以后按字段维护。</h2></div><p>每天新增资料时，不要再堆新模块，而是补齐字段，让页面自动变得更有用。</p></div>
    <div className="lab-health-grid">{maintenanceRules.map(rule => <article key={rule.title}><h3>{rule.title}</h3><p>{rule.text}</p></article>)}</div>
  </section>;
}

export default function OpenSourceDataPage(){
  const [cat, setCat] = useState('全部');
  const [q, setQ] = useState('');
  const result = useMemo(() => openSourceProjects.filter(p => (cat === '全部' || p.category === cat) && JSON.stringify(p).toLowerCase().includes(q.toLowerCase())), [cat, q]);
  return <Layout title="开源与数据" description="航天仿真开源项目、公开数据库和参数推断方法">
    <AeroLabFrame active="OPEN">
      <LabPageHero eyebrow="OPEN SOURCE & DATA · 开源与数据" title="开源与数据资源库" text="这里不是链接收藏夹，而是航天仿真资源流水线：开源项目必须能跑通示例，公开数据必须能形成实验，所有资源都要说明可信度、限制和接入任务。" image={labImages.data} stats={[{label:'开源项目', value:String(openSourceProjects.length)}, {label:'数据源', value:String(datasets.length)}, {label:'数据配方', value:String(datasetRecipes.length)}, {label:'维护方式', value:'字段驱动'}]} />
      <ResourcePipeline />
      <ResourceDecisionBoard />
      <DataEvidenceChain datasets={datasets}/>
      <DatasetRecipes />
      <SourceMatrix />
      <section className="lab-page-section">
        <div className="lab-page-head"><div><span>开源评估</span><h2>项目矩阵</h2></div><p>优先看许可证、活跃度、文档、示例质量、复现成本和工程价值；展开后判断它能不能接入实际仿真链路。</p></div>
        <div className="lab-filter-row"><input value={q} onChange={e=>setQ(e.target.value)} placeholder="搜索 Orekit / Basilisk / cFS / TLE" />{categories.map(c => <button key={c} className={c===cat?'active':''} onClick={()=>setCat(c)}>{c}</button>)}</div>
        <div className="lab-database-toolbar"><strong>{result.length}</strong><span>个匹配项目</span><p>不是收藏项目，而是把项目放入学习、验证、任务回放或工程接口的位置。</p></div>
        <div className="lab-table-grid lab-database-grid lab-open-project-grid">{result.map(p => <ProjectDatabaseCard key={p.id} project={p}/>)}</div>
      </section>
      <section className="lab-page-section">
        <div className="lab-page-head"><div><span>参数推断</span><h2>方法卡片</h2></div><p>公开数据不完整时，必须清楚区分事实、估计和猜测。</p></div>
        <div className="lab-table-grid">{methodCards.map(m => <article key={m.title}><span>{m.meta}</span><h3>{m.title}</h3><p>{m.text}</p></article>)}</div>
      </section>
      <MaintenanceRules />
    </AeroLabFrame>
  </Layout>;
}
