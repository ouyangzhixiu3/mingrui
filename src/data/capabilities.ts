import type { ConsoleItem, FeatureItem, StatItem, WorkflowStep } from './types'

export const heroMetrics: StatItem[] = [
  {
    value: '4+',
    label: '核心技术方向',
    description: '覆盖光学测量、运动控制、算法分析与工业软件。',
  },
  {
    value: '5+',
    label: '典型应用场景',
    description: '面向半导体、科研计量与工业精密检测场景。',
  },
  {
    value: '6',
    label: '系统集成模块',
    description: '形成光机电软协同设计与整机系统能力。',
  },
  {
    value: '3D',
    label: '形貌检测能力',
    description: '支持微纳米表面结构与轮廓数据重建分析。',
  },
]

export const heroConsoleItems: ConsoleItem[] = [
  {
    label: 'Scan Status',
    value: 'Running',
    status: 'Online',
  },
  {
    label: 'Resolution',
    value: 'Nano-scale',
    status: 'Ready',
  },
  {
    label: 'Application',
    value: 'Wafer / CMP / 3D Profile',
    status: 'Live',
  },
  {
    label: 'Data Processing',
    value: 'Inline Analysis',
    status: 'Stable',
  },
]

export const strengthHighlights: FeatureItem[] = [
  {
    index: '01',
    title: '高精度测量能力',
    description: '围绕关键尺寸、表面粗糙度、轮廓高度和三维形貌建立稳定可靠的测量能力。',
    tags: ['Precision', 'Repeatability', '3D Reconstruction'],
  },
  {
    index: '02',
    title: '面向工艺场景适配',
    description: '结合晶圆检测、CMP 平坦化、光刻刻蚀等工艺需求进行场景化能力设计。',
    tags: ['Wafer', 'CMP', 'Lithography'],
  },
  {
    index: '03',
    title: '系统工程交付能力',
    description: '从核心模块到整机系统形成光机电软协同设计与工程化交付闭环。',
    tags: ['Optics', 'Motion', 'Software'],
  },
]

export const capabilityModules: FeatureItem[] = [
  {
    eyebrow: 'Optical Metrology',
    title: '光学测量模块',
    description: '面向微观表面、轮廓结构和关键尺寸检测构建稳定的光学测量链路。',
    tags: ['Surface', 'Profile', 'Micro-scale'],
  },
  {
    eyebrow: 'Precision Mechanics',
    title: '精密机械结构',
    description: '通过高刚性结构设计与振动控制提升设备稳定性和长期运行表现。',
    tags: ['Mechanical', 'Rigidity', 'Stability'],
  },
  {
    eyebrow: 'Motion Control',
    title: '运动控制系统',
    description: '支持样品定位、轨迹扫描与多轴协调控制，适配高重复性检测流程。',
    tags: ['Positioning', 'Scanning', 'Control'],
  },
  {
    eyebrow: 'Signal Acquisition',
    title: '信号采集系统',
    description: '围绕传感信号获取、同步传输与噪声控制，保障测量数据完整性。',
    tags: ['Sensors', 'DAQ', 'Synchronization'],
  },
  {
    eyebrow: 'Algorithm Analysis',
    title: '算法分析平台',
    description: '支持形貌重建、特征提取、结果分析与质量评估等核心算法流程。',
    tags: ['Reconstruction', 'Analysis', 'Evaluation'],
  },
  {
    eyebrow: 'Industrial Software',
    title: '工业软件界面',
    description: '提供检测流程配置、数据可视化、报告输出与系统交互界面能力。',
    tags: ['UI', 'Reporting', 'Visualization'],
  },
]

export const aboutHighlights: FeatureItem[] = [
  {
    value: '定位',
    title: '高端精密量测平台',
    description: '聚焦先进制造与科研场景中的关键量测需求，构建专业测量平台。',
  },
  {
    value: '协同',
    title: '光机电软一体化研发',
    description: '通过多学科协同设计提升整机性能、可维护性与工程落地能力。',
  },
  {
    value: '交付',
    title: '面向工艺场景的方案适配',
    description: '根据样品类型、工艺环节与测量目标完成配置与方案建议。',
  },
]

export const serviceProcess: WorkflowStep[] = [
  {
    step: '01',
    title: '需求沟通',
    description: '明确检测对象、工艺环节、量测指标与使用环境等基础条件。',
  },
  {
    step: '02',
    title: '方案评估',
    description: '结合产品方向与技术能力进行适配分析，形成初步解决方案。',
  },
  {
    step: '03',
    title: '技术确认',
    description: '细化系统配置、交付范围、关键指标与数据输出方式。',
  },
  {
    step: '04',
    title: '项目推进',
    description: '进入试用验证、商务对接与后续服务协同阶段。',
  },
]
