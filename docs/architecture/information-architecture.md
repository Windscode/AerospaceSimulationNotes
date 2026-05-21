# Information Architecture

网站采用“研究门户 + 文档库 + 数据矩阵”的混合结构。

## 一级入口

| 入口 | 用途 |
|---|---|
| Home | 专业门户首页，呈现站点定位、工具生态、项目雷达和维护流程 |
| Intelligence | 每日收集和研究动态入口 |
| Tool Stack | 工程软件生态矩阵 |
| Project Radar | 开源项目评价与跟踪 |
| Reproduction Lab | 复现实验和验证记录 |
| Knowledge Base | 稳定长期知识 |
| Research Log | 以时间为序的研究日志 |

## 内容生命周期

```text
Discovered → Reading → Evaluating → Reproducing → Validated → Archived
```

这个流程的目的是防止网站变成链接收藏夹。新资料可以快速进入 Daily Intake，但不能直接污染稳定知识库。

## 页面类型

- **Portal page**：首页、Tool Stack、Radar、Lab 等 React 自定义页面。
- **Evergreen docs**：长期知识、方法论、模板。
- **Blog posts**：研究日志、每日/每周动态。
- **Data-driven lists**：工具、项目、实验、动态。
