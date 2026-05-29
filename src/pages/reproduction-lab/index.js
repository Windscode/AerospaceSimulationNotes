import React, {useMemo, useState} from 'react';
import Layout from '@theme/Layout';
import AeroLabFrame, { LabPageHero } from '../../components/AeroLabFrame';
import ExperimentFlowConsole from '../../components/ExperimentFlowConsole';
import StatusPill from '../../components/StatusPill';
import { labImages, methodCards } from '../../data/aerolabContent';
import { experimentCategories, experimentCandidates, validationGates, experimentLifecycle, archiveSchema, reviewQuestions } from '../../data/experiments';
import '../../css/aerolab-repro-v4.css';

function ArchiveSchema() {
  return <section className="lab-page-section lab-archive-schema">
    <div className="lab-page-head"><div><span>归档结构</span><h2>实验完成后必须留下可重跑资产。</h2></div><p>复现实验不是截图，不是结论短文，而是一组未来可以重新运行、检查和扩展的文件。</p></div>
    <div className="lab-archive-grid">{archiveSchema.map((item, index) => <article key={item.title}>
      <span>{String(index + 1).padStart(2, '0')}</span>
      <h3>{item.title}</h3>
      <p>{item.desc}</p>
    </article>)}</div>
  </section>;
}

function ReviewQuestions() {
  return <section className="lab-page-section lab-review-questions">
    <div className="lab-page-head"><div><span>复审问题</span><h2>每个实验交付前问四个问题。</h2></div><p>这些问题能阻止实验变成“看起来跑了”，但没有来源、复现路径、对照和边界。</p></div>
    <div className="lab-review-grid">{reviewQuestions.map((item, index) => <article key={item.title}>
      <em>{String(index + 1).padStart(2, '0')}</em>
      <h3>{item.title}</h3>
      <p>{item.desc}</p>
    </article>)}</div>
  </section>;
}

function ExperimentTable({items}) {
  return <div className="lab-repro-candidate-grid">{items.map(exp => <article key={exp.id}>
    <div className="lab-card-status-row"><StatusPill label="状态" value={exp.status}/><StatusPill label="优先级" value={exp.priority}/></div>
    <span>{exp.category}</span>
    <h3>{exp.title}</h3>
    <p>{exp.objective}</p>
    <div className="lab-card-brief"><b>输入</b><span>{exp.inputs.join(' / ')}</span></div>
    <div className="lab-card-brief"><b>输出</b><span>{exp.outputs.join(' / ')}</span></div>
    <div className="lab-card-brief lab-card-brief--strong"><b>完成定义</b><span>{exp.doneDefinition}</span></div>
    <footer>{exp.tools.map(t => <em key={t}>{t}</em>)}</footer>
  </article>)}</div>;
}

export default function LabPage(){
  const [cat, setCat] = useState('全部');
  const [q, setQ] = useState('');
  const result = useMemo(() => experimentCandidates.filter(exp => (cat === '全部' || exp.category === cat) && JSON.stringify(exp).toLowerCase().includes(q.toLowerCase())), [cat, q]);
  return <Layout title="复现实验" description="航天仿真复现实验、验证和归档流程">
    <AeroLabFrame active="MINE">
      <LabPageHero eyebrow="REPRODUCTION LAB · 内部模块" title="复现实验工作台" text="这里不是展示实验想法，而是把实验推进到可运行：输入可追溯、脚本可重跑、输出可对照、假设可解释、结论可归档。" image={labImages.control} stats={[{label:'实验候选', value:String(experimentCandidates.length)}, {label:'验证门禁', value:String(validationGates.length)}, {label:'归档字段', value:String(archiveSchema.length)}, {label:'状态', value:'可运行优先'}]} />
      <ExperimentFlowConsole experiments={experimentCandidates}/>
      <ArchiveSchema />
      <ReviewQuestions />
      <section className="lab-page-section">
        <div className="lab-page-head"><div><span>验证门禁</span><h2>实验门禁</h2></div><p>没有来源、输入、输出、误差和适用范围，就不能成为稳定知识。</p></div>
        <div className="lab-status-grid lab-repro-gate-grid">{validationGates.map((c, i) => <article key={c.id}><span>门禁 {String(i+1).padStart(2,'0')}</span><strong>{c.title}</strong><p>{c.desc}</p></article>)}</div>
      </section>
      <section className="lab-page-section">
        <div className="lab-page-head"><div><span>实验任务</span><h2>实验候选</h2></div><p>候选实验按统一字段维护：目标、输入、工具、输出、验证方式、完成定义和归档去向。</p></div>
        <div className="lab-filter-row"><input value={q} onChange={e=>setQ(e.target.value)} placeholder="搜索 TLE / 火箭 / 姿态 / 再入 / CFD" />{experimentCategories.map(c => <button key={c} className={c===cat?'active':''} onClick={()=>setCat(c)}>{c}</button>)}</div>
        <div className="lab-database-toolbar"><strong>{result.length}</strong><span>个匹配实验</span><p>优先处理能在本机跑通、能输出文件、能被公开数据对照的实验。</p></div>
        <ExperimentTable items={result}/>
      </section>
      <section className="lab-page-section">
        <div className="lab-page-head"><div><span>参数推断</span><h2>假设边界</h2></div><p>把公开事实、工程估计、低阶模型和猜测分开，是个人研究站可信度的底线。</p></div>
        <div className="lab-table-grid">{methodCards.map(m => <article key={m.title}><span>{m.meta}</span><h3>{m.title}</h3><p>{m.text}</p></article>)}</div>
      </section>
      <section className="lab-page-section">
        <div className="lab-page-head"><div><span>证据链</span><h2>实验流程</h2></div><p>每次复现都要能回答：跑了什么、为什么可信、误差在哪里、下一步怎么改。</p></div>
        <div className="lab-table-grid lab-repro-lifecycle-grid">{experimentLifecycle.map(s => <article key={s.step}><span>{s.step}</span><h3>{s.title}</h3><p>{s.desc}</p></article>)}</div>
      </section>
    </AeroLabFrame>
  </Layout>;
}
