export const labImages = {
  hero: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663685306936/Y7FZqsoqWAdBfk4uFUGt86/orbital-mechanics-Z4xfALucPGCDkxdQjgUArX.webp',
  space: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663685306936/Y7FZqsoqWAdBfk4uFUGt86/hero-space-bg-YHvkmpNxSVxNCCu23TdtPX.webp',
  orbit: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663685306936/Y7FZqsoqWAdBfk4uFUGt86/orbital-mechanics-Z4xfALucPGCDkxdQjgUArX.webp',
  control: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663685306936/Y7FZqsoqWAdBfk4uFUGt86/mission-control-aNWcsXgkGpMWjmbyo7cWWr.webp',
  data: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663685306936/Y7FZqsoqWAdBfk4uFUGt86/simulation-data-4VYVML2wbibR3BeBfBkwQh.webp',
};

export const quickAccess = [
  { title: 'Frontier Intelligence', cn: '前沿情报', href: '/intelligence', code: 'FR' },
  { title: 'Vehicles & Missions', cn: '飞行器与任务', href: '/missions', code: 'VM' },
  { title: 'Tool Library', cn: '工具库', href: '/tools', code: 'TL' },
  { title: 'Open Source & Data', cn: '开源与数据', href: '/open-source-data', code: 'OD' },
];

export const latestUpdates = [
  { date: '05-25', title: '重构航天仿真研究站视觉系统', type: '设计' },
  { date: '05-24', title: '整理轨道任务分析工具链：STK / GMAT / Orekit / Tudat', type: '工具' },
  { date: '05-22', title: '建立公开数据与参数推断方法入口', type: '数据' },
  { date: '05-21', title: '筛选可复现开源项目：Basilisk / Open MCT / cFS', type: '项目' },
];

export const missionStats = [
  { label: '研究状态', value: '持续维护中' },
  { label: '轨道仿真', value: 'LEO · 400KM' },
  { label: '参考速度', value: '7.67 KM/S' },
  { label: '数据链路', value: '公开 / 估计' },
  { label: '系统状态', value: '正常运行' },
];

export const featuredProjects = [
  { title: 'Orbital Dynamics Stack', cn: '轨道动力学工具链', image: labImages.orbit, tags: ['GMAT', 'Orekit', 'Tudat'], desc: '用商业工具和开源库交叉验证轨道传播、转移窗口、事件探测与覆盖分析。' },
  { title: 'AeroSim CFD', cn: '再入与气动仿真', image: labImages.space, tags: ['OpenVSP', 'SU2', 'OpenFOAM'], desc: '从公开外形、低阶气动模型到 CFD 可视化，建立可解释的气动数据路径。' },
  { title: 'Mission Control Data', cn: '任务控制与遥测', image: labImages.control, tags: ['Open MCT', 'Cesium', 'UE'], desc: '把仿真输出变成任务控制视角的遥测、轨迹、事件和结论回放。' },
  { title: 'Data Inference Lab', cn: '公开数据推断实验室', image: labImages.data, tags: ['TLE', '新闻线索', '论文'], desc: '公开数据不足时，严格区分事实、假设、反推参数和不确定性。' },
];

export const missionDossiers = [
  { title: 'Launch Vehicle Ascent', cn: '小型运载火箭入轨仿真', image: labImages.space, phase: '发射入轨', tags: ['六自由度', '推进', '轨迹'], desc: '从质量估计、发动机参数、推力曲线、飞行程序、重力转弯、气动阻力到入轨误差，建立一条可复现实验链。', data: ['公开发射新闻', '发动机参数', '轨道目标', 'TLE 对照'], tools: ['RocketCEA', 'GMAT', 'Python', 'Cesium'] },
  { title: 'LEO Constellation Coverage', cn: '低轨星座覆盖与通信窗口', image: labImages.orbit, phase: '轨道覆盖', tags: ['覆盖分析', '访问窗口', 'TLE'], desc: '用轨道面、相位、覆盖率、通信窗口、载荷视场和任务效能，把 STK / Orekit / Cesium 的结果放在同一套验证逻辑里。', data: ['TLE', '目标区域', '载荷视场', '链路窗口'], tools: ['STK', 'Orekit', 'CesiumJS', 'Python'] },
  { title: 'Lunar Descent Profile', cn: '月球软着陆任务剖面', image: labImages.control, phase: '月面着陆', tags: ['GNC', '制导', '着陆'], desc: '围绕近月制动、动力下降、速度高度剖面、着陆点误差和推力余量，构建任务分析与控制律验证案例。', data: ['任务论文', '下降曲线', '引力模型', '终端约束'], tools: ['Basilisk', 'Simulink', 'GMAT', 'Python'] },
  { title: 'Reentry Aero-Thermal Corridor', cn: '再入飞行器气动热环境', image: labImages.data, phase: '再入热环境', tags: ['CFD', '气动', '热流'], desc: '从外形、速度高度走廊、攻角范围和低阶气动数据库出发，用 CFD 与经验方法建立再入热环境初始模型。', data: ['外形尺寸', '马赫数范围', '论文曲线', '经验公式'], tools: ['OpenVSP', 'SU2', 'OpenFOAM', 'ParaView'] },
];

export const researchDomains = [
  { name: '轨道与任务分析', text: '轨道传播、摄动、转移、覆盖、通信窗口和任务剖面。' },
  { name: 'GNC / ADCS', text: '制导、导航、控制、姿态确定、执行机构和闭环验证。' },
  { name: '推进与动力系统', text: '推力曲线、质量流率、比冲、CEA 和系统级性能估计。' },
  { name: '气动 / CFD / 再入', text: '外形建模、低阶气动数据库、CFD、热环境与再入走廊。' },
  { name: '工程软件与开源项目', text: 'STK、GMAT、Orekit、Tudat、Basilisk、SU2、Open MCT 等。' },
  { name: '数据与参数推断', text: '从公开资料、论文图表、新闻、TLE 和任务页面建立可追溯参数。' },
];

export const methodCards = [
  { title: '从公开发射新闻反推轨道约束', meta: '发射新闻 → 轨道估计', text: '用发射场、目标高度、倾角、卫星批次、TLE 和任务描述估计仿真初始条件。' },
  { title: '从发动机公开参数建立推进模型', meta: '推力 / 比冲 → 质量流率', text: '用推力、比冲、推进剂类型、燃烧时间和级间质量估计推力曲线与不确定性。' },
  { title: '从外形与尺寸建立气动初值', meta: '几何外形 → 气动数据库', text: '用 OpenVSP / DATCOM / CFD 生成初始 CL、CD、Cm 数据库并标注适用范围。' },
  { title: '从论文曲线提取验证门限', meta: '论文图表 → 验证门限', text: '把论文图表、误差、终端约束转为可复现实验指标，而不是只摘录文字。' },
];