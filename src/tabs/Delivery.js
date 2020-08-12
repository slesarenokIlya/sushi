import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
const Stack = createStackNavigator();

import DeliveryScreen from '../screens/Delivery';

export default () => (
  <Stack.Navigator screenOptions={{header: () => null}}>
    <Stack.Screen name="delivery" component={DeliveryScreen} />
  </Stack.Navigator>
);
