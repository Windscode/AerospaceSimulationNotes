# Design System

本设计系统不追求“炫酷科幻”，而追求专业、克制、高信息密度和工程可信度。

## 视觉原则

- 深色背景承载工程和航天氛围。
- 青蓝色作为主强调色，避免大面积橙色造成低端 B2B 感。
- 卡片使用细边框、弱辉光和轻微玻璃态。
- 表格和卡片保持高信息密度，但避免拥挤。
- 图片优先使用自绘 SVG，不依赖版权不明素材。

## Design Tokens

关键变量位于 `src/css/custom.css`：

```css
--asn-bg: #050816;
--asn-panel: rgba(12, 24, 44, 0.82);
--asn-border: rgba(142, 202, 255, 0.18);
--asn-cyan: #5de1ff;
--asn-blue: #6aa4ff;
--asn-green: #7ef3bd;
--asn-radius-md: 20px;
```

## 组件体系

- `SectionHeader`：区块标题。
- `StatusPill`：状态/评级徽章。
- `ToolCard`：工具矩阵卡片。
- `ProjectCard`：项目雷达卡片。
- `HeroVisual`：首页主视觉。

## 后续扩展建议

后续可以继续加入：

- 表格型工具矩阵视图。
- 搜索索引。
- 标签颜色规范。
- 内容状态看板。
- 复杂图表组件。
