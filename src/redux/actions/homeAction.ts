import axios from 'axios';
import {Dispatch} from 'react';
//import axios from 'axios';
import {BASE_URL} from '../../Constants';
export type Data = {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
};
export type DataProps = {
  data: Data;
};
export interface DataActions {
  readonly type: 'ON_LOADING';
  payload: DataProps;
}
export interface ErrorDataActions {
  readonly type: 'ERROR_ON_LOADING';
  payload: any;
}

export type DataAction = DataActions | ErrorDataActions;
// Dispach actions

export const onLoadingData = () => {
  return async (dispatch: Dispatch<DataAction>) => {
    try {
      const response = await axios.get<DataProps>(`${BASE_URL}users`);
      console.log(response.data);
      if (!response) {
        dispatch({
          type: 'ERROR_ON_LOADING',
          payload: 'Something went wrong Please try again',
        });
      } else {
        dispatch({
          type: 'ON_LOADING',
          payload: response.data,
        });
        console.log('Home Data:', response.data);
      }
    } catch (error) {
      console.log('err:', error);
      dispatch({
        type: 'ERROR_ON_LOADING',
        payload: error,
      });
    }
  };
};
