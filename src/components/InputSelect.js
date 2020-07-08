import React, {useState} from 'react'
import {
  View,
  TouchableWithoutFeedback,
  StyleSheet
} from 'react-native'

import Text from './Text'
import Input from './Input'

import SelectArrow from '../svg/select-arrow.svg'

export default ({items, selected, onSelect, placeholder}) => {
  const [listOpened, setListOpened] = useState(false);

  return (<View style={styles.box}>
    <Text style={styles.box__placeholder}>{placeholder}</Text>

    <TouchableWithoutFeedback onPress={() => setListOpened( !listOpened )}><View>
      <View style={[ styles.box__input, listOpened ? styles.box__input_opened : undefined ]}>
        <Text style={styles.box__input__label}>{items[selected]}</Text>
      </View>
      <View style={styles.box__cover}></View>
      <View style={styles.box__open}><SelectArrow /></View>
    </View></TouchableWithoutFeedback>

    <View style={[ styles.box__list, listOpened ? styles.box__list_opened : {} ]}>
      {items.map((item, ind) => (
        <TouchableWithoutFeedback onPress={() => {onSelect(ind); setListOpened(false)}}>
          <View key={ind} style={styles.box__list__item}>
            <Text>{item}</Text>
          </View>
      </TouchableWithoutFeedback>
      ))}
    </View>
  </View>)
}

const styles = StyleSheet.create({
  box: {
    marginTop: 10
  },
  box__placeholder: {
    fontSize: 12,
    color: '#818283',
    marginLeft: 3,
    marginBottom: 5,
  },
  box__input: {
    borderWidth: 1,
    borderColor: 'rgba(16,16,16,0.3)',
    borderRadius: 8,
    padding: 10,
    height: 50,
    justifyContent: 'center',
  },
  box__input_opened: {
    borderBottomWidth: 0,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  box__input__label: {

  },
  box__open: {
    position: 'absolute',
    right: 20,
    bottom: 20
  },
  box__list: {
    position: 'absolute',
    top: 70,
    padding: 5,
    width: '100%',
    opacity: 0,
    zIndex: 200,
    elevation: 20,
    borderWidth: 1,
    borderColor: 'rgba(16,16,16,0.3)',
    borderTopWidth: 0,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
    backgroundColor: '#FFF'
  },
  box__list__item: {
    paddingVertical: 10,
    paddingHorizontal: 5
  },
  box__list_opened: {
    opacity: 1
  }
})
