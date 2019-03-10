import { User } from '../../models/user';
import { LoadingState } from '../../models/loading-state';

export type UserState = {
  loadingState?: LoadingState;
  error?: string;
  user: User;
};

export const GET_USER_REQUEST = 'GET_USER_REQUEST';
export const GET_USER_SUCCESS = 'GET_USER_SUCCESS';
export const GET_USER_FAILURE = 'GET_USER_FAILURE';

type GetUserRequestAction = {
  type: typeof GET_USER_REQUEST;
  payload: {
    loadingState: LoadingState;
  };
};

type GetUserSuccessAction = {
  type: typeof GET_USER_SUCCESS;
  payload: {
    loadingState: LoadingState;
    user: User;
  };
};

type GetUserFailureAction = {
  type: typeof GET_USER_FAILURE;
  payload: {
    loadingState: LoadingState;
    error: string;
  };
};

export type UserActionType =
  | GetUserRequestAction
  | GetUserSuccessAction
  | GetUserFailureAction;
