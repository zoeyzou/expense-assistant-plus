import { combineReducers, applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { userReducer } from './user/reducers';
import { expensesReducer } from './expenses/reducers';
import { pageInfoReducer } from './page-info/reducers';

const rootReducer = combineReducers({
  userState: userReducer,
  expensesState: expensesReducer,
  pageInfoState: pageInfoReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

const store = createStore(rootReducer, applyMiddleware(thunk));

store.subscribe(() => {
  console.log(store.getState());
});

export default store;
