/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React from 'react';
 import type {Node} from 'react';
 import {
   SafeAreaView,
   ScrollView,
   StatusBar,
 } from 'react-native';
 import RootNavigation from './routes/RootNavigation';
 
 
 const App: () => Node = () => {
   return (
     <SafeAreaView style={{flex: 1}}>
       <StatusBar barStyle={'light-content'} />
         <RootNavigation/>
     </SafeAreaView>
   );
 };
 
 export default App;
 