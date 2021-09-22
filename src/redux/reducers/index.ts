import {combineReducers} from 'redux';
import {LoginReducer} from './LoginReducer';
import {
  GetMultipleUserReducer,
  GetSingleUserReducer,
} from './LoadAllUsersReducer';

const rootReducer = combineReducers({
  userReducer: LoginReducer,
  MultipleUserReducer: GetMultipleUserReducer,
  SingleUserReducer: GetSingleUserReducer,
});
export type ApplicationState = ReturnType<typeof rootReducer>;

export {rootReducer};
