import type { ApplicationItem } from './types'

export const applicationScenarios: ApplicationItem[] = [
  {
    id: 'semiconductor',
    index: '01',
    labelEn: 'Semiconductor Manufacturing',
    title: '半导体制造',
    description: '服务晶圆制造过程中的在线检测、表面质量控制与关键量测任务。',
    keywords: ['Wafer', 'Inline', 'Quality Control'],
  },
  {
    id: 'cmp',
    index: '02',
    labelEn: 'CMP Process Control',
    title: 'CMP 工艺控制',
    description: '围绕平坦化过程进行形貌评估、工艺数据分析与效果反馈。',
    keywords: ['CMP', 'Planarization', 'Process'],
  },
  {
    id: 'lithography',
    index: '03',
    labelEn: 'Lithography & Etching',
    title: '光刻与刻蚀',
    description: '支持微纳结构高度、轮廓与关键尺寸检测，适配三维结构量测场景。',
    keywords: ['Lithography', 'Etching', '3D Structure'],
  },
  {
    id: 'research',
    index: '04',
    labelEn: 'Research Metrology',
    title: '科研计量测试',
    description: '面向高校、研究院所与实验室的微观形貌、表面特征与计量验证需求。',
    keywords: ['Research', 'Laboratory', 'Metrology'],
  },
  {
    id: 'display',
    index: '05',
    labelEn: 'Display Manufacturing',
    title: '显示面板制造',
    description: '适配面板制造过程中的表面结构检测与制程质量分析场景。',
    keywords: ['Display', 'Panel', 'Inspection'],
  },
  {
    id: 'industry',
    index: '06',
    labelEn: 'Industrial Precision Inspection',
    title: '工业精密检测',
    description: '覆盖高端制造中的表面质量、轮廓结构与尺寸特征检测需求。',
    keywords: ['Industry', 'Precision', 'Inspection'],
  },
]
