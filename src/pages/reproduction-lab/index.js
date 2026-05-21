import React from 'react';
import Layout from '@theme/Layout';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Link from '@docusaurus/Link';
import { visualAssets } from '../../data/siteContent';

const checks = ['环境可重建', '命令可复制', '输入数据可追溯', '输出结果可比较', '误差来源可解释', '结论可归档'];
export default function LabPage(){
  return <Layout title="复现实验室" description="航天仿真复现实验、验证和归档流程"><main className="asn-page"><section className="asn-hero"><img className="asn-hero__image" src={useBaseUrl(visualAssets.lab)} alt="复现实验室视觉图"/><div className="container asn-hero__content"><div><div className="asn-badge">复现实验室</div><h1>能复现的资料，才是可用的工程知识。</h1><p>复现实验室用于记录工具构建、论文复现、项目运行、基准对比和误差分析。目标不是写漂亮笔记，而是留下未来能复查的证据链。</p><div className="asn-actions"><Link className="asn-button asn-button--primary" to="/docs/lab/experiment-template">打开实验模板</Link></div></div><div className="asn-command-panel"><h3>实验记录要求</h3>{checks.slice(0,4).map(c => <div className="asn-metric" key={c}><span>{c}</span><strong>必须</strong></div>)}</div></div></section><section className="asn-section container"><div className="asn-grid asn-grid--3">{checks.map(c => <article className="asn-card" key={c}><div className="asn-kicker">CHECK</div><h3>{c}</h3><p>没有这项记录，实验结论就不能进入稳定知识库。</p></article>)}</div></section></main></Layout>;
}
