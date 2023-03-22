import { NewUser } from '../../model';

export interface UserSlice {
  user: NewUser;
  users: {}[];
  addUser: (user: {}) => void;
}
