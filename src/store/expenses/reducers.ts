import { ExpensesState, ExpensesActionType } from './types';

const initialState: ExpensesState = {
  expenses: [],
};

export const expensesReducer = (
  state = initialState,
  action: ExpensesActionType
): ExpensesState => {
  switch (action.type) {
    case 'GET_EXPENSES_REQUEST':
      return {
        ...state,
        ...{ loadingState: 'pending' },
      };
    case 'GET_EXPENSES_SUCCESS':
      return {
        ...state,
        ...{ loadingState: 'success', expenses: action.payload.expenses },
      };
    case 'GET_EXPENSES_FAILURE':
      return {
        ...state,
        ...{ loadingState: 'failure', error: action.payload.error },
      };
    default:
      return state;
  }
};
