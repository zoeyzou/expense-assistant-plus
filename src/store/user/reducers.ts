import { UserState, UserActionType, SET_USER } from './types';

const initialState: UserState = {
  user: { name: '' },
};

export const userReducer = (
  state = initialState,
  action: UserActionType
): UserState => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        ...{ user: action.user },
      };
    default:
      return state;
  }
};
