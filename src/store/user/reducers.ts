import { UserState, UserActionType } from './types';

const initialState: UserState = {
  user: { name: '' },
};

export const userReducer = (
  state = initialState,
  action: UserActionType
): UserState => {
  switch (action.type) {
    case 'GET_USER_REQUEST':
      return {
        ...state,
        ...{ loadingState: 'pending' },
      };
    case 'GET_USER_SUCCESS':
      return {
        ...state,
        ...{ loadingState: 'success', user: action.payload.user },
      };
    case 'GET_USER_FAILURE':
      return {
        ...state,
        ...{ loadingState: 'failure', error: action.payload.error },
      };
    default:
      return state;
  }
};
