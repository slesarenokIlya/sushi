import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
const Stack = createStackNavigator();

import ContactsScreen from '../screens/Contacts';

export default () => (
  <Stack.Navigator screenOptions={{header: () => null}}>
    <Stack.Screen name="contacts" component={ContactsScreen} />
  </Stack.Navigator>
);
