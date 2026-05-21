# MATLAB / Simulink / Stateflow

MATLAB / Simulink 在航天仿真中不是普通“数学软件”，而是控制系统设计、模型在环、飞控律验证、算法原型和工程数据处理的核心平台之一。

## 站内定位

| 维度 | 说明 |
|---|---|
| 类别 | GNC & System Modeling |
| 成熟度 | Industry Standard |
| 典型用途 | 控制律设计、飞控逻辑、模型在环、代码生成前验证 |
| 相关扩展 | Aerospace Blockset, Stateflow, Simscape, Control System Toolbox |
| 替代/补充 | Python, Julia, Basilisk, Orekit/Tudat for astrodynamics |

## 重点关注

- Simulink 是否用于闭环控制仿真。
- Stateflow 是否用于任务阶段、故障逻辑和模式转换。
- Aerospace Blockset 是否用于环境、坐标系和飞行动力学组件。
- 与 C++/Python 仿真核心的数据接口如何定义。

## 站内后续工作

- 建立 GNC 控制律复现实验模板。
- 记录 MATLAB 与 Python/C++ 混合流程。
- 建立模型在环、软件在环和硬件在环概念页。
