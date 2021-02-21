import { Project } from './project';
import { User } from './user';

export interface Skill {
  description: string,
  id: string,
  name: string,
  proficiency: string,
  projects?: Project[],
  users?: User[]
}
