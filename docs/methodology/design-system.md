# Design System

新版网站采用“专业研究门户”风格，而不是默认文档站风格。

## 视觉原则

- 深色科技底色，但避免游戏 UI 化。
- 卡片使用半透明玻璃质感和清晰边界。
- 首页突出研究门户感，文档页保持阅读效率。
- 少用图片，多用自绘 SVG、轨道线、网格、数据卡片和结构化布局。

## 信息原则

首页只放入口和重点内容，不承担所有资料维护。长期内容放 docs，动态内容放 blog，项目判断放 radar。

## 维护原则

- 首页领域卡片和精选项目来自 `src/data/homeContent.js`。
- 样式集中在 `src/css/custom.css` 和 `src/pages/index.module.css`。
- 视觉素材放在 `static/img/brand` 和 `static/img/hero`。
