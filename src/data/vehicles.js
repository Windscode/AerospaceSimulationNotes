export const vehicleCategories = ['全部', '运载火箭', '可重复使用火箭', '卫星', '星座', '空间站', '探测器', '再入飞行器', '载人飞船'];

export const vehicles = [
  {
    id: 'generic-small-launcher', title: '小型运载火箭', category: '运载火箭', country: '多国', organization: '商业航天 / 科研机构', status: '案例模板', firstFlight: '不指定',
    summary: '用于研究从公开质量、推力、气动和飞行程序估计入轨能力的通用任务对象。',
    keyParameters: ['级数', '起飞质量', '推力曲线', '比冲', '气动阻力', '目标轨道'],
    subsystems: ['推进', '结构', '气动', 'GNC', '级间分离', '遥测'],
    publicData: ['发射新闻', '任务页面', '公开图片', 'TLE', '论文/报告'],
    inferredParameters: ['质量分配', '阻力系数', '飞行程序', '燃烧时间'],
    simulationTopics: ['入轨轨迹', '推力曲线估计', '质量模型', '气动阻力', 'Monte Carlo 散布'],
    tools: ['RocketCEA', 'GMAT', 'Python / Jupyter', 'OpenVSP'], confidence: '中'
  },
  {
    id: 'leo-satellite', title: '低轨卫星', category: '卫星', country: '多国', organization: '商业 / 科研 / 政府', status: '通用对象', firstFlight: '长期存在',
    summary: '用于研究 TLE 传播、地面站过境、姿态控制、通信窗口和任务效能的典型对象。',
    keyParameters: ['轨道高度', '倾角', '质量', '功率', '载荷视场', '姿态约束'],
    subsystems: ['轨道', '姿态', '电源', '热控', '通信', '载荷'],
    publicData: ['TLE', '任务介绍', '公开图像', '载荷说明'],
    inferredParameters: ['载荷视场', '姿态策略', '通信链路简化参数'],
    simulationTopics: ['轨道传播', '覆盖分析', '通信窗口', '姿态控制', '热控初步估算'],
    tools: ['Orekit', 'STK', 'CesiumJS', 'Basilisk'], confidence: '中高'
  },
  {
    id: 'leo-constellation', title: '低轨星座', category: '星座', country: '多国', organization: '商业星座 / 机构星座', status: '现役 / 建设中', firstFlight: '任务相关',
    summary: '适合研究星座构型、覆盖率、访问窗口、相位部署和可视化任务回放。',
    keyParameters: ['轨道面数量', '相位', '卫星数量', '高度', '倾角', '链路约束'],
    subsystems: ['轨道设计', '通信', '载荷', '星间链路', '地面站'],
    publicData: ['TLE', 'FCC/ITU 文件', '发射批次', '新闻报道'],
    inferredParameters: ['构型补全', '星间链路假设', '载荷视场'],
    simulationTopics: ['覆盖分析', '访问窗口', '部署过程', '星座可视化'],
    tools: ['STK', 'Orekit', 'CesiumJS', 'Python / Jupyter'], confidence: '中'
  },
  {
    id: 'lunar-lander', title: '月球着陆器', category: '探测器', country: '多国', organization: '探月任务', status: '任务案例', firstFlight: '任务相关',
    summary: '用于研究近月制动、下降制导、速度高度剖面、着陆误差和推力余量。',
    keyParameters: ['质量', '推力', '比冲', '初始轨道', '目标着陆点', '终端约束'],
    subsystems: ['推进', 'GNC', '着陆机构', '导航传感器', '通信'],
    publicData: ['任务论文', '任务页面', '公开轨道/事件时间', '图像资料'],
    inferredParameters: ['下降制导律', '推力余量', '质量消耗', '误差预算'],
    simulationTopics: ['近月制动', '下降段制导', '软着陆剖面', 'Monte Carlo'],
    tools: ['GMAT', 'Basilisk', 'Simulink', 'Python / Jupyter'], confidence: '中'
  },
  {
    id: 'reentry-capsule', title: '再入飞行器', category: '再入飞行器', country: '多国', organization: '载人/返回任务', status: '任务案例', firstFlight: '任务相关',
    summary: '用于研究再入轨迹、气动热、制导、过载、热防护和落点散布。',
    keyParameters: ['弹道系数', '升阻比', '初始速度', '初始高度', '气动数据库', '热防护参数'],
    subsystems: ['气动', '热防护', 'GNC', '结构', '降落伞/回收'],
    publicData: ['外形图片', '任务剖面', '论文曲线', '公开尺寸'],
    inferredParameters: ['气动系数', '热流范围', '质量特性', '控制律'],
    simulationTopics: ['再入轨迹', '气动热环境', '过载分析', '落点散布'],
    tools: ['OpenVSP', 'SU2', 'OpenFOAM', 'Python / Jupyter'], confidence: '低中'
  }
];
