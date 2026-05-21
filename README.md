# Aerospace Simulation Notes

Aerospace Simulation Notes 是一个面向长期维护的航天仿真研究门户，不是普通博客。它用于沉淀工程软件工具栈、开源项目雷达、论文笔记、复现实验和稳定知识库。

## 本版定位

新版按“专业航天仿真研究站”重构：

- **Intelligence Feed**：每日资料收集与研究动态。
- **Tool Stack**：MATLAB / Simulink、Ansys / STK、GMAT、Orekit、Tudat、Basilisk、OpenFOAM、SU2 等工程软件生态。
- **Project Radar**：按成熟度、复现状态、语言、许可证和工程价值评价项目。
- **Knowledge Base**：稳定长期知识，包括轨道、GNC、推进、气动、结构和可视化。
- **Reproduction Lab**：复现实验、验证基准和工程记录。

## 本地运行

```bash
npm install
npm run start
```

## 构建

```bash
npm run build
```

## 部署

GitHub Pages 使用 `.github/workflows/deploy.yml` 自动构建。推送到 `main` 后等待 Actions 完成，然后访问：

```text
https://windscode.github.io/AerospaceSimulationNotes/
```

## 每日维护入口

- 快速新增动态：`blog/`
- 新增工具：`src/data/siteContent.js` 中的 `tools`
- 新增项目：`src/data/siteContent.js` 中的 `projects`
- 新增稳定知识：`docs/knowledge/`
- 新增实验：`docs/lab/` 或 `src/data/siteContent.js` 中的 `experiments`

更多说明见：`docs/operations/maintenance-workflow.md`。
