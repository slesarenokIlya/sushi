import React, {useState} from 'react'
import {
  View,
  TouchableWithoutFeedback,
  StyleSheet
} from 'react-native'

import Text from './Text'

import OpenArrow from '../svg/open-arrow.svg'

export default ({items, selected, onSelect}) => {
  const [listOpened, setListOpened] = useState(false);

  return (<View style={styles.box}>
    <TouchableWithoutFeedback onPress={() => setListOpened( !listOpened )}>
      <View style={styles.box__cont}>
        <Text style={styles.box__label}>{items[selected]}</Text>
        <OpenArrow />
      </View>
    </TouchableWithoutFeedback>

    <View style={[ styles.box__list, listOpened ? styles.box__list_opened : {} ]}>
      {items.map((item, ind) => (
        <View key={ind} style={styles.box__list__item}>
          <Text>{item}</Text>
        </View>
      ))}
    </View>
  </View>)
}

const styles = StyleSheet.create({
  box: {
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 200,
    elevation: 20,
  },
  box__cont: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  box__label: {
    fontWeight: '600',
    fontSize: 16,
    marginRight: 10
  },
  box__list: {
    position: 'absolute',
    top: 40,
    padding: 5,
    borderRadius: 6,
    display: 'none',
    borderWidth: 1,
    borderColor: '#D5D8DD',
    backgroundColor: '#FFF'
  },
  box__list__item: {
    padding: 5
  },
  box__list_opened: {
    display: 'flex'
  }
})
