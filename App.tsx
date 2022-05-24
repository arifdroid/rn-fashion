/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {
  Button,
  Text,
  View,
} from 'react-native';


import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Application from './src/Navigators/Application';
import { GestureHandlerRootView } from 'react-native-gesture-handler';






const App = () => (
  <GestureHandlerRootView style={{ flex: 1 }}>
    <Application />
  </GestureHandlerRootView>
)



export default App;
