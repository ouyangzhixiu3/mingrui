import type { FeatureItem, WorkflowStep } from './types'

export const technologyPillars: FeatureItem[] = [
  {
    eyebrow: 'Nano Profiling',
    title: '微纳米三维形貌测量',
    description: '面向复杂表面、微观结构与轮廓变化建立三维形貌重建与分析能力。',
    tags: ['3D', 'Surface', 'Profile'],
  },
  {
    eyebrow: 'Process Metrology',
    title: '半导体工艺量测',
    description: '服务晶圆检测、CMP 平坦化、光刻与刻蚀等关键工艺环节的过程量测需求。',
    tags: ['Wafer', 'CMP', 'Etching'],
  },
  {
    eyebrow: 'Integrated Control',
    title: '信号与运动协同控制',
    description: '通过多轴控制、同步采集与误差补偿提升测量重复性与系统稳定性。',
    tags: ['Control', 'Sync', 'Compensation'],
  },
  {
    eyebrow: 'Algorithm Platform',
    title: '算法与数据分析',
    description: '围绕数据清洗、形貌重建、特征提取与检测报告生成建立分析平台。',
    tags: ['Data', 'Reconstruction', 'Report'],
  },
]

export const workflowSteps: WorkflowStep[] = [
  {
    step: '01',
    title: '检测对象与样品定位',
    description: '围绕样品类型、结构特征与测量范围建立定位与装夹策略。',
  },
  {
    step: '02',
    title: '精密运动与信号采集',
    description: '通过扫描路径控制与稳定采集链路获取有效测量数据。',
  },
  {
    step: '03',
    title: '算法分析与三维重建',
    description: '对原始信号进行特征处理、三维重建与质量评估分析。',
  },
  {
    step: '04',
    title: '结果输出与工艺反馈',
    description: '形成数据报告、图形可视化与面向工艺控制的反馈结果。',
  },
]
