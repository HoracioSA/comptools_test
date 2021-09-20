import React from 'react';
import {StatusBar} from 'react-native';
import {useDispatch} from 'react-redux';
import HomeTab from '../components/Tabs/HomeTab';
import ProfileTab from '../components/Tabs/ProfileTab';
import Tabs from '../components/Tabs/Tab';
//import { Text, View } from 'react-native'
import {Box} from '../components/Theme';
import {onLoadingData} from '../redux';

export default function Home() {
  const dispatch = useDispatch();
  const LoadDataFromAPI = () => {
    dispatch(onLoadingData());
    // console.log('User data:', password, email);
  };
  LoadDataFromAPI();
  const tabs = [
    {id: 'configuracao', label: 'Home'},
    {id: 'personal', label: 'Profile'},
  ];
  return (
    <Box flex={1} backgroundColor="primary">
      <StatusBar barStyle="light-content" />
      <Tabs tabs={tabs}>
        <HomeTab />
        <ProfileTab />
      </Tabs>
    </Box>
  );
}
