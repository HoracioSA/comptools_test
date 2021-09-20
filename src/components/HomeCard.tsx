import React from 'react';
import {Box, Text, theme} from './Theme';

import {Dimensions, Image, StyleSheet} from 'react-native';

import {RectButton, RectButtonProperties} from 'react-native-gesture-handler';
import {useDispatch} from 'react-redux';
import {onLoadingData} from '../redux';
const {width, height} = Dimensions.get('window');

export interface Props extends RectButtonProperties {
  url: string;
  name: string;
}
function HomeCard({url, name, ...rest}: Props) {
  const dispatch = useDispatch();
  const handleSign = () => {
    const data = dispatch(onLoadingData());
    console.log('User data:', data);
  };
  handleSign();
  const ShadowStyle = {
    shadowColor: theme.colors.primary,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.5,
    shadowRadius: 11.95,
    elevation: 18,
  };

  return (
    <RectButton {...rest}>
      <Box
        alignItems="center"
        justifyContent="center"
        marginTop="s"
        padding="m"
        width="100%"
        borderRadius="s"
        marginBottom="m"
        style={ShadowStyle}>
        <Image style={styles.imagem} source={{uri: url}} />
        <Text color="green" fontSize={12} variant="body">
          {name}
        </Text>
      </Box>
    </RectButton>
  );
}

export default HomeCard;

const styles = StyleSheet.create({
  imagem: {
    height: verticalScale(100),
    backgroundColor: '#eee',
    aspectRatio: 1,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
});
