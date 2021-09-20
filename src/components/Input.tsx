import React from 'react';
import {StyleSheet, TextInput} from 'react-native';
import {useTheme, Box} from '../components/Theme';

//import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

interface SearchPropriedades {
  placeholder: string;
  bordercolor?: string;
  touched?: boolean;
  error?: string;
}

const Input = ({placeholder, touched, error, ...props}: SearchPropriedades) => {
  const theme = useTheme();
  const SIZE = theme.borderRadii.m * 2;
  const reColor = !touched ? 'secoundary' : error ? 'danger' : 'green';
  const color = theme.colors[reColor];
  return (
    <Box
      flexDirection="row"
      height={48}
      alignItems="center"
      borderRadius="s"
      borderWidth={StyleSheet.hairlineWidth}
      borderColor={reColor}
      padding="m"
      marginTop="s">
      <Box flex={1}>
        <TextInput
          underlineColorAndroid="transparent"
          placeholderTextColor={color}
          color={color}
          placeholder={placeholder}
          {...props}
        />
      </Box>
      {touched && (
        <Box
          height={SIZE}
          width={SIZE}
          borderRadius="m"
          justifyContent="center"
          alignItems="center"
          backgroundColor={!error ? 'green' : 'danger'}
        />
      )}
    </Box>
  );
};

export default Input;
