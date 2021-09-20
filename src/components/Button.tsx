import React from 'react';
import {RectButton, RectButtonProperties} from 'react-native-gesture-handler';
import {StyleSheet, Dimensions} from 'react-native';
import {useTheme} from '@shopify/restyle';

import {Theme, Text} from './Theme';
interface ButtonProps {
  variant: 'default' | 'secoundary';
  label: string;
  onPress: () => void;
  style?: RectButtonProperties['style'];
}
const {width} = Dimensions.get('window');
const Button = ({onPress, label, variant, style}: ButtonProps) => {
  const theme = useTheme<Theme>();
  const backgroundColor =
    variant === 'secoundary'
      ? theme.colors.secoundary
      : theme.colors.gray_light;
  const color =
    variant === 'secoundary' ? theme.colors.white : theme.colors.secoundary;
  return (
    <RectButton
      style={[styles.container, style, {backgroundColor}]}
      {...{onPress}}>
      <Text variant="button" style={{color}}>
        {label}
      </Text>
    </RectButton>
  );
};
export default Button;
const styles = StyleSheet.create({
  container: {
    borderRadius: 8,
    height: 48,
    width: width - 44,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
