import {Dispatch} from 'react';
import axios from 'axios';
import {BASE_URL} from '../../Constants';
import AsyncStorage from '@react-native-community/async-storage';
export type UserModel = {
  id?: string;
  email?: string;
  password?: string;
};
export interface LoginActions {
  readonly type: 'ON_LOGIN';
  payload: UserModel;
}
export interface TokenAction {
  readonly type: 'SET_ACCESS_TOKEN';
  payload: string;
}
export interface ErrorActions {
  readonly type: 'ON_ERROR';
  payload: any;
}

export type UserAction = LoginActions | ErrorActions | TokenAction;
// Dispach actions

export const onLogin = (email: string, password: string) => {
  return async (dispatch: Dispatch<UserAction>) => {
    try {
      const response = await axios.post<UserModel>(`${BASE_URL}login`, {
        email,
        password,
      });
      console.log(response.data);
      if (!response) {
        dispatch({
          type: 'ON_ERROR',
          payload: 'Something went wrong Please try again',
        });
      } else {
        dispatch({
          type: 'ON_LOGIN',
          payload: {email: email, ...response.data},
        });
        const storedUser = await AsyncStorage.setItem(
          '@Auth:user',
          JSON.stringify(response.data),
        );
        console.log('LocalStorage', storedUser);
      }
    } catch (error) {
      console.log('err:', error);
      dispatch({
        type: 'ON_ERROR',
        payload: error,
      });
    }
  };
};
