import React, {useMemo, useState} from 'react';
import Layout from '@theme/Layout';
import AeroLabFrame, { LabPageHero } from '../../components/AeroLabFrame';
import VehicleMissionExplorer from '../../components/VehicleMissionExplorer';
import { VehicleDatabaseCard } from '../../components/DatabaseCards';
import { labImages } from '../../data/aerolabContent';
import { vehicles, vehicleCategories } from '../../data/vehicles';

const realFocus = vehicles.slice(0, 4).map(v => ({
  title: v.title,
  desc: v.simulationTopics.slice(0, 4).join('、'),
  meta: `${v.category} · ${v.country} · ${v.confidence}`,
  tools: v.tools.slice(0, 4),
}));

const objectQuestions = [
  { title: '能直接获取什么？', text: 'TLE、任务日期、官方参数、外形尺寸、直播时间线、论文曲线和任务页面。', tag: '事实' },
  { title: '哪些需要估计？', text: '质量分配、推力节流、气动系数、姿态约束、热流范围和控制律细节。', tag: '估计' },
  { title: '能复现到什么程度？', text: '先复现任务事件、轨道段、过境窗口、趋势曲线，不把未知参数伪装成真实数据。', tag: '边界' },
  { title: '最后沉淀成什么？', text: '对象档案、参数表、仿真脚本、可视化回放、误差说明和实验记录。', tag: '资产' },
];

const simulationPaths = [
  { title: '入轨与任务轨道', desc: '火箭、低轨卫星、星座和任务部署都先落到轨道状态、事件时间和 TLE 对照。', items: ['GMAT', 'Orekit', 'TLE', 'Cesium'], output: '目标轨道、事件时间线、访问窗口和轨迹回放。' },
  { title: '再入与气动热', desc: 'Starship、Orion、Apollo 指令舱等对象要把外形、速度高度走廊、热流和过载分开处理。', items: ['OpenVSP', 'SU2', 'OpenFOAM', 'ParaView'], output: '外形假设、气动系数、热流趋势、适用边界。' },
  { title: '任务控制回放', desc: '把公开事件、遥测线索、状态估计和仿真输出组织成可复查的时间线。', items: ['Open MCT', 'CesiumJS', 'Python'], output: '任务日志、遥测面板、关键事件和结论卡。' },
  { title: 'GNC 与子系统拆解', desc: '把飞行器拆成推进、姿态、电源、通信、热控、分离和载荷接口，逐个建立可验证模型。', items: ['Simulink', 'Basilisk', 'NASA 42'], output: '子系统模型、控制参数、传感器/执行机构假设。' },
];

const dossierRules = [
  { title: '先来源，后参数', text: '任何参数进入档案前都要标注来源；找不到来源的只能进“估计/假设”。' },
  { title: '先任务段，后全系统', text: '不要一上来做完整六自由度。先做入轨、过境、再入、回放这类单段实验。' },
  { title: '先验证，后展示', text: '轨迹图和三维回放必须绑定误差、时间系统、坐标系和对照对象。' },
  { title: '先可维护，再丰富', text: '每个对象用统一字段维护：公开数据、推断参数、工具链、验证检查、下一步。' },
];

function ObjectQuestionBoard() {
  return <section className="lab-page-section lab-object-question-board">
    <div className="lab-page-head"><div><span>对象准入</span><h2>飞行器不是百科条目，而是仿真入口。</h2></div><p>每个真实对象都必须回答这四个问题，否则页面就会退化成图片和参数堆砌。</p></div>
    <div className="lab-object-question-grid">{objectQuestions.map((item, index) => <article key={item.title}>
      <span>{String(index + 1).padStart(2, '0')} · {item.tag}</span>
      <h3>{item.title}</h3>
      <p>{item.text}</p>
    </article>)}</div>
  </section>;
}

