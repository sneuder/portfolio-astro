import type { StackCollectionByCategory } from "./stack"

export enum Position {
  SD = "Software Developer",
  FSD = "Full Stack Developer",
  FD = "Frontend Developer",
  BD = "Backend Developer"
}

export interface Positon {
  name: Position,
  from: Date,
  to: Date,
  responsabilities: Responsabilies[]
}

export interface Responsabilies {
  description: string
}

export interface Experience {
  companyName: string,
  currentPosition: Positon
  oldPositions: Positon[],
  generalDescription: string,
  mainStack: StackCollectionByCategory,
  allStack: StackCollectionByCategory
}
