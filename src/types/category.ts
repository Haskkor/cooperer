import { Project } from './project';

export interface Category {
  description: string,
  id: string,
  image?: string,
  name: string,
  projects?: Project[]
}

