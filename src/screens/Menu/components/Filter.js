import React from 'react'
import {
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  ScrollView
} from 'react-native'

import Text from '../../../components/Text'
import Button from '../../../components/Button'

import {ITEMS_TABS} from '../../../const'

export default ({onChange, selected}) => (
  <View style={styles.box}>
    <ScrollView horizontal bounces={false} showsHorizontalScrollIndicator={false}>
    {ITEMS_TABS.map((title, ind) => (
      <TouchableWithoutFeedback key={ind} onPress={() => onChange(ind)}>
        <View style={[ styles.box__item, selected === ind ? styles.box__item_active : undefined ]}>
          <Text style={[ styles.box__item__text, selected === ind ? styles.box__item__text_active : undefined ]}>{title}</Text>
        </View>
      </TouchableWithoutFeedback>
    ))}
    </ScrollView>
  </View>
)

const styles = StyleSheet.create({
  box: {
    flexDirection: 'row',
    paddingVertical: 10,
    backgroundColor: '#FFF'
  },
  box__item: {
    height: 30,
    marginHorizontal: 5,

    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    paddingHorizontal: 10
  },
  box__item_active: {
    backgroundColor: '#E30613',
  },
  box__item__text: {
    color: '#ADADB7',
    fontSize: 15,
    fontWeight: '600'
  },
  box__item__text_active: {
    color: '#FFF',
  }
})
