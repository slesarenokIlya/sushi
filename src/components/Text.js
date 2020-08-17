import React from 'react';
import {Text} from 'react-native';

import {getFont} from '../utils';

export default ({children, style, type, ...props}) => (
  <Text style={[style, {fontFamily: getFont(type)}]} {...props}>
    {children}
  </Text>
);
