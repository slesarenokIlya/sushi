import React from 'react'
import {
  View,
  StyleSheet
} from 'react-native'

import Text from '../../../../components/Text'

import {CITIES} from '../../../../const'
import OpenArrow from '../../../../svg/open-arrow.svg'

export default ({selected}) => (
  <View style={styles.box}>
    <Text style={styles.box__label}>{CITIES[selected]}</Text>
    <OpenArrow />
  </View>
)

const styles = StyleSheet.create({
  box: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  box__label: {
    fontWeight: '600',
    fontSize: 16,
    marginRight: 10
  }
})
