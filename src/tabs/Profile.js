import React from 'react'

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();

import ProfileScreen1 from '../screens/Profile/Screen-1'
import ProfileScreen2 from '../screens/Profile/Screen-2'
import ProfileScreen3 from '../screens/Profile/Screen-3'
import ProfileScreen4 from '../screens/Profile/Screen-4'
import ProfileScreen5 from '../screens/Profile/Screen-5'
import ProfileScreen6 from '../screens/Profile/Screen-6'
import ProfileScreen7 from '../screens/Profile/Screen-7'

export default () => (
  <Stack.Navigator screenOptions={{header: () => null}}>
    <Stack.Screen name="profile-1" component={ProfileScreen1} />
    <Stack.Screen name="profile-2" component={ProfileScreen2} />
    <Stack.Screen name="profile-3" component={ProfileScreen3} />
    <Stack.Screen name="profile-4" component={ProfileScreen4} />
    <Stack.Screen name="profile-5" component={ProfileScreen5} />
    <Stack.Screen name="profile-6" component={ProfileScreen6} />
    <Stack.Screen name="profile-7" component={ProfileScreen7} />
  </Stack.Navigator>
)
