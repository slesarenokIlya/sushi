import React from 'react'
import {
  View,
  StyleSheet
} from 'react-native'

import Text from '../../../../components/Text'

export default ({value}) => (
  <View style={styles.box}>
    <Text style={styles.box__text}>{value} ₽</Text>
  </View>
)

const styles = StyleSheet.create({
  box: {
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#E32913',
    width: 92,
    height: 31,
    alignItems: 'center',
    justifyContent: 'center',
    left: 20,
    paddingRight: 20
  },
  box__text: {
    fontSize: 16,
    color: '#0D0802',
    fontWeight: '600'
  }
})
