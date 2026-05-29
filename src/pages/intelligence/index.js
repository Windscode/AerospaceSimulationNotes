import React, {useMemo, useState} from 'react';
import Layout from '@theme/Layout';
import AeroLabFrame, { LabPageHero } from '../../components/AeroLabFrame';
import IntelligenceRadar from '../../components/IntelligenceRadar';
import StatusPill from '../../components/StatusPill';
import { labImages } from '../../data/aerolabContent';
import { intelligenceCategories, intelligenceQueue, intelligenceWorkflow, intelligenceSignals, intakeTemplates, scoringRubric, routingMap } from '../../data/intelligence';
import '../../css/aerolab-intelligence-v4.css';

function IntakeTemplates() {
  return <section className="lab-page-section lab-intake-templates">
    <div className="lab-page-head"><div><span>录入模板</span><h2>每天新增资料时，先按模板拆字段。</h2></div><p>前沿情报不是新闻墙，而是稳定知识库的入口。模板决定这条资料最后能不能转成工具、对象、数据或实验。</p></div>
    <div className="lab-intake-template-grid">{intakeTemplates.map((item, index) => <article key={item.title}>
      <span>{String(index + 1).padStart(2, '0')} · {item.useFor}</span>
      <h3>{item.title}</h3>
      <div>{item.fields.map(field => <em key={field}>{field}</em>)}</div>
      <strong>{item.output}</strong>
    </article>)}</div>
  </section>;
}

function ScoringBoard() {
  return <section className="lab-page-section lab-scoring-board">
    <div className="lab-page-head"><div><span>价值评分</span><h2>不是所有新闻都值得收录。</h2></div><p>只有能进入对象档案、工具链、数据源、知识图谱或复现实验的内容，才值得长期维护。</p></div>
    <div className="lab-score-grid">{scoringRubric.map((item, index) => <article key={item.title}>
      <em>{5 - index}</em>
      <h3>{item.title}</h3>
      <p>{item.desc}</p>
    </article>)}</div>
  </section>;
}

function RoutingMap() {
  return <section className="lab-page-section lab-routing-map">
    <div className="lab-page-head"><div><span>路由规则</span><h2>每条资料必须有去向。</h2></div><p>稳定内容进入对应页面，不成熟内容留在情报队列，避免污染工具库和知识图谱。</p></div>
    <div className="lab-routing-grid">{routingMap.map((item, index) => <article key={`${item.from}-${item.to}`}>
      <span>ROUTE {String(index + 1).padStart(2, '0')}</span>
      <h3>{item.from} → {item.to}</h3>
      <p>{item.condition}</p>
    </article>)}</div>
  </section>;
}

function QueueTable({items}) {
  return <div className="lab-intelligence-queue-grid">{items.map((item, i) => <article key={item.id}>
    <div className="lab-card-status-row"><StatusPill label="优先级" value={item.priority}/><StatusPill label="状态" value={item.status}/><StatusPill label="可信度" value={item.confidence}/></div>
    <span>{String(i+1).padStart(2,'0')} · {item.category} · {item.value}</span>
    <h3>{item.title}</h3>
    <p>{item.summary}</p>
    <div className="lab-intel-field"><b>来源</b><p>{item.sourceHint}</p></div>
    <div className="lab-intel-field"><b>提取字段</b><div>{item.extractFields.map(field => <em key={field}>{field}</em>)}</div></div>
    <div className="lab-intel-field lab-intel-field--next"><b>下一步</b><p>{item.nextAction}</p></div>
    <small>{item.rejectReason}</small>
    <footer>{item.routes.map(r => <em key={r}>{r}</em>)}</footer>
  </article>)}</div>;
}

export default function IntelligencePage(){
  const [cat, setCat] = useState('全部');
  const [q, setQ] = useState('');
  const result = useMemo(() => intelligenceQueue.filter(item => (cat === '全部' || item.category === cat) && JSON.stringify(item).toLowerCase().includes(q.toLowerCase())), [cat, q]);
  return <Layout title="前沿情报" description="航天新闻、研究进展、工程软件更新和可利用线索">
    <AeroLabFrame active="FRONTIER">
      <LabPageHero eyebrow="FRONTIER INTELLIGENCE · 前沿情报" title="前沿情报工作台" text="这里不做新闻堆叠，而是把航天新闻、论文报告、工具更新、开源项目和公开数据变成可筛选、可评分、可路由、可沉淀的研究线索。" image={labImages.data} stats={[{label:'情报条目', value:String(intelligenceQueue.length)}, {label:'录入模板', value:String(intakeTemplates.length)}, {label:'路由规则', value:String(routingMap.length)}, {label:'输出方向', value:'工具 / 对象 / 实验'}]} />
      <IntelligenceRadar items={intelligenceQueue} />
      <IntakeTemplates />
      <ScoringBoard />
      <RoutingMap />
      <section className="lab-page-section">
        <div className="lab-page-head"><div><span>价值信号</span><h2>筛选规则</h2></div><p>每天看到的资料很多，先判断它是否有可复现、可建模或可补充任务对象的价值。</p></div>
        <div className="lab-status-grid lab-intel-signal-grid">{intelligenceSignals.map((s, i) => <article key={s.title}><span>信号 {String(i+1).padStart(2,'0')}</span><StatusPill label="价值" value={s.score}/><strong>{s.title}</strong><p>{s.desc}</p></article>)}</div>
      </section>
      <section className="lab-page-section">
        <div className="lab-page-head"><div><span>情报入口</span><h2>入口队列</h2></div><p>新资料先进入队列，不要直接污染稳定知识体系。每条资料都要有来源、字段、下一步和拒收条件。</p></div>
        <div className="lab-filter-row"><input value={q} onChange={e=>setQ(e.target.value)} placeholder="搜索 新闻 / 论文 / 工具 / 开源 / 数据" />{intelligenceCategories.map(c => <button key={c} className={c===cat?'active':''} onClick={()=>setCat(c)}>{c}</button>)}</div>
        <div className="lab-database-toolbar"><strong>{result.length}</strong><span>条匹配线索</span><p>优先处理能转成真实对象、可运行实验、工具条目或公开数据源的资料。</p></div>
        <QueueTable items={result} />
      </section>
      <section className="lab-page-section">
        <div className="lab-page-head"><div><span>流转生命周期</span><h2>流转路径</h2></div><p>每天维护的关键不是多，而是每条资料都有状态、有判断、有去向。</p></div>
        <div className="lab-table-grid lab-intel-workflow-grid">{intelligenceWorkflow.map(s => <article key={s.step}><span>{s.step}</span><h3>{s.title}</h3><p>{s.desc}</p></article>)}</div>
      </section>
    </AeroLabFrame>
  </Layout>;
}
