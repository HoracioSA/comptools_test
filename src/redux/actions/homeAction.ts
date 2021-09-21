import axios from 'axios';
import {Dispatch} from 'react';
//import axios from 'axios';
import {BASE_URL} from '../../Constants';
export type Data = {
  data: [
    {
      id: number;
      email: string;
      first_name: string;
      last_name: string;
      avatar: string;
    },
  ];
};

export type DataProps = {
  data: Data;
};
export interface DataActions {
  readonly type: 'ALL_USERS';
  payload: Data;
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
      await axios.get<Data>(`${BASE_URL}users`).then(response => {
        const data = response.data;
        if (!data) {
          dispatch({
            type: 'ERROR_ON_LOADING',
            payload: 'Something went wrong Please try again',
          });
        } else {
          dispatch({
            type: 'ALL_USERS',
            payload: data,
          });
          console.log('Home Data2:', data);
        }
      });
    } catch (error) {
      console.log('err:', error);
      dispatch({
        type: 'ERROR_ON_LOADING',
        payload: error,
      });
    }
  };
};
