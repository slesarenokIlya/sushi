import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
const Stack = createStackNavigator();

import ProfileScreen from '../screens/Profile';
import GreetingScreen from '../screens/Profile/Greeting';
import PhoneScreen from '../screens/Profile/Phone';
import CodeScreen from '../screens/Profile/Code';
import SettingsScreen from '../screens/Profile/Settings';
import HistoryScreen from '../screens/Profile/History';
import ActiveScreen from '../screens/Profile/Active';
import AddressesScreen from '../screens/Profile/Addresses';
import AddAddressScreen from '../screens/Profile/AddAddress';

export default () => (
  <Stack.Navigator
    screenOptions={{header: () => null}}
    initialRouteName="profile-main">
    <Stack.Screen name="profile-main" component={ProfileScreen} />
    <Stack.Screen name="profile-greeting" component={GreetingScreen} />
    <Stack.Screen name="profile-phone" component={PhoneScreen} />
    <Stack.Screen name="profile-code" component={CodeScreen} />
    <Stack.Screen name="profile-settings" component={SettingsScreen} />
    <Stack.Screen name="profile-history" component={HistoryScreen} />
    <Stack.Screen name="profile-active" component={ActiveScreen} />
    <Stack.Screen name="profile-addresses" component={AddressesScreen} />
    <Stack.Screen name="profile-addaddress" component={AddAddressScreen} />
  </Stack.Navigator>
);
