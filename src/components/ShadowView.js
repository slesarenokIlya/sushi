import React from 'react';
import {View} from 'react-native';

export default ({children, style}) => (
  <View
    style={[
      {
        shadowOffset: {width: 0, height: 0},
        shadowColor: '#000',
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 1,
        backgroundColor: '#FFF',
      },
      style,
    ]}>
    {children}
  </View>
);
