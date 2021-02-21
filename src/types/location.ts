import { Project } from './project';

export interface Location {
  country: string,
  id: string,
  postalCode: string,
  project: Project,
  suburb: string,
  town: string
}