function PathBoard() {
  return <section className="lab-page-section lab-mission-path-board">
    <div className="lab-page-head"><div><span>仿真路径</span><h2>对象进入仿真的四条主线。</h2></div><p>真实飞行器要转化为可运行任务：轨道、气动热、任务回放、GNC/子系统。每条线都要有输出物。</p></div>
    <div className="lab-status-grid lab-mission-path-grid">{simulationPaths.map((path, i) => <article key={path.title}>
      <span>路径 {String(i+1).padStart(2,'0')}</span>
      <strong>{path.title}</strong>
      <p>{path.desc}</p>
      <div className="lab-card-brief lab-card-brief--strong"><b>输出</b><span>{path.output}</span></div>
      <footer>{path.items.map(t => <em key={t}>{t}</em>)}</footer>
    </article>)}</div>
  </section>;
}

function DossierRules() {
  return <section className="lab-page-section lab-dossier-rules">
    <div className="lab-page-head"><div><span>档案规则</span><h2>对象档案要能支撑实验。</h2></div><p>后续新增 Falcon、长征、天宫、Orion、Apollo 等对象时，按这套规则补齐字段。</p></div>
    <div className="lab-health-grid">{dossierRules.map(rule => <article key={rule.title}><h3>{rule.title}</h3><p>{rule.text}</p></article>)}</div>
  </section>;
}

export default function MissionsPage(){
  const [cat, setCat] = useState('全部');
  const [q, setQ] = useState('');
  const result = useMemo(() => vehicles.filter(v => (cat === '全部' || v.category === cat) && JSON.stringify(v).toLowerCase().includes(q.toLowerCase())), [cat, q]);
  return <Layout title="飞行器与任务" description="航天飞行器、火箭、卫星、空间站和任务仿真方法">
    <AeroLabFrame active="VEHICLES">
      <LabPageHero eyebrow="VEHICLES & MISSIONS · 飞行器与任务" title="飞行器与任务档案" text="这里不做百科列表，而是围绕真实航天对象建立研究档案：公开来源、可推断参数、任务阶段、子系统、仿真路径、验证检查和可复现实验入口。" image={labImages.hero} stats={[{label:'真实对象', value:String(vehicles.length)}, {label:'数据模式', value:'公开 + 估计'}, {label:'仿真链路', value:'对象驱动'}, {label:'准入规则', value:'证据优先'}]} />
      <ObjectQuestionBoard />
      <VehicleMissionExplorer vehicles={vehicles}/>
      <section className="lab-page-section lab-real-overview">
        <div className="lab-page-head"><div><span>真实对象</span><h2>先用真实飞行器承载内容。</h2></div><p>相比样板模块，真实对象会逼着网站回答：数据从哪里来、能算什么、哪些只是估计、用什么工具验证。</p></div>
        <div className="lab-status-grid lab-real-focus-grid">{realFocus.map((item, i) => <article key={item.title}><span>{String(i+1).padStart(2,'0')} · {item.meta}</span><strong>{item.title}</strong><p>{item.desc}</p><footer>{item.tools.map(t => <em key={t}>{t}</em>)}</footer></article>)}</div>
      </section>
      <PathBoard />
      <DossierRules />
      <section className="lab-page-section">
        <div className="lab-page-head"><div><span>飞行器档案</span><h2>对象数据库</h2></div><p>展开卡片后能看到公开来源、推断参数、任务阶段、仿真流程和验证检查。后续每个对象都应该继续补图片、原始链接、表格和实验记录。</p></div>
        <div className="lab-filter-row"><input value={q} onChange={e=>setQ(e.target.value)} placeholder="搜索 Falcon / 长征 / Starship / ISS / 天宫 / Starlink / Orion" />{vehicleCategories.map(c => <button key={c} className={c===cat?'active':''} onClick={()=>setCat(c)}>{c}</button>)}</div>
        <div className="lab-database-toolbar"><strong>{result.length}</strong><span>个匹配对象</span><p>优先看真实对象，再看它能产生什么仿真任务。</p></div>
        <div className="lab-table-grid lab-database-grid lab-vehicle-matrix">{result.map(v => <VehicleDatabaseCard key={v.id} vehicle={v}/>)}</div>
      </section>
    </AeroLabFrame>
  </Layout>;
}
