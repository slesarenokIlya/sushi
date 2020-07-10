import React from 'react'

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();

import MenuScreen from '../screens/Menu'
import ItemScreen from '../screens/Item'

const itemTransition = ({current: {progress}}) => {
  return {
    cardStyle: {
      opacity: progress
    }
  }
}

export default () => (
  <Stack.Navigator screenOptions={{header: () => null}}>
    <Stack.Screen name="menu" component={MenuScreen} />
    <Stack.Screen name="item" component={ItemScreen} options={{cardStyleInterpolator: itemTransition}} />
  </Stack.Navigator>
)
