# 重构报告

本版根据两轮深度研究和后续评估重新生成，重点修正：

- 默认中文界面；
- 增加真实接入的高清原创视觉图；
- 补全 MATLAB、Simulink、Ansys STK、Ansys Fluent、GMAT、Orekit、Tudat、Basilisk、OpenFOAM、SU2、OpenVSP 等工具生态；
- 建立研究情报、工程软件栈、项目雷达、复现实验室和知识库；
- 采用数据驱动结构，核心列表集中在 `src/data/siteContent.js`；
- 图片路径通过 `useBaseUrl` 引用，避免上一版 CSS 静态路径构建错误。

## 高清图片资产

本包包含 6 张原创生成高清图，并已接入页面：

- 首页主视觉
- 工程软件栈
- 项目雷达
- 复现实验室
- 研究情报
- 知识图谱
