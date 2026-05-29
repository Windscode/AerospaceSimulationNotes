import React from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import AeroLabFrame, { LabPageHero } from '../../components/AeroLabFrame';
import { labImages } from '../../data/aerolabContent';
import { logEntryTypes, dailyMaintenanceChecklist, recentWorkLog, contentRoutingRules, screenshotAuditPages } from '../../data/maintenance';
import '../../css/aerolab-log-v4.css';

function LogTypes() {
  return <section className="lab-page-section lab-log-types">
    <div className="lab-page-head"><div><span>日志模板</span><h2>日志不是文章分类，而是维护动作。</h2></div><p>每天新增内容时，先按日志模板拆字段，成熟后再流转到工具库、对象库、知识图谱或复现实验。</p></div>
    <div className="lab-log-type-grid">{logEntryTypes.map((item, index) => <article key={item.id}>
      <span>{String(index + 1).padStart(2, '0')}</span>
      <h3>{item.title}</h3>
      <p>{item.purpose}</p>
      <div>{item.requiredFields.map(field => <em key={field}>{field}</em>)}</div>
      <strong>{item.output}</strong>
      <Link to={item.route}>进入对应模块 ↗</Link>
    </article>)}</div>
  </section>;
}

function MaintenanceChecklist() {
  return <section className="lab-page-section lab-maintenance-checklist">
    <div className="lab-page-head"><div><span>每日维护</span><h2>每天维护时按这套检查。</h2></div><p>你的站点以后会持续扩内容，所以需要流程约束，避免又变成一堆漂亮但没用的模块。</p></div>
    <div className="lab-checklist-grid">{dailyMaintenanceChecklist.map((item, index) => <article key={item.title}>
      <em>{String(index + 1).padStart(2, '0')}</em>
      <h3>{item.title}</h3>
      <p>{item.desc}</p>
    </article>)}</div>
  </section>;
}

function RecentWork() {
  return <section className="lab-page-section lab-recent-work-log">
    <div className="lab-page-head"><div><span>最近工作</span><h2>最近维护记录。</h2></div><p>记录网站结构怎么演进、哪些问题已经处理、下一步还要修什么。</p></div>
    <div className="lab-work-log-grid">{recentWorkLog.map(item => <article key={item.title}>
      <span>{item.date} · {item.type}</span>
      <h3>{item.title}</h3>
      <p>{item.summary}</p>
      <div>{item.changed.map(c => <em key={c}>{c}</em>)}</div>
      <strong>{item.next}</strong>
    </article>)}</div>
  </section>;
}

function RoutingRules() {
  return <section className="lab-page-section lab-log-routing">
    <div className="lab-page-head"><div><span>内容流转</span><h2>同一条材料只维护一次。</h2></div><p>日志负责记录过程，稳定内容进入结构化页面，避免同一资料在多个页面重复维护。</p></div>
    <div className="lab-routing-grid lab-log-routing-grid">{contentRoutingRules.map((item, index) => <article key={`${item.from}-${item.to}`}>
      <span>ROUTE {String(index + 1).padStart(2, '0')}</span>
      <h3>{item.from} → {item.to}</h3>
      <p>{item.condition}</p>
    </article>)}</div>
  </section>;
}

function ScreenshotAudit() {
  return <section className="lab-page-section lab-screenshot-audit">
    <div className="lab-page-head"><div><span>截图审查</span><h2>每次构建后用真实页面截图审查。</h2></div><p>你之前指出的问题是对的：只看代码会误判真实页面。后续每轮构建都应该按页面截图逐页审查。</p></div>
    <div className="lab-screenshot-grid">{screenshotAuditPages.map((item, index) => <article key={item.path}>
      <em>{String(index + 1).padStart(2, '0')}</em>
      <h3>{item.title}</h3>
      <p>{item.focus}</p>
      <Link to={item.path}>打开页面 ↗</Link>
    </article>)}</div>
  </section>;
}

export default function LogPage(){
  return <Layout title="研究日志" description="AeroSim Research Lab 研究日志入口">
    <AeroLabFrame active="MINE">
      <LabPageHero eyebrow="MISSION LOG · 日志模块" title="研究日志与维护台" text="研究日志不是普通博客，而是每天维护网站的工作台：新资料先入队，成熟内容再流转到工具库、飞行器任务、开源数据、知识图谱、复现实验或个人项目。" image={labImages.control} stats={[{label:'日志模板', value:String(logEntryTypes.length)}, {label:'检查项', value:String(dailyMaintenanceChecklist.length)}, {label:'截图审查', value:String(screenshotAuditPages.length)}, {label:'模式', value:'每日维护'}]} />
      <LogTypes />
      <MaintenanceChecklist />
      <RecentWork />
      <RoutingRules />
      <ScreenshotAudit />
      <section className="lab-page-section">
        <div className="lab-overlay-panel"><img src={labImages.orbit} alt="研究日志归档"/><div><span>博客归档</span><h3>过程记录进入博客，稳定资产进入结构化页面。</h3><p>日志用于保留判断过程、失败记录和阶段结论；成熟内容再转入对应页面，避免重复维护。</p><p><Link to="/blog-archive">打开博客归档 ↗</Link></p></div></div>
      </section>
    </AeroLabFrame>
  </Layout>;
}
