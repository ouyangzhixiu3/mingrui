import type { FeatureItem, ProductItem } from './types'

export const products: ProductItem[] = [
  {
    id: 'wafer-inspection',
    tag: 'Wafer Inspection',
    title: '晶圆表面检测系统',
    description:
      '面向晶圆制造过程中的表面质量控制、粗糙度分析与微观形貌评估，支持关键区域精密测量。',
    applications: ['半导体制造', '晶圆表面质量控制'],
    features: ['表面粗糙度检测', '微观缺陷分析', '形貌数据采集', '质量评估输出'],
    keywords: ['Wafer', 'Surface', 'Inspection', 'Metrology'],
  },
  {
    id: 'cmp-metrology',
    tag: 'CMP Metrology',
    title: 'CMP 工艺量测设备',
    description:
      '围绕化学机械抛光过程中的平坦化效果评估、轮廓变化分析与工艺稳定性监测提供量测支持。',
    applications: ['CMP 工艺控制', '平坦化过程评估'],
    features: ['轮廓形貌测量', '平坦化效果评估', '工艺过程分析', '检测报告输出'],
    keywords: ['CMP', 'Planarization', 'Profile', 'Analysis'],
  },
  {
    id: '3d-metrology',
    tag: '3D Structure',
    title: '三维结构量测系统',
    description:
      '针对光刻、刻蚀等关键工艺中的微纳三维结构检测需求，支持高度、轮廓和关键尺寸分析。',
    applications: ['光刻与刻蚀', '三维结构检测'],
    features: ['三维形貌重建', '关键尺寸分析', '结构轮廓检测', '工艺质量评估'],
    keywords: ['Lithography', 'Etching', '3D', 'Critical Dimension'],
  },
  {
    id: 'nano-surface',
    tag: 'Nano Surface',
    title: '微纳米形貌检测平台',
    description:
      '适配科研院所、实验室与精密制造场景，对微纳尺度表面结构与形貌特征进行数据分析。',
    applications: ['科研计量测试', '工业精密检测'],
    features: ['微纳结构检测', '表面形貌分析', '科研测试支持', '结果可视化输出'],
    keywords: ['Nano', 'Surface', 'Research', 'Visualization'],
  },
]

export const productAdvantages: FeatureItem[] = [
  {
    index: '01',
    title: '高精度量测',
    description: '关注关键尺寸、轮廓高度与表面微观特征的可靠测量输出。',
    tags: ['Accuracy', 'Profile', 'Surface'],
  },
  {
    index: '02',
    title: '高稳定运行',
    description: '支持长时间测试与重复测量场景，提升工业现场适配能力。',
    tags: ['Stability', 'Repeatability', 'Runtime'],
  },
  {
    index: '03',
    title: '系统集成设计',
    description: '融合光机电软与数据分析模块，形成完整设备与平台能力。',
    tags: ['Optics', 'Control', 'Software'],
  },
  {
    index: '04',
    title: '场景化配置',
    description: '根据工艺环节、样品类型与检测目标进行配置适配与方案扩展。',
    tags: ['Scenario', 'Configuration', 'Customization'],
  },
]
