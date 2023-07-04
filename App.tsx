/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {persistor, store} from './src/store';
import Index from './src';
import {NavigationContainer} from '@react-navigation/native';
import {ThemeProvider} from 'styled-components/native';
import theme from 'src/theme';

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <ThemeProvider theme={theme}>
            <Index />
          </ThemeProvider>
        </PersistGate>
      </Provider>
    </NavigationContainer>
  );
}

export default App;
