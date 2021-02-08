/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState , useMemo} from 'react';
import {SafeAreaView, ScrollView, StatusBar
} from 'react-native';
import AuthContext from './context/AuthContext';
import Storage,{StorageContext} from './context/Storage';
import RootNavigation from './routes/RootNavigation';

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <AuthContext>
        <Storage>
          <RootNavigation/>
        </Storage>
      </AuthContext>
    </>
  );
};

export default App;
