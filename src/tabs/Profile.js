import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
const Stack = createStackNavigator();

import ProfileScreen from '../screens/Profile';
import GreetingScreen from '../screens/Profile/Greeting';
import PhoneScreen from '../screens/Profile/Phone';
import CodeScreen from '../screens/Profile/Code';
import SettingsScreen from '../screens/Profile/Settings';

export default () => (
  <Stack.Navigator
    screenOptions={{header: () => null}}
    initialRouteName="profile-settings">
    <Stack.Screen name="profile-main" component={ProfileScreen} />
    <Stack.Screen name="profile-greeting" component={GreetingScreen} />
    <Stack.Screen name="profile-phone" component={PhoneScreen} />
    <Stack.Screen name="profile-code" component={CodeScreen} />
    <Stack.Screen name="profile-settings" component={SettingsScreen} />
  </Stack.Navigator>
);
