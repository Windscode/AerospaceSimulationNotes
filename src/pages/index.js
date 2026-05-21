import React from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import styles from './index.module.css';

const sections = [
  {
    title: '学习路线',
    description: '轨道力学、航天器动力学、GNC/ADCS、推进、气动与CFD的系统化学习路径。',
    to: '/docs/learning-path/overview',
  },
  {
    title: '工具软件',
    description: 'STK、GMAT、Orekit、Tudat、Basilisk、RocketPy、SU2、OpenFOAM 等工具的用途、边界和学习建议。',
    to: '/docs/tools/overview',
  },
  {
    title: '开源项目索引',
    description: '按工程可用性评估 GitHub 项目：能否编译、能否复现、适合学习还是适合集成。',
    to: '/docs/projects/overview',
  },
  {
    title: '工程实践',
    description: '记录编译、复现、验证、仿真实验和项目推进过程，避免资料停留在收藏夹层面。',
    to: '/docs/engineering/overview',
  },
];

export default function Home() {
  return (
    <Layout
      title="航天仿真资料库"
      description="个人航天仿真资料、项目、论文与工程实践知识库">
      <main className={styles.main}>
        <section className={styles.hero}>
          <div className="container">
            <h1>航天仿真资料库</h1>
            <p>
              面向长期积累的个人知识库：整理航天仿真资料、开源项目、论文笔记、工具链和工程实践。
            </p>
            <div className={styles.actions}>
              <Link className="button button--primary button--lg" to="/docs/intro">
                进入资料库
              </Link>
              <Link className="button button--secondary button--lg" to="/docs/projects/project-template">
                查看项目模板
              </Link>
            </div>
          </div>
        </section>
        <section className="container">
          <div className={styles.grid}>
            {sections.map((section) => (
              <Link key={section.title} className={styles.card} to={section.to}>
                <h2>{section.title}</h2>
                <p>{section.description}</p>
              </Link>
            ))}
          </div>
        </section>
      </main>
    </Layout>
  );
}
