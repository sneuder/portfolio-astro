import { type StackCollectionByCategory } from "./stack";

export interface Project {
  name: string,
  description: string,
  stack: StackCollectionByCategory
}