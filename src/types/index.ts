export interface NavItem {
  label: string
  href: string
}

export interface Project {
  id: string
  title: string
  tagline: string
  description: string
  fullDescription?: string
  technologies: string[]
  featured?: boolean
  status: 'Production' | 'Active Development' | 'Completed' | 'Research Prototype'
  githubUrl?: string
  liveUrl?: string
  architectureHighlights?: string[]
  metrics?: { label: string; value: string }[]
  previewImage?: string
}

export interface SkillItem {
  name: string
  category: string
  highlight?: boolean
}

export interface SkillCategoryGroup {
  id: string
  name: string
  description: string
  iconName: string
  skills: string[]
}

export interface TimelineEntry {
  id: string
  period: string
  title: string
  subtitle: string
  organization: string
  location?: string
  scoreOrGpa?: string
  description: string[]
  technologies?: string[]
  type: 'education' | 'experience' | 'training'
}

export interface Certificate {
  id: string
  title: string
  issuer: string
  date: string
  credentialUrl?: string
  skills: string[]
}

export interface SocialLink {
  platform: string
  url: string
  icon: string
  handle: string
}
