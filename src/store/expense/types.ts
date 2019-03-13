export type ExpenseState = {
  currentExpenseId?: string;
};

export const SET_CURRENT_EXPENSE_ID = 'SET_CURRENT_EXPENSE_ID';

type SetCurrentExpenseIdAction = {
  type: typeof SET_CURRENT_EXPENSE_ID;
  payload: {
    id: string;
  };
};

export type ExpenseActionType = SetCurrentExpenseIdAction;
