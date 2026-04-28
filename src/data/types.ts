export interface NavItem {
  label: string
  labelEn: string
  to: string
  cta?: boolean
}

export interface StatItem {
  value: string
  label: string
  description: string
}

export interface ConsoleItem {
  label: string
  value: string
  status?: string
}

export interface FeatureItem {
  eyebrow?: string
  title: string
  description: string
  tags?: string[]
  index?: string
  value?: string
}

export interface ProductItem {
  id: string
  tag: string
  title: string
  description: string
  applications: string[]
  features: string[]
  keywords: string[]
}

export interface ApplicationItem {
  id: string
  index: string
  labelEn: string
  title: string
  description: string
  keywords: string[]
}

export interface WorkflowStep {
  step: string
  title: string
  description: string
}

export interface ContactChannel {
  label: string
  value: string
  description: string
  href?: string
}

export interface HeroContent {
  eyebrow: string
  title: string
  description: string
  chips?: string[]
}
