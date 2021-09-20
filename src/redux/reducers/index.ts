import {combineReducers} from 'redux';
import {UserReducer} from './userReducer';
import {DataReducer} from './dataReducer';

const rootReducer = combineReducers({
  userReducer: UserReducer,
  dataReducer: DataReducer,
});
export type ApplicationState = ReturnType<typeof rootReducer>;

export {rootReducer};
