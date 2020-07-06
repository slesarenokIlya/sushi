import React from 'react'

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();

import BasketScreen from '../screens/Basket'

export default () => (
  <Stack.Navigator screenOptions={{header: () => null}}>
    <Stack.Screen name="basket" component={BasketScreen} />
  </Stack.Navigator>
)
