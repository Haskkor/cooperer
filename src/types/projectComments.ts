import { Project } from './project';
import { User } from './user';

export interface ProjectComment {
  content: string;
  id: string;
  project: Project;
  title: string;
  user: User;
}
