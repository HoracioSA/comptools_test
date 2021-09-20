import React, {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import {ApplicationState} from '../redux';
//import {ActivityIndicator, LogBox } from 'react-native';
import AppRoutes from './app.route';
import AuthRoutes from './auth.route';
import AsyncStorage from '@react-native-community/async-storage';
import {Box, Text, theme} from '../components/Theme';
import { ActivityIndicator } from 'react-native';
const Navigation: React.FC = () => {
  const [userToken, setUserToken] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const {user} = useSelector((state: ApplicationState) => state.userReducer);
  const {token} = user;

  useEffect(() => {
    async function getTokenFromLocalStorage() {
      const getUserToken = await AsyncStorage.getItem('@RNAuth:user');
      console.log('User Token', getUserToken);
      await new Promise(resolve => setTimeout(resolve, 2000));
      if (getUserToken) {
        setUserToken(getUserToken);
        setLoading(false);
      }
    }
    getTokenFromLocalStorage();
  }, []);
  async function saveUserTokenInLocalStorage() {
    const SaveUserToken = await AsyncStorage.setItem(
      '@RNAuth:user',
      JSON.stringify(token),
    );
    return SaveUserToken;
  }
  saveUserTokenInLocalStorage();
  if (loading) {
    return (
      <Box
        flex={1}
        alignItems="center"
        justifyContent="center"
        backgroundColor="primary">
        <ActivityIndicator size="large" color={theme.colors.secoundary}/>
      </Box>
    );
  }
  return userToken ? <AppRoutes /> : <AuthRoutes />;
};

export default Navigation;
