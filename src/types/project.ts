import { User } from './user';
import { Skill } from './skill';
import { Location } from './location';
import { Category } from './category';

export interface Project {
  categories: Category[];
  comments?: Comment[];
  completionDate?: string;
  creationDate: string;
  description: string;
  id: string;
  likes?: Project[];
  location: Location;
  name: string;
  owner: User;
  participants?: User[];
  photos?: string[];
  skillsNeeded?: Skill[];
  stars?: Project[];
}
