import { LoadingState } from '../../models/loading-state';

export type ExpensesState = {
  loadingState?: LoadingState;
  error?: string;
  expenses: any[];
  sum?: number;
};

export const GET_EXPENSES_REQUEST = 'GET_EXPENSES_REQUEST';
export const GET_EXPENSES_SUCCESS = 'GET_EXPENSES_SUCCESS';
export const GET_EXPENSES_FAILURE = 'GET_EXPENSES_FAILURE';

type GetExpensesRequestAction = {
  type: typeof GET_EXPENSES_REQUEST;
  payload: {
    loadingState: LoadingState;
  };
};

type GetExpensesSuccessAction = {
  type: typeof GET_EXPENSES_SUCCESS;
  payload: {
    loadingState: LoadingState;
    expenses: any;
    sum: number;
  };
};

type GetExpensesFailureAction = {
  type: typeof GET_EXPENSES_FAILURE;
  payload: {
    loadingState: LoadingState;
    error: string;
  };
};

export type ExpensesActionType =
  | GetExpensesRequestAction
  | GetExpensesSuccessAction
  | GetExpensesFailureAction;
