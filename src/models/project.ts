import type { ICONS } from '@/constants/Icon'
import { type STACK } from './stack'

export enum ProjectType {
  SASS = 'SASS',
  PACKAGE = 'Package',
  TOOL = 'Tool',
  PROPOSAL = 'Proposal',
  CLI = 'CLI',
}

export enum ProjectLevel {
  PRIMARY = 'PRIMARY',
  SECONDARY = 'SECONDARY',
}

export interface ProjectLink {
  icon: ICONS
  href: string
}

export interface Project {
  name: string
  description: string
  stack: STACK[]
  image: string
  type: ProjectType
  links: ProjectLink[]
  level: ProjectLevel
  localLink: string
}
