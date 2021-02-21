import { Project } from './project';
import { Skill } from './skill';
import { Address } from './address';

export interface User {
  address: Address,
  description?: string
  email: string,
  id: string,
  projectsCoop?: Project[],
  projectsLiked?: Project[],
  projectsOwned?: Project[],
  projectsStared?: Project[],
  skills?: Skill[],
  userName: string
}

