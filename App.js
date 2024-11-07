import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './src/navigation/AppNavigator';

const Stack = createStackNavigator();  

export default function App() {
  return(
  <NavigationContainer>
    <AppNavigator></AppNavigator>
  </NavigationContainer>
  );
}
