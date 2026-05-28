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

const simulationPaths = [
  { title: '入轨与任务轨道', desc: '火箭、低轨卫星、星座和任务部署都先落到轨道状态、事件时间和 TLE 对照。', items: ['GMAT', 'Orekit', 'TLE', 'Cesium'] },
  { title: '再入与气动热', desc: 'Starship、Orion、Apollo 指令舱等对象要把外形、速度高度走廊、热流和过载分开处理。', items: ['OpenVSP', 'SU2', 'OpenFOAM', 'ParaView'] },
  { title: '任务控制回放', desc: '把公开事件、遥测线索、状态估计和仿真输出组织成可复查的时间线。', items: ['Open MCT', 'CesiumJS', 'Python'] },
];

export default function MissionsPage(){
  const [cat, setCat] = useState('全部');
  const [q, setQ] = useState('');
  const result = useMemo(() => vehicles.filter(v => (cat === '全部' || v.category === cat) && JSON.stringify(v).toLowerCase().includes(q.toLowerCase())), [cat, q]);
  return <Layout title="飞行器与任务" description="航天飞行器、火箭、卫星、空间站和任务仿真方法">
    <AeroLabFrame active="VEHICLES">
      <LabPageHero eyebrow="VEHICLES & MISSIONS · 飞行器与任务" title="飞行器与任务" text="这里不再放空泛模板，而是围绕真实航天对象建立档案：Falcon 9、长征五号、Starship、ISS、天宫、Starlink、天问一号、Orion、Apollo 指令舱。每个对象都说明公开来源、可推断参数、仿真路径和验证边界。" image={labImages.hero} stats={[{label:'真实对象', value:String(vehicles.length)}, {label:'数据模式', value:'公开 + 估计'}, {label:'仿真链路', value:'对象驱动'}]} />
      <VehicleMissionExplorer vehicles={vehicles}/>
      <section className="lab-page-section lab-real-overview">
        <div className="lab-page-head"><div><span>真实对象</span><h2>先用真实飞行器承载内容。</h2></div><p>相比样板模块，真实对象会逼着网站回答：数据从哪里来、能算什么、哪些只是估计、用什么工具验证。</p></div>
        <div className="lab-status-grid lab-real-focus-grid">{realFocus.map((item, i) => <article key={item.title}><span>{String(i+1).padStart(2,'0')} · {item.meta}</span><strong>{item.title}</strong><p>{item.desc}</p><footer>{item.tools.map(t => <em key={t}>{t}</em>)}</footer></article>)}</div>
      </section>
      <section className="lab-page-section">
        <div className="lab-page-head"><div><span>仿真路径</span><h2>对象进入仿真的三条主线。</h2></div><p>真实飞行器不是百科卡片。它必须转化为轨道、气动热、任务回放或 GNC 等可执行研究任务。</p></div>
        <div className="lab-status-grid">{simulationPaths.map((path, i) => <article key={path.title}><span>路径 {String(i+1).padStart(2,'0')}</span><strong>{path.title}</strong><p>{path.desc}</p><footer>{path.items.map(t => <em key={t}>{t}</em>)}</footer></article>)}</div>
      </section>
      <section className="lab-page-section">
        <div className="lab-page-head"><div><span>飞行器档案</span><h2>对象数据库</h2></div><p>展开卡片后能看到公开来源、推断参数、任务阶段、仿真流程和验证检查。后续每个对象都应该继续补图片、原始链接、表格和实验记录。</p></div>
        <div className="lab-filter-row"><input value={q} onChange={e=>setQ(e.target.value)} placeholder="搜索 Falcon / 长征 / Starship / ISS / 天宫 / Starlink / Orion" />{vehicleCategories.map(c => <button key={c} className={c===cat?'active':''} onClick={()=>setCat(c)}>{c}</button>)}</div>
        <div className="lab-database-toolbar"><strong>{result.length}</strong><span>个匹配对象</span><p>优先看真实对象，再看它能产生什么仿真任务。</p></div>
        <div className="lab-table-grid lab-database-grid lab-vehicle-matrix">{result.map(v => <VehicleDatabaseCard key={v.id} vehicle={v}/>)}</div>
      </section>
    </AeroLabFrame>
  </Layout>;
}
