import { AppState } from 'src/store';

export const getTotalPages = (state: AppState) =>
  state.expensesState.sum &&
  state.pageInfoState.pageLimit &&
  Math.ceil(state.expensesState.sum / state.pageInfoState.pageLimit);
