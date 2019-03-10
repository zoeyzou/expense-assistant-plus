import { combineReducers, applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { userReducer } from './user/reducers';
import { apiReducer } from './api/reducers';

const rootReducer = combineReducers({
  userState: userReducer,
  apiState: apiReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

export default createStore(rootReducer, applyMiddleware(thunk));
