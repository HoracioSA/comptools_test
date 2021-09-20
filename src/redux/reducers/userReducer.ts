import {UserAction, UserModel} from '../actions/userAction';
type UserState = {
  user: UserModel;
  error: string | undefined;
};
const InitialState = {
  user: {} as UserModel,
  error: undefined,
};
const UserReducer = (state: UserState = InitialState, action: UserAction) => {
  switch (action.type) {
    case 'ON_LOGIN':
      return {
        ...state,
        user: action.payload,
      };
    case 'ON_ERROR':
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
export {UserReducer};
