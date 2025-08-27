// Personal information types
export interface PersonalInfo {
  name: string
  title: string
  bio: string
  tagline: string
  location: string
  email: string
  image: string
}

// Work experience types
export interface Experience {
  id: string
  company: string
  role: string
  period: string
  location: string
  description: string[]
  technologies: string[]
  image: string
  achievements?: string[]
}

// Project types
export interface Project {
  id: string
  title: string
  description: string
  longDescription?: string
  technologies: string[]
  githubUrl: string
  liveUrl?: string
  image?: string
  featured: boolean
  category: 'data-science' | 'automation' | 'web' | 'ai' | 'cryptography' | 'other'
}

// Social links
export interface SocialLink {
  platform: string
  url: string
  icon: string
  label: string
}

// Contact information
export interface ContactInfo {
  email: string
  phone?: string
  location: string
  socialLinks: SocialLink[]
  calendlyUrl?: string
  resumeUrl: string
}

// Navigation types
export interface NavItem {
  label: string
  href: string
  subItems?: NavItem[]
}

// Theme types
export type Theme = 'light' | 'dark' | 'system'

// Animation types
export interface AnimationConfig {
  duration: number
  easing: string
  delay?: number
}