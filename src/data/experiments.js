export const experimentCategories = ['全部', '轨道传播', '任务回放', 'GNC闭环', '推进估计', '气动建库', '再入分析', '工具链验证'];

export const experimentCandidates = [
  {
    id: 'tle-orbit-replay', title: 'TLE 轨道传播与任务回放', category: '轨道传播', status: '候选', priority: '高',
    objective: '读取公开 TLE，完成轨道传播、地面站过境计算和 Cesium 轨迹回放。',
    inputs: ['TLE', '地面站经纬度', '传播时间范围'], tools: ['Orekit', 'CesiumJS', 'Python / Jupyter'],
    outputs: ['轨道状态 CSV', '过境窗口', '三维回放页面'], validation: ['与 CelesTrak / STK 结果对照', '检查时间系统和坐标系一致性'],
    archiveTarget: '开源与数据 / 飞行器与任务 / 我的项目'
  },
  {
    id: 'small-launch-ascent', title: '小型运载火箭入轨仿真', category: '推进估计', status: '候选', priority: '高',
    objective: '用公开或估计参数建立简化入轨模型，记录质量、推力、气动和飞行程序假设。',
    inputs: ['质量估计', '推力曲线', '比冲', '目标轨道', '气动假设'], tools: ['RocketCEA', 'GMAT', 'Python / Jupyter'],
    outputs: ['入轨轨迹', '速度/高度曲线', '剩余质量', '误差说明'], validation: ['与公开任务描述、TLE 和低阶估算对照'],
    archiveTarget: '飞行器与任务 / 数据方法 / 我的项目'
  },
  {
    id: 'adcs-closed-loop', title: '卫星姿态控制闭环', category: 'GNC闭环', status: '设计中', priority: '中高',
    objective: '建立刚体姿态动力学、传感器噪声、执行机构限幅和控制律，形成可重复闭环实验。',
    inputs: ['惯量矩阵', '初始姿态', '控制参数', '传感器噪声'], tools: ['Basilisk', 'Simulink', 'Python / Jupyter'],
    outputs: ['姿态误差', '控制力矩', '执行机构饱和记录'], validation: ['检查稳定时间、稳态误差和能量变化'],
    archiveTarget: '知识图谱 / 我的项目'
  },
  {
    id: 'reentry-low-order-aero', title: '再入飞行器气动热初步估计', category: '再入分析', status: '候选', priority: '中',
    objective: '从外形尺寸、初始速度和大气模型估计再入阻力、过载和热流范围。',
    inputs: ['外形尺寸', '质量', '初始状态', '大气模型'], tools: ['OpenVSP', 'SU2', 'OpenFOAM', 'Python / Jupyter'],
    outputs: ['升阻力估计', '热流范围', '轨迹曲线', '假设边界'], validation: ['与论文曲线、教材案例或公开任务剖面对照'],
    archiveTarget: '飞行器与任务 / 知识图谱 / 复现实验'
  }
];

export const validationGates = [
  { id: 'environment', title: '环境可重建', desc: '记录系统、依赖、版本、命令、路径和配置，别人或未来的自己能重新运行。' },
  { id: 'input', title: '输入可追溯', desc: '所有 TLE、参数、论文曲线、公开数据和估计值都标注来源。' },
  { id: 'output', title: '输出可对比', desc: '输出曲线、表格、事件时间、误差和可视化结果可与基准对照。' },
  { id: 'assumption', title: '假设可解释', desc: '把公开事实、工程估计、低阶模型和猜测分开，不能混写。' },
  { id: 'archive', title: '结论可归档', desc: '结论能回答做了什么、为什么可信、误差在哪里、下一步怎么改。' }
];

export const experimentLifecycle = [
  { step: '01', title: '选题', desc: '从情报、工具库、飞行器档案或个人项目中选择一个可复现实验。' },
  { step: '02', title: '建模', desc: '明确状态量、输入输出、动力学模型、约束和简化假设。' },
  { step: '03', title: '运行', desc: '记录命令、脚本、环境、数据和运行日志。' },
  { step: '04', title: '验证', desc: '用公开基准、工具对照、论文曲线或物理一致性检查结果。' },
  { step: '05', title: '归档', desc: '把实验结果沉淀为日志、方法卡片、工具条目或任务案例。' }
];
