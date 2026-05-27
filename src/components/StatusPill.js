import React from 'react';

const toneMap = {
  '高': 'good',
  '中高': 'good',
  '中': 'watch',
  '低中': 'weak',
  '低': 'weak',
  '入队': 'queue',
  '筛选': 'queue',
  '观察': 'watch',
  '评估': 'watch',
  '整理': 'good',
  '成熟': 'good',
  '行业标准': 'good',
  '研究常用': 'watch',
  '基础工具': 'good',
};

export default function StatusPill({label, value}) {
  const tone = toneMap[value] || 'default';
  return <span className={`lab-status-pill lab-status-pill--${tone}`}><i />{label && <b>{label}</b>}<em>{value}</em></span>;
}
