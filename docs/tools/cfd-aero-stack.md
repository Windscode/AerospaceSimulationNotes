# CFD & Aerodynamics Tool Stack

实时仿真通常不直接运行 CFD，而是使用 CFD、风洞、经验方法和公开资料离线生成气动数据库。

## 工具分层

| 层级 | 工具 |
|---|---|
| 商业高保真 CFD | Ansys Fluent/CFX, Simcenter STAR-CCM+ |
| 开源 CFD / 优化 | SU2, OpenFOAM |
| 几何与初步气动 | OpenVSP, VSPAERO |
| 经验估算 | Digital DATCOM |
| 数据后处理 | ParaView, Python |

## 气动数据库条目必须记录

- 坐标系定义。
- 参考面积、参考长度、参考点。
- 马赫数、攻角、侧滑角范围。
- 插值方式。
- 来源：CFD / 风洞 / 经验公式 / 公开数据。
- 可用边界和失效边界。
