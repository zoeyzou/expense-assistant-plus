import { ExpenseState, ExpenseActionType } from './types';

const initialState: ExpenseState = {};

export const expenseReducer = (
  state = initialState,
  action: ExpenseActionType
) => {
  switch (action.type) {
    case 'SET_CURRENT_EXPENSE_ID':
      return {
        ...state,
        ...{ currentExpenseId: action.payload.id },
      };
    case 'SET_COMMENT':
      return {
        ...state,
        ...{ comment: action.payload.comment },
      };
    case 'SET_FILE':
      return {
        ...state,
        ...{ file: action.payload.file },
      };
    case 'GET_EXPENSE_REQUEST':
    case 'SAVE_EXPENSE_REQUEST':
      return {
        ...state,
        ...{ loadingState: 'pending' },
      };
    case 'GET_EXPENSE_SUCCESS':
    case 'SAVE_EXPENSE_SUCCESS':
      return {
        ...state,
        ...{
          loadingState: 'success',
          expense: action.payload.expense,
        },
      };
    case 'GET_EXPENSE_FAILURE':
    case 'SAVE_EXPENSE_FAILURE':
      return {
        ...state,
        ...{ loadingState: 'failure', error: action.payload.error },
      };
    default:
      return state;
  }
};
