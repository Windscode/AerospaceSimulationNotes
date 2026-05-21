# Redesign Report

## Why this version is different

上一版的问题是“有 Docusaurus 结构，但不像专业研究门户”。本版做了以下升级：

1. **重新定义网站产品形态**：从博客/文档站升级为 Aerospace Simulation Intelligence Hub。
2. **补全工程软件生态**：加入 MATLAB、Simulink、Stateflow、Aerospace Blockset、Ansys STK、ODTK、ModelCenter、Fluent、Mechanical、STAR-CCM+、Amesim、Abaqus、COMSOL、GMAT、Orekit、Tudat、Basilisk、SU2、OpenFOAM 等。
3. **数据驱动维护**：工具、项目、动态、实验都集中在 `src/data/siteContent.js`。
4. **专业 UI 系统**：深色高级视觉、工程面板、项目卡片、状态徽章、筛选面板、领域卡片、生命周期图。
5. **日常维护模型**：Discovered → Reading → Evaluating → Reproducing → Validated → Archived。
6. **无外部版权图片依赖**：使用自绘 SVG 视觉资源。

## Core deliverables

- `src/pages/index.js`：专业门户首页。
- `src/pages/tools.js`：可筛选工具栈矩阵。
- `src/pages/radar.js`：可筛选项目雷达。
- `src/pages/intelligence.js`：每日情报入口。
- `src/pages/reproduction-lab.js`：复现实验入口。
- `src/data/siteContent.js`：可维护数据层。
- `docs/`：知识库、操作规范、模板和架构说明。
- `static/img/`：自绘 SVG 视觉资产。

## Quality gate

交付前应执行：

```bash
npm install
npm run build
```

本包已按无外部图片依赖、无 CSS 绝对静态路径的方式设计，避免上一版出现的 SVG 路径解析问题。
