import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  StatusBar
} from 'react-native';

export default ({children, disableScroll, withoutPadding}) => (
  <View style={{backgroundColor: '#FFF', minHeight: '100%'}}>
    <StatusBar barStyle="light-content"/>

    <SafeAreaView style={{minHeight: '100%'}}>
      <View style={{overflow: 'hidden'}}>

      <ScrollView style={{minHeight: '100%'}} contentContainerStyle={{flexGrow: 1}}
        scrollEnabled={!disableScroll}
        bounces={false}
        showsVerticalScrollIndicator={false}
        overScrollMode="never">
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
