import React from 'react'
import {
  View,
  Image,
  StyleSheet
} from 'react-native'

import Input from '../../../components/Input'
import Select from '../../../components/Select'

export default ({value, onChange}) => {
  return (<View style={styles.box}>
    <View style={styles.box__prefix}>
      <Select items={['+7']} selected={0}/>
    </View>
    <Input style={styles.box__inputCont} inputStyle={styles.box__input} value={value} onChange={onChange} />
  </View>);
}

const styles = StyleSheet.create({
  box: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  box__prefix: {
    width: 60,
    height: 50,
    borderWidth: 1,
    borderRightWidth: 0,
    borderColor: 'rgba(16,16,16,0.3)',
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
    justifyContent: 'center',
    alignItems: 'center'
  },
  box__inputCont: {
    flex: 1,
  },
  box__input: {
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
  }
});
