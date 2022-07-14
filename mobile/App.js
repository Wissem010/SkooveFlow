/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import Navigator from './src/Navigator';
import {Provider as StoreProvider} from 'react-redux';
import store from './src/redux/store';

export default function App() {
  return (
    <StoreProvider store={store}>
      <SafeAreaProvider>
        <Navigator />
      </SafeAreaProvider>
    </StoreProvider>
  );
}
