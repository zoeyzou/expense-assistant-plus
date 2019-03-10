import { combineReducers, applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { userReducer } from './user/reducers';

const rootReducer = combineReducers({
  userState: userReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

export default createStore(rootReducer, applyMiddleware(thunk));
