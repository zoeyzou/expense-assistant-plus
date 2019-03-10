import {
  ApiState,
  ApiActionType,
  Loading_Start,
  Loading_Success,
  Loading_Failure,
} from './types';

let id: number = 0;

const initialState: ApiState = {
  fetches: [],
};

export const apiReducer = (
  state = initialState,
  action: ApiActionType
): ApiState => {
  switch (action.type) {
    case Loading_Start:
      return {
        fetches: [
          ...state.fetches,
          {
            id: ++id,
            loadingState: 'pending',
          },
        ],
      };
    case Loading_Success:
      return {
        fetches: [
          ...state.fetches,
          {
            id: ++id,
            loadingState: 'success',
            // data: action.data,
          },
        ],
      };
    case Loading_Failure:
      return {
        fetches: [
          ...state.fetches,
          {
            id: ++id,
            loadingState: 'fail',
            data: action.payload.data,
          },
        ],
      };
    default:
      return state;
  }
};
