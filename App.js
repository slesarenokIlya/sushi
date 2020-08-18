import React from 'react';
import {View, Text, SafeAreaView} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';

import Signin from './src/screens/Signin';
import Signup from './src/screens/Signup';
import Restore from './src/screens/Restore';

import MenuTab from './src/tabs/Menu';
import ProfileTab from './src/tabs/Profile';
import ContactsTab from './src/tabs/Contacts';
import BasketTab from './src/tabs/Basket';
import DeliveryTab from './src/tabs/Delivery';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

import MenuIcon from './src/svg/menu-icon.svg';
import ProfileIcon from './src/svg/profile-icon.svg';
import ContactsIcon from './src/svg/contacts-icon.svg';
import BasketIcon from './src/svg/basket-icon.svg';
import DeliveryIcon from './src/svg/delivery-icon.svg';

const INACTIVE_OPACITY = 0.3;
const ICONS = [
  ({focused}) =>
    !focused ? (
      <View style={{opacity: INACTIVE_OPACITY}}>
        <MenuIcon />
      </View>
    ) : (
      <MenuIcon />
    ),
  ({focused}) =>
    !focused ? (
      <View style={{opacity: INACTIVE_OPACITY}}>
        <ProfileIcon />
      </View>
    ) : (
      <ProfileIcon />
    ),
  ({focused}) =>
    !focused ? (
      <View style={{opacity: INACTIVE_OPACITY}}>
        <ContactsIcon />
      </View>
    ) : (
      <ContactsIcon />
    ),
  ({focused}) =>
    !focused ? (
      <View style={{opacity: INACTIVE_OPACITY}}>
        <BasketIcon />
      </View>
    ) : (
      <BasketIcon />
    ),
  ({focused}) =>
    !focused ? (
      <View style={{opacity: INACTIVE_OPACITY}}>
        <DeliveryIcon />
      </View>
    ) : (
      <DeliveryIcon />
    ),
];
const labelStyle = {fontSize: 12};
const LABELS = [
  ({focused}) => (
    <Text
      style={[
        labelStyle,
        focused ? {color: '#0D0802'} : {color: '#ADADB7', opacity: 0.8},
      ]}>
      Меню
    </Text>
  ),
  ({focused}) => (
    <Text
      style={[
        labelStyle,
        focused ? {color: '#0D0802'} : {color: '#ADADB7', opacity: 0.8},
      ]}>
      Профиль
    </Text>
  ),
  ({focused}) => (
    <Text
      style={[
        labelStyle,
        focused ? {color: '#0D0802'} : {color: '#ADADB7', opacity: 0.8},
      ]}>
      Контакты
    </Text>
  ),
  ({focused}) => (
    <Text
      style={[
        labelStyle,
        focused ? {color: '#0D0802'} : {color: '#ADADB7', opacity: 0.8},
      ]}>
      Корзина
    </Text>
  ),
  ({focused}) => (
    <Text
      style={[
        labelStyle,
        focused ? {color: '#0D0802'} : {color: '#ADADB7', opacity: 0.8},
      ]}>
      Доставка
    </Text>
  ),
];

const mainNav = () => (
  <Tab.Navigator
    initialRouteName={'menuTab'}
    headerMode="none"
    tabBarOptions={{style: {backgroundColor: '#F7F7F7', paddingBottom: 5}}}>
    <Tab.Screen
      name="menuTab"
      options={{tabBarLabel: LABELS[0], tabBarIcon: ICONS[0]}}
      component={MenuTab}
    />
    <Tab.Screen
      name="profileTab"
      options={{tabBarLabel: LABELS[1], tabBarIcon: ICONS[1]}}
      component={ProfileTab}
    />
    <Tab.Screen
      name="contactsTab"
      options={{tabBarLabel: LABELS[2], tabBarIcon: ICONS[2]}}
      component={ContactsTab}
    />
    <Tab.Screen
      name="basketTab"
      options={{tabBarLabel: LABELS[3], tabBarIcon: ICONS[3]}}
      component={BasketTab}
    />
    <Tab.Screen
      name="deliveryTab"
      options={{tabBarLabel: LABELS[4], tabBarIcon: ICONS[4]}}
      component={DeliveryTab}
    />
  </Tab.Navigator>
);

const startNav = () => (
  <Stack.Navigator initialRouteName={'signin'}>
    <Stack.Screen name="signin" component={Signin} />
    <Stack.Screen name="signup" component={Signup} />
    <Stack.Screen name="restore" component={Restore} />
  </Stack.Navigator>
);

const App = () => (
  <SafeAreaView style={{flex: 1}}>
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{header: () => null}}
        initialRouteName={'start'}>
        <Stack.Screen name="start" component={startNav} />
        <Stack.Screen name="main" component={mainNav} />
      </Stack.Navigator>
    </NavigationContainer>
  </SafeAreaView>
);

export default App;
