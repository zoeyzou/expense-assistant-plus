import { LoadingState } from '../../models/loading-state';
import { Expense } from 'src/models/expense';

export type ExpenseState = {
  currentExpenseId?: string;
  loadingState?: LoadingState;
  expense?: Expense;
  comment?: string;
  file?: any;
};

export const SET_CURRENT_EXPENSE_ID = 'SET_CURRENT_EXPENSE_ID';
export const SET_COMMENT = 'SET_COMMENT';
export const SET_FILE = 'SET_FILE';
export const GET_EXPENSE_REQUEST = 'GET_EXPENSE_REQUEST';
export const GET_EXPENSE_SUCCESS = 'GET_EXPENSE_SUCCESS';
export const GET_EXPENSE_FAILURE = 'GET_EXPENSE_FAILURE';
export const SAVE_EXPENSE_REQUEST = 'SAVE_EXPENSE_REQUEST';
export const SAVE_EXPENSE_SUCCESS = 'SAVE_EXPENSE_SUCCESS';
export const SAVE_EXPENSE_FAILURE = 'SAVE_EXPENSE_FAILURE';

type SetCurrentExpenseIdAction = {
  type: typeof SET_CURRENT_EXPENSE_ID;
  payload: {
    id: string;
  };
};

type SetCommentAction = {
  type: typeof SET_COMMENT;
  payload: {
    comment: string;
  };
};

type SetFileAction = {
  type: typeof SET_FILE;
  payload: {
    file: any;
  };
};

type GetExpenseRequestAction = {
  type: typeof GET_EXPENSE_REQUEST;
  payload: {
    loadingState: LoadingState;
  };
};

type GetExpenseSuccessAction = {
  type: typeof GET_EXPENSE_SUCCESS;
  payload: {
    loadingState: LoadingState;
    expense: Expense;
  };
};

type GetExpenseFailureAction = {
  type: typeof GET_EXPENSE_FAILURE;
  payload: {
    loadingState: LoadingState;
    error: string;
  };
};

type SaveExpenseRequestAction = {
  type: typeof SAVE_EXPENSE_REQUEST;
  payload: {
    loadingState: LoadingState;
  };
};

type SaveExpenseSuccessAction = {
  type: typeof SAVE_EXPENSE_SUCCESS;
  payload: {
    loadingState: LoadingState;
    expense: Expense;
  };
};

type SaveExpenseFailureAction = {
  type: typeof SAVE_EXPENSE_FAILURE;
  payload: {
    loadingState: LoadingState;
    error: string;
  };
};

export type ExpenseActionType =
  | SetCommentAction
  | SetFileAction
  | SetCurrentExpenseIdAction
  | GetExpenseRequestAction
  | GetExpenseSuccessAction
  | GetExpenseFailureAction
  | SaveExpenseRequestAction
  | SaveExpenseSuccessAction
  | SaveExpenseFailureAction;
