import { type STACK } from './stack'

export enum ProjectType {
  SASS = 'SASS',
  PACKAGE = 'Package',
  TOOL = 'Tool',
  PROPOSAL = 'Proposal',
}

export enum ProjectLevel {
  PRIMARY = 'PRIMARY',
  SECONDARY = 'SECONDARY',
}

export enum ProjectLinkType {
  GIT_HUB = 'GIT_HUB',
  WEB = 'WEB',
}

export interface ProjectLink {
  type: ProjectLinkType
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
