import {DataAction, Data} from '../actions/homeAction';
type DataState = {
  data: Data;
  error: string | undefined;
};
const InitialState = {
  data: {} as Data,
  error: undefined,
};
const DataReducer = (state: DataState = InitialState, action: DataAction) => {
  switch (action.type) {
    case 'ON_LOADING':
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
export {DataReducer};
