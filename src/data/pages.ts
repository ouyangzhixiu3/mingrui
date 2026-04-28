import type { FeatureItem, HeroContent } from './types'

export const aboutHero: HeroContent = {
  eyebrow: 'About Mingrui',
  title: '面向先进制造的精密量测与检测平台',
  description:
    '围绕半导体检测、微纳米三维形貌测量与工业精密检测需求，构建兼顾技术深度、系统稳定性与工程交付能力的企业官网表达。',
  chips: ['Semiconductor', 'Metrology', '3D Surface', 'System Integration'],
}

export const aboutOverview = {
  eyebrow: 'Company Profile',
  title: '从核心量测能力到系统工程交付的持续建设',
  paragraphs: [
    '明锐仪器聚焦半导体制造、科研计量与工业精密检测等场景中的关键测量需求，围绕精密仪器、检测平台与系统化方案持续迭代。',
    '团队关注光学测量、精密机械、运动控制、信号采集、算法分析与工业软件之间的协同关系，强调设备的稳定性、可维护性与工程落地能力。',
  ],
}

export const aboutPositioningCards: FeatureItem[] = [
  {
    eyebrow: 'Positioning',
    title: '高端精密量测企业表达',
    description: '通过更克制的深色视觉、更明确的技术分层与更强的场景导向，建立高端设备企业的官网识别度。',
    tags: ['High-end', 'Precision', 'Industrial'],
  },
  {
    eyebrow: 'Engineering',
    title: '光机电软协同设计',
    description: '不把能力表达停留在口号层面，而是拆解到系统模块、流程链路与交付能力上。',
    tags: ['Optics', 'Motion', 'Software'],
  },
  {
    eyebrow: 'Scenarios',
    title: '面向工艺场景的方案适配',
    description: '根据样品类型、工艺环节、测量指标与产线环境构建更贴近实际应用的解决方案表达。',
    tags: ['Wafer', 'CMP', '3D Metrology'],
  },
]

export const aboutOperatingPrinciples: FeatureItem[] = [
  {
    index: '01',
    title: '精度优先',
    description: '关注测量准确性、重复性与结果可追溯性，用更专业的结构承载技术可信度。',
  },
  {
    index: '02',
    title: '场景驱动',
    description: '结合半导体制造、科研测试与工业检测的不同工况定义功能与信息呈现方式。',
  },
  {
    index: '03',
    title: '系统化思维',
    description: '以光机电软协同视角组织内容，强调整机平台能力而不只是单点组件能力。',
  },
]

export const technologyHero: HeroContent = {
  eyebrow: 'Technology System',
  title: '用技术链路而不是概念口号定义核心能力',
  description:
    '从检测对象、精密运动、信号采集到算法分析与工艺反馈，将量测平台拆解为清晰可理解的工程体系。',
  chips: ['Optical Metrology', 'Motion Control', 'Signal Acquisition', 'Algorithm Analysis'],
}

export const technologyArchitecture: FeatureItem[] = [
  {
    index: '01',
    title: '检测对象',
    description: '围绕样品材质、表面结构与测量区域定义检测任务边界与夹持方式。',
  },
  {
    index: '02',
    title: '精密运动平台',
    description: '通过定位、扫描与稳定控制完成检测路径规划和空间位置管理。',
  },
  {
    index: '03',
    title: '测量与采集模块',
    description: '利用光学或传感链路获取信号，保障采集精度、同步性和有效数据质量。',
  },
  {
    index: '04',
    title: '算法分析与反馈',
    description: '完成数据处理、三维重建、报告输出与工艺端的检测结果反馈。',
  },
]

export const productHero: HeroContent = {
  eyebrow: 'Product Matrix',
  title: '围绕半导体工艺与精密检测任务组织产品矩阵',
  description:
    '页面不再只展示孤立的产品卡片，而是通过场景、能力标签、适用对象和技术关键词建立更专业的产品体系。',
  chips: ['Wafer Inspection', 'CMP Metrology', '3D Structure', 'Nano Surface'],
}

export const productSelectionGuides: FeatureItem[] = [
  {
    eyebrow: 'Selection Logic',
    title: '从检测对象反推产品方向',
    description: '根据样品类型、测量区域、结构维度和工艺环节快速定位适配产品方向。',
    tags: ['Sample Type', 'Structure', 'Process'],
  },
  {
    eyebrow: 'Output Focus',
    title: '从结果需求定义能力配置',
    description: '围绕粗糙度、轮廓、高度、关键尺寸和三维形貌等结果需求匹配功能模块。',
    tags: ['Roughness', 'Height', '3D', 'CD'],
  },
  {
    eyebrow: 'Deployment',
    title: '从使用环境判断系统形态',
    description: '结合产线、实验室与科研环境差异，设计更合理的设备布局与交互方式。',
    tags: ['Inline', 'Lab', 'Research'],
  },
]

export const contactHero: HeroContent = {
  eyebrow: 'Contact & Consulting',
  title: '围绕真实检测任务进行产品与方案沟通',
  description:
    '建议在沟通时提供检测对象、工艺环节、测量指标、产线或实验环境等信息，以便更快完成方案匹配。',
  chips: ['Sample Type', 'Process Step', 'Measurement Target', 'Deployment Environment'],
}

export const contactSupportHighlights: FeatureItem[] = [
  {
    eyebrow: 'Consulting',
    title: '产品选型与方案建议',
    description: '根据应用场景、测量目标与使用方式，对产品方向与系统能力进行初步匹配。',
  },
  {
    eyebrow: 'Technical Review',
    title: '技术指标沟通',
    description: '围绕测量精度、重复性、结构特征、数据输出方式与环境条件做进一步确认。',
  },
  {
    eyebrow: 'Project Planning',
    title: '项目推进与交付协同',
    description: '在需求明确后进入方案细化、试用验证、商务对接与后续服务衔接流程。',
  },
]

export const contactFormOptions = [
  '产品咨询',
  '技术方案沟通',
  '工艺应用评估',
  '商务合作',
  '售后与服务',
]

export const contactPreparationNotes = [
  '检测对象类型',
  '工艺环节说明',
  '目标测量指标',
  '现有设备与环境',
]
