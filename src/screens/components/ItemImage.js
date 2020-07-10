import React from 'react'
import {Image, View} from 'react-native'

import ItemStubImg from '../../svg/item-stub.svg'

export default ({source, style}) => source ?
  <Image style={style} source={source} /> :
  <View style={[ style, {alignItems: 'center', justifyContent: 'center'} ]}>
    <ItemStubImg />
  </View>;
