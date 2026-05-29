import React from 'react';
import Layout from '@theme/Layout';
import AeroLabFrame, { LabPageHero } from '../../components/AeroLabFrame';
import KnowledgeGraphExplorer from '../../components/KnowledgeGraphExplorer';
import { labImages, methodCards } from '../../data/aerolabContent';
import { knowledgeDomains, knowledgeObjects, knowledgeEdges } from '../../data/knowledge';
import '../../css/aerolab-knowledge-v4.css';

const learningRoutes = [
  { title: '轨道入门路线', target: 'ISS / 天宫 / Starlink', steps: ['理解坐标系与时间系统', '读取 TLE', '传播轨道', '计算过境窗口', '导出任务回放'], tools: ['Orekit', 'Python', 'CesiumJS'] },
  { title: '火箭任务路线', target: 'Falcon 9 / 长征五号', steps: ['整理公开参数', '估计质量与推力', '建立入轨近似', '对照目标轨道', '记录不确定性'], tools: ['RocketCEA', 'GMAT', 'Python'] },
  { title: '再入分析路线', target: 'Orion / Apollo / Starship', steps: ['建立几何简化', '确定速度高度走廊', '估计气动热', '对照论文曲线', '标注适用边界'], tools: ['OpenVSP', 'SU2', 'OpenFOAM'] },
];

const graphRules = [
  { title: '理论必须落到对象', text: '轨道、GNC、推进、气动热、结构和验证都要能解释某个真实飞行器或任务。' },
  { title: '对象必须落到实验', text: '只讲“卫星涉及轨道和姿态”不够，要给出第一项可运行实验和输出物。' },
  { title: '工具必须落到证据', text: '工具不是名称标签，必须说明它能产生曲线、表格、脚本、回放还是验证记录。' },
  { title: '边界必须写出来', text: '没有公开数据支持的高保真细节必须留在假设区，不能写成确定知识。' },
];

function LearningRouteBoard() {
  return <section className="lab-page-section lab-knowledge-routes">
    <div className="lab-page-head"><div><span>学习路线</span><h2>理论从真实任务开始学。</h2></div><p>不要按教材目录一章章堆。先选对象和实验，再倒推需要的理论和工具。</p></div>
    <div className="lab-route-grid lab-knowledge-route-grid">{learningRoutes.map(route => <article key={route.title}>
      <span>{route.target}</span>
      <h3>{route.title}</h3>
      <ol>{route.steps.map(step => <li key={step}>{step}</li>)}</ol>
      <footer>{route.tools.map(tool => <em key={tool}>{tool}</em>)}</footer>
    </article>)}</div>
  </section>;
}

function DomainMatrix() {
  return <section className="lab-page-section lab-domain-matrix-section">
    <div className="lab-page-head"><div><span>理论域</span><h2>每个理论域都要有第一步任务。</h2></div><p>稳定理论内容按研究域沉淀，但必须保留输入、输出、验证和坑点，否则还是空目录。</p></div>
    <div className="lab-status-grid lab-domain-matrix">{knowledgeDomains.map((d, i) => <article key={d.id}>
      <span>领域 {String(i+1).padStart(2,'0')} · {d.maturity}</span>
      <strong>{d.title}</strong>
      <p>{d.summary}</p>
      <div className="lab-card-brief lab-card-brief--strong"><b>第一步</b><span>{d.firstTask}</span></div>
      <div className="lab-card-brief"><b>前置</b><span>{d.dependsOn.join(' / ')}</span></div>
      <footer>{d.tools.map(t => <em key={t}>{t}</em>)}</footer>
    </article>)}</div>
  </section>;
}

function ObjectMatrix() {
  return <section className="lab-page-section lab-object-matrix-section">
    <div className="lab-page-head"><div><span>对象节点</span><h2>对象节点必须指向实验输出。</h2></div><p>对象、子系统、理论域和工具链都由数据文件维护，新增真实对象时不需要重写页面。</p></div>
    <div className="lab-status-grid lab-object-matrix">{knowledgeObjects.map((d, i) => <article key={d.id}>
      <span>对象 {String(i+1).padStart(2,'0')}</span>
      <strong>{d.title}</strong>
      <p>{d.modules.join('、')}</p>
      <div className="lab-card-brief lab-card-brief--strong"><b>第一项实验</b><span>{d.firstExperiment}</span></div>
      <div className="lab-card-brief"><b>输出</b><span>{d.output}</span></div>
      <footer>{d.relatedDomains.map(domain => <em key={domain}>{domain}</em>)}</footer>
    </article>)}</div>
  </section>;
}

function GraphRules() {
  return <section className="lab-page-section lab-graph-rules">
    <div className="lab-page-head"><div><span>图谱规则</span><h2>知识图谱不能只是装饰图。</h2></div><p>它必须能回答：当前对象需要哪些理论，第一步实验是什么，输出什么证据，边界在哪里。</p></div>
    <div className="lab-health-grid">{graphRules.map(rule => <article key={rule.title}><h3>{rule.title}</h3><p>{rule.text}</p></article>)}</div>
  </section>;
}

export default function KnowledgePage(){
  return <Layout title="知识图谱" description="航天仿真理论知识、模块关系和系统学习入口">
    <AeroLabFrame active="GRAPH">
      <LabPageHero eyebrow="KNOWLEDGE GRAPH · 知识图谱" title="知识图谱工作台" text="这里不是理论目录，而是对象驱动的知识网络：从运载火箭、卫星、空间站、探测器、再入飞行器进入轨道、GNC、推进、气动热、结构和验证方法，最终落到可运行实验。" image={labImages.orbit} stats={[{label:'理论域', value:String(knowledgeDomains.length)}, {label:'对象节点', value:String(knowledgeObjects.length)}, {label:'关系链', value:String(knowledgeEdges.length)}, {label:'目标', value:'实验驱动'}]} />
      <KnowledgeGraphExplorer domains={knowledgeDomains} objects={knowledgeObjects} edges={knowledgeEdges}/>
      <LearningRouteBoard />
      <DomainMatrix />
      <ObjectMatrix />
      <GraphRules />
      <section className="lab-page-section">
        <div className="lab-page-head"><div><span>关系链</span><h2>知识连接</h2></div><p>知识图谱的价值在于说明“为什么这个理论和这个任务对象有关”。</p></div>
        <div className="lab-table-grid lab-graph-edge-grid">{knowledgeEdges.map((edge, i) => <article key={`${edge.from}-${edge.to}`}><span>EDGE {String(i+1).padStart(2,'0')}</span><h3>{edge.from} → {edge.to}</h3><p>{edge.reason}</p></article>)}</div>
      </section>
      <section className="lab-page-section">
        <div className="lab-page-head"><div><span>方法索引</span><h2>推断方法</h2></div><p>公开数据不足时，方法和假设边界比堆资料更重要。</p></div>
        <div className="lab-table-grid">{methodCards.map(item => <article key={item.title}><span>{item.meta}</span><h3>{item.title}</h3><p>{item.text}</p></article>)}</div>
      </section>
    </AeroLabFrame>
  </Layout>;
}
