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
    default:
      return state;
  }
};
