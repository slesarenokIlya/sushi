import React from 'react'

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();

import MenuScreen from '../screens/Menu'

export default () => (
  <Stack.Navigator screenOptions={{header: () => null}}>
    <Stack.Screen name="menu" component={MenuScreen} />
  </Stack.Navigator>
)
