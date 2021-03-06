import { Dispatch } from 'redux';
import {
  ExpensesActionType,
  GET_EXPENSES_REQUEST,
  GET_EXPENSES_SUCCESS,
  GET_EXPENSES_FAILURE,
} from './types';
import { loadExpenses } from 'src/utils/api';
import { ExpenseList } from 'src/models/expense';

export const getExpensesThunk = (pageLimit: number, page: number) => (
  dispatch: Dispatch<ExpensesActionType>
) => {
  dispatch({
    type: GET_EXPENSES_REQUEST,
    payload: {
      loadingState: 'pending',
    },
  });

  const offset = pageLimit * (page - 1);

  loadExpenses(pageLimit, offset)
    .then((expenses: ExpenseList) => {
      dispatch({
        type: GET_EXPENSES_SUCCESS,
        payload: {
          loadingState: 'success',
          expenses: expenses.expenses,
          sum: expenses.total,
        },
      });
    })
    .catch((err: any) => {
      dispatch({
        type: GET_EXPENSES_FAILURE,
        payload: {
          loadingState: 'failure',
          error: err.message,
        },
      });
    });
};
