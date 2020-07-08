import React from 'react'
import {
  View
} from 'react-native'

export default ({children, style}) => (
  <View style={[{
    shadowOffset:{  width: 0,  height: 0,  },
    shadowColor: '#000',
    shadowOpacity: 1,
    shadowRadius: 8,
    elevation: 2,
    backgroundColor: '#FFF'
  }, style]}>{children}</View>
)
