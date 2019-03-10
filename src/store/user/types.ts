import { User } from '../../models/user';

export type UserState = {
  user: User;
};

export const SET_USER = 'SET_USER';

type SetUserAction = {
  type: typeof SET_USER;
  user: User;
};

export type UserActionType = SetUserAction;
