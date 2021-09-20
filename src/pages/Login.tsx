import React from 'react';
import {Box, Text} from '../components/Theme';
import Input from '../components/Input';
import {Formik} from 'formik';
import * as Yup from 'yup';

import {useNavigation} from '@react-navigation/native';
import {StyleSheet, StatusBar, View} from 'react-native';
import Button from '../components/Button';
import {useDispatch} from 'react-redux';
import {onLogin} from '../redux';
export default function Login() {
  const dispatch = useDispatch();
  const handleSign = ({email, password}: {email: string; password: string}) => {
    dispatch(onLogin(email, password));
  };
  const LoginSchema = Yup.object().shape({
    password: Yup.string()
      .max(50, 'Too Long!')
      .matches(/\w*[a-z]\w*/, 'Password must have a small letter')
      .matches(/\w*[A-Z]\w*/, 'Password must have a capital letter')
      .matches(/\d/, 'Password must have a number')
      .min(8, ({min}) => `Password must be at least ${min} characters`)
      .required('Password is required')
      .label('Password'),
    email: Yup.string().email('Invalid email').required('Email is required!'),
  });
  //console.log(LoginSchema);
  /// Contesto de autenticacao das paginas
  //const {signed, user,signIn} = useAuth()

  return (
    <Box flex={1} backgroundColor="primary" alignItems="center">
      <StatusBar barStyle="light-content" />
      <View style={[styles.container]}>
        <Formik
          validationSchema={LoginSchema}
          initialValues={{email: '', password: ''}}
          onSubmit={handleSign}>
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            errors,
            touched,
            setFieldValue,
          }) => (
            <Box flex={1} justifyContent="center" alignItems="center">
              <Input
                placeholder="Enter your Email"
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email}
                error={errors.email}
                touched={touched.email}
                autoCapitalize="none"
                autoCompleteType="email"
                returnKeyType="next"
                returnKeyLabel="next"
                keyboardType="email-address"
              />

              <Text textAlign="left" marginTop="s" color="danger">
                {errors.email}
              </Text>

              <Input
                secureTextEntry={true}
                placeholder="Enter your Password"
                autoCorrect={false}
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                value={values.password}
                error={errors.password}
                touched={touched.password}
                autoCompleteType="password"
                returnKeyType="go"
                returnKeyLabel="go"
              />
              <Text marginTop="s" color="danger">
                {errors.password}
              </Text>
              <Box marginTop="m">
                <Button
                  label="Login"
                  variant="secoundary"
                  onPress={handleSubmit}
                />
              </Box>
            </Box>
          )}
        </Formik>
      </View>
    </Box>
  );
}
const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFF',
  },
  containerLogo: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',
    paddingBottom: 35,
  },

  containerInput: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
  },
  btnSubmit: {
    backgroundColor: '#656DEA',
    width: 278,
    height: 50,
    marginTop: 15,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 7,
    borderColor: '#000',
  },
  submitText: {
    fontFamily: 'Roboto_400Regular',
    color: '#FFF',
    fontSize: 18,
  },
  registerText: {
    marginRight: 70,
    marginLeft: 70,

    marginBottom: 20,
  },

  linkInput: {
    height: 45,
    width: '60%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    fontFamily: 'Roboto_700Bold',
  },
  icons: {},
});
