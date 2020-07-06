import React from 'react'
import {
  View,
  Image,
  StyleSheet
} from 'react-native'

import Input from '../../../components/Input'

export default ({value, onChange}) => {
  return (<View style={styles.box}>
    <View style={styles.box__prefix}></View>
    <Input style={styles.box__input} value={value} onChange={onChange} />
  </View>);
}

const styles = StyleSheet.create({
  box: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  box__prefix: {
    width: 50,
    height: 50,
    borderWidth: 1,
    borderRightWidth: 0,
    borderColor: 'rgba(16,16,16,0.3)',
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
  },
  box__input: {
    flex: 1,
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
  }
});
