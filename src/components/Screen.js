import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  StatusBar
} from 'react-native';

import Text from './Text'

export default ({children, disableScroll, withoutPadding}) => (
  <View style={{backgroundColor: '#FFF', minHeight: '100%'}}>
    <StatusBar barStyle="dark-content"/>

    <SafeAreaView style={{minHeight: '100%'}}>
      <View style={{overflow: 'hidden'}}>

      <ScrollView style={{minHeight: '100%'}} contentContainerStyle={{flexGrow: 1}}
        scrollEnabled={!disableScroll}
        bounces={false}
        showsVerticalScrollIndicator={false}
        overScrollMode="never"
        nestedScrollEnabled>
        <View style={[
            withoutPadding ? undefined : {padding: 10},
            {minHeight: '100%'}
          ]}>
          {children}
        </View>
      </ScrollView>

      </View>
    </SafeAreaView>
  </View>
);
