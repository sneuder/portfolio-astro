import { type STACK } from './stack'

export interface Project {
  name: string
  description: string
  stack: STACK[]
  image: string
}
