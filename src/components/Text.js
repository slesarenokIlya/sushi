import React from 'react'
import {
  Text
} from 'react-native'

import {getFont} from '../utils'

export default ({children, style, type}) => (
  <Text style={[
      style,
      {fontFamily: getFont(type)}
    ]}>{children}</Text>
)
