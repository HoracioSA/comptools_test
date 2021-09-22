import {
  DataAction,
  Data,
  SingleUserAction,
  SingleUserData,
} from '../actions/LoadAllUsersAction';
type DataState = {
  data: Data;
  error: string | undefined;
};
type SingleUserState = {
  data: SingleUserData;
  error: string | undefined;
};
const InitialState = {
  data: {} as Data,
  error: undefined,
};
const SUinitialState = {
  data: {} as SingleUserData,
  error: undefined,
};
const GetMultipleUserReducer = (
  state: DataState = InitialState,
  action: DataAction,
) => {
  switch (action.type) {
    case 'ALL_USERS':
      return {
        ...state,
        data: action.payload,
      };
    case 'ERROR_ON_LOADING':
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

const GetSingleUserReducer = (
  state: SingleUserState = SUinitialState,
  action: SingleUserAction,
) => {
  switch (action.type) {
    case 'SINGLE_USER':
      return {
        ...state,
        data: action.payload,
      };
    case 'ERROR_ON_LOADING':
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
export {GetSingleUserReducer};
export {GetMultipleUserReducer};
