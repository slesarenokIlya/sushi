import React, {useState} from 'react'
import {
  View,
  StyleSheet
} from 'react-native'

import Select from '../../../components/Select'

import Price from './Header/Price'

import {CITIES} from '../../../const'

export default () => {
  const [ selected, setSelected ] = useState(0);

  return (<View style={styles.header}>
    <Select items={CITIES} selected={selected} onSelect={setSelected}/>
    <Price value={1234}/>
  </View>)
}

const styles = StyleSheet.create({
  header: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
    paddingTop: 10,
    zIndex: 10,
    elevation: 10
  }
});
