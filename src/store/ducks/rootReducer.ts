import { combineReducers } from 'redux';
import { userReducer } from './user';

const rootReducer = combineReducers({
  users: userReducer,
});

export type AppStateType = ReturnType<typeof rootReducer>;

export default rootReducer;
