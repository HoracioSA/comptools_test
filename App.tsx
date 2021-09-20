import React from 'react';
import {theme} from './src/components/Theme';
import {ThemeProvider} from '@shopify/restyle';
import Navigation from './src/routes';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';
import {store} from './src/redux';

export default function App() {
  return (
    <NavigationContainer>
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <Navigation />
        </Provider>
      </ThemeProvider>
    </NavigationContainer>
  );
}
