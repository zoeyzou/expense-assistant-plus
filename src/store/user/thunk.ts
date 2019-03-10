import { Dispatch } from 'redux';
import { loadUser } from '../../utils/api';
import { UserActionType, GET_USER_REQUEST, GET_USER_SUCCESS } from './types';

export const getUserThunk = () => async (
  dispatch: Dispatch<UserActionType>
) => {
  dispatch({
    type: GET_USER_REQUEST,
    payload: {
      loadingState: 'pending',
    },
  });
  const user = await loadUser();
  dispatch({
    type: GET_USER_SUCCESS,
    payload: {
      loadingState: 'success',
      user: user,
    },
  });
};
