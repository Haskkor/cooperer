import { User } from './user';

export interface Address {
  country: string,
  id: string,
  postalCode: string,
  suburb: string,
  town: string,
  user: User
}
