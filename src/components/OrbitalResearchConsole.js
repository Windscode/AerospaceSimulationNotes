import React, { useMemo, useState } from 'react';
import Link from '@docusaurus/Link';

const stages = [
  {
    key: 'discover',
    label: '发现',
    en: 'DISCOVER',
    route: '/intelligence',
    headline: '新资料先进入情报流',
    text: '论文、项目、工具、任务新闻和公开数据先进入待评估状态，不直接污染稳定知识库。',
    metric: '每日',
  },
  {
    key: 'evaluate',
    label: '评估',
    en: 'EVALUATE',
    route: '/radar',
    headline: '判断工程价值和可信度',
    text: '评估许可证、成熟度、复现难度、数据来源、适用任务和下一步实验动作。',
    metric: '筛选',
  },
  {
    key: 'mission',
    label: '任务',
    en: 'MISSION',
    route: '/missions',
    headline: '挂接到真实任务对象',
    text: '把工具、数据、方法和项目放进火箭入轨、星座覆盖、月面着陆或再入案例中。',
    metric: '案例',
  },
  {
    key: 'reproduce',
    label: '复现',
    en: 'REPRODUCE',
    route: '/reproduction-lab',
    headline: '用实验验证结论',
    text: '记录环境、命令、输入、输出、误差和对照基准，能重新跑通才算进入证据链。',
    metric: '验证',
  },
  {
    key: 'archive',
    label: '归档',
    en: 'ARCHIVE',
    route: '/knowledge',
    headline: '沉淀为稳定知识资产',
    text: '成熟内容进入知识库、工具矩阵、任务档案、方法卡片或研究日志归档。',
    metric: '知识库',
  },
];

export default function OrbitalResearchConsole({ compact = false }) {
  const [activeKey, setActiveKey] = useState(stages[0].key);
  const activeIndex = stages.findIndex(item => item.key === activeKey);
  const active = stages[activeIndex] || stages[0];
  const orbitStyle = useMemo(() => ({ '--active-index': activeIndex }), [activeIndex]);

  return <section className={`orbital-console ${compact ? 'orbital-console--compact' : ''}`}>
    <div className="orbital-console__copy">
      <span>INTERACTIVE RESEARCH ORBIT · 研究链路</span>
      <h2>从发现到归档，让资料沿着轨道流转。</h2>
      <p>这不是装饰性动画，而是网站的维护逻辑：每天新增内容先进入情报流，再经过评估、任务挂接、复现实验，最后沉淀到知识库。</p>
      <div className="orbital-console__stage-card">
        <em>{active.en}</em>
        <strong>{active.headline}</strong>
        <p>{active.text}</p>
        <Link to={active.route}>进入{active.label}模块 ↗</Link>
      </div>
    </div>
    <div className="orbital-console__visual" style={orbitStyle} aria-label="研究链路交互轨道">
      <div className="orbit-ring orbit-ring--outer" />
      <div className="orbit-ring orbit-ring--middle" />
      <div className="orbit-ring orbit-ring--inner" />
      <div className="orbit-scan" />
      <div className="orbit-core"><span>{active.metric}</span><b>{active.label}</b></div>
      {stages.map((stage, index) => <button
        key={stage.key}
        className={`orbit-node orbit-node--${index + 1} ${stage.key === activeKey ? 'active' : ''}`}
        onMouseEnter={() => setActiveKey(stage.key)}
        onFocus={() => setActiveKey(stage.key)}
        onClick={() => setActiveKey(stage.key)}
        type="button"
      ><span>{stage.label}</span><em>{stage.en}</em></button>)}
    </div>
  </section>;
}
