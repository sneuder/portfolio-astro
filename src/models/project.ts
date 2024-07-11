import { type STACK } from './stack'

export enum ProjectType {
  SASS = "SASS",
  PACKAGE = "Package",
  TOOL = "Tool"
}

export interface Project {
  name: string
  description: string
  stack: STACK[]
  image: string,
  type: ProjectType
}
