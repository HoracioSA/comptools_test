import React from 'react';
import {Box, Text, theme} from './Theme';

import {Image, StyleSheet} from 'react-native';

import {RectButton, RectButtonProperties} from 'react-native-gesture-handler';

export interface Props extends RectButtonProperties {
  url: string;
  name: string;
}
function HomeCard({url, name, ...rest}: Props) {
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
        padding="m"
        backgroundColor="gray_dark"
        borderRadius="s"
        marginBottom="m"
        style={ShadowStyle}>
        <Image style={styles.imagem} source={{uri: url}} />
        <Text color="green" fontSize={12}>
          {name}
        </Text>
      </Box>
    </RectButton>
  );
}

export default HomeCard;

const styles = StyleSheet.create({
  imagem: {
    height: 200,
    width: 350,
    backgroundColor: theme.colors.primary,
    borderRadius: 8,
  },
});
