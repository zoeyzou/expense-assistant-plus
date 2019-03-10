import { Dispatch } from 'redux';
import { loadUser } from '../../utils/api';
import { Loading_Start, ApiActionType, Loading_Success } from '../api/types';
import { UserActionType, SET_USER } from './types';

export const getUserThunk = () => async (
  dispatch: Dispatch<ApiActionType | UserActionType>
) => {
  dispatch({
    type: Loading_Start,
  });
  const user = await loadUser();
  dispatch({
    type: Loading_Success,
  });
  dispatch({
    type: SET_USER,
    user: user,
  });
};
