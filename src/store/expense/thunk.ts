import { Dispatch } from 'redux';
import {
  ExpenseActionType,
  GET_EXPENSE_REQUEST,
  GET_EXPENSE_SUCCESS,
  GET_EXPENSE_FAILURE,
  SAVE_EXPENSE_REQUEST,
  SAVE_EXPENSE_SUCCESS,
  SAVE_EXPENSE_FAILURE,
} from './types';
import { loadExpenseById, saveComment, saveReceipt } from 'src/utils/api';
import { Expense } from 'src/models/expense';

export const getExpenseThunk = (id: string) => (
  dispatch: Dispatch<ExpenseActionType>
) => {
  dispatch({
    type: GET_EXPENSE_REQUEST,
    payload: {
      loadingState: 'pending',
    },
  });

  loadExpenseById(id)
    .then((expense: Expense) => {
      dispatch({
        type: GET_EXPENSE_SUCCESS,
        payload: {
          loadingState: 'success',
          expense: expense,
        },
      });
    })
    .catch((err: any) => {
      dispatch({
        type: GET_EXPENSE_FAILURE,
        payload: {
          loadingState: 'failure',
          error: err.message,
        },
      });
    });
};

export const saveCommentThunk = (id: string, comment: string) => (
  dispatch: Dispatch<ExpenseActionType>
) => {
  dispatch({
    type: SAVE_EXPENSE_REQUEST,
    payload: {
      loadingState: 'pending',
    },
  });

  saveComment(id, comment)
    .then((expense: Expense) => {
      dispatch({
        type: SAVE_EXPENSE_SUCCESS,
        payload: {
          loadingState: 'success',
          expense: expense,
        },
      });
    })
    .catch((err: any) => {
      dispatch({
        type: SAVE_EXPENSE_FAILURE,
        payload: {
          loadingState: 'failure',
          error: err.message,
        },
      });
    });
};

export const saveFileThunk = (id: string, file: any) => (
  dispatch: Dispatch<ExpenseActionType>
) => {
  dispatch({
    type: SAVE_EXPENSE_REQUEST,
    payload: {
      loadingState: 'pending',
    },
  });

  saveReceipt(id, file)
    .then((expense: Expense) => {
      dispatch({
        type: SAVE_EXPENSE_SUCCESS,
        payload: {
          loadingState: 'success',
          expense: expense,
        },
      });
    })
    .catch((err: any) => {
      dispatch({
        type: SAVE_EXPENSE_FAILURE,
        payload: {
          loadingState: 'failure',
          error: err,
        },
      });
    });
};
