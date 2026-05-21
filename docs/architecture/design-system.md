# 设计系统

新版默认中文界面，视觉目标是：**专业、克制、高级、工程感强**。

## 设计原则

- 不做花哨科幻海报站；图片服务信息架构。
- 不堆砌卡片；每个卡片都有明确用途。
- 暗色为主，使用低饱和深蓝黑背景、电蓝/青色强调、琥珀色只用于状态提示。
- 所有关键页面都有栏目级高清视觉图。

## 组件层级

- Hero 主视觉：建立专业感和站点定位。
- Command Panel：显示站点状态、工具数量、生命周期等。
- Data Card：用于工具、项目、论文、实验记录。
- Tag Badge：用于领域、状态、许可证、优先级。
- Visual Band：用于栏目封面和专题入口。

## 图片系统

本包内已集成 6 张原创高清视觉图：

- `hero-simulation-center.jpg`
- `tool-stack-landscape.jpg`
- `project-radar.jpg`
- `reproduction-lab.jpg`
- `intelligence-feed.jpg`
- `knowledge-map.jpg`

这些图都在 `static/img/visual/`，已被首页和关键页面实际引用。
