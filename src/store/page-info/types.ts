export type PageInfoState = {
  page: number;
  pageLimit: number;
};

export const SET_PAGE = 'SET_PAGE';
export const SET_PAGE_LIMIT = 'SET_PAGE_LIMIT';

type SetPageAction = {
  type: typeof SET_PAGE;
  payload: {
    page: number;
  };
};

type SetPageLimitAction = {
  type: typeof SET_PAGE_LIMIT;
  payload: {
    pageLimit: number;
  };
};

export type PageInfoActionType = SetPageAction | SetPageLimitAction;
