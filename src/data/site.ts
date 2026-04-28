import type { ContactChannel, NavItem } from './types'

export const companyProfile = {
  name: '深圳明锐仪器有限公司',
  nameEn: 'Mingrui Instruments',
  tagline: 'Semiconductor Metrology Systems',
  summary:
    '聚焦半导体精密量测、微纳米三维形貌检测与光机电软系统集成，为先进制造、科研计量与工业检测场景提供高稳定性测量平台与解决方案。',
}

export const navItems: NavItem[] = [
  {
    label: '首页',
    labelEn: 'Home',
    to: '/',
  },
  {
    label: '关于明锐',
    labelEn: 'About',
    to: '/about',
  },
  {
    label: '核心技术',
    labelEn: 'Technology',
    to: '/technology',
  },
  {
    label: '产品中心',
    labelEn: 'Products',
    to: '/products',
  },
  {
    label: '方案咨询',
    labelEn: 'Contact',
    to: '/contact',
    cta: true,
  },
]

export const footerScenarioLinks = [
  '半导体制造',
  'CMP 工艺控制',
  '光刻与刻蚀',
  '微纳米三维形貌',
  '科研计量测试',
  '工业精密检测',
]

export const contactChannels: ContactChannel[] = [
  {
    label: '业务咨询邮箱',
    value: 'contact@mingrui-instruments.com',
    description: '适用于产品选型、方案沟通与合作咨询。',
    href: 'mailto:contact@mingrui-instruments.com',
  },
  {
    label: '服务区域',
    value: '中国深圳',
    description: '立足粤港澳大湾区，面向先进制造与科研场景。',
  },
  {
    label: '沟通重点',
    value: '样品类型 / 工艺环节 / 测量指标',
    description: '建议提供检测对象、精度要求与产线环境信息。',
  },
]
