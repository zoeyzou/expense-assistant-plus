import { PageInfoState, PageInfoActionType } from './types';

const initialState: PageInfoState = {
  page: 1,
  pageLimit: 10,
};

export const pageInfoReducer = (
  state = initialState,
  action: PageInfoActionType
) => {
  switch (action.type) {
    case 'SET_PAGE':
      return {
        ...state,
        ...{ page: action.payload.page },
      };
    case 'SET_PAGE_LIMIT':
      return {
        ...state,
        ...{ pageLimit: action.payload.pageLimit },
      };
    default:
      return state;
  }
};
