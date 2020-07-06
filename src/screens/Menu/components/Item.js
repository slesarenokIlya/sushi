import React from 'react'
import {
  View,
  Text,
  Image,
  StyleSheet
} from 'react-native'

import Card from '../../../components/Card'

import ItemStubImg from '../../../svg/item-stub.svg'

export default ({item: {title, descr, weight, price, image}}) => (
  <View style={styles.item}>
    <Card>
      {image ?
        <Image style={styles.item__image} source={image} />
        : <View style={styles.item__image}><ItemStubImg /></View>}
      </Card>
    <View style={styles.item__cont}>
      <View>
        <Text style={styles.item__title}>{title}</Text>
        <Text style={styles.item__descr}>{descr}</Text>
        <Text style={styles.item__weight}>{weight} гр</Text>
      </View>
      <View style={styles.item__price}>
        <Text style={styles.item__price__text}>{price} ₽</Text>
      </View>
    </View>
  </View>)

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    width: '100%',
    margin: 10
  },
  item__cont: {
    flex: 1,
    justifyContent: 'space-between',
    padding: 10
  },
  item__image: {
    height: 115,
    width: 115,
    alignItems: 'center',
    justifyContent: 'center'
  },
  item__title: {
    fontSize: 30,
    fontWeight: '600',
  },
  item__descr: {
    fontSize: 16,
    marginVertical: 10
  },
  item__weight: {
    fontSize: 14
  },
  item__price: {
    borderWidth: 1,
    borderColor: '#F00',
    borderRadius: 8,
    height: 30,
    justifyContent: 'center',
    width: 100
  },
  item__price__text: {
    fontWeight: '600',
    textAlign: 'center',
    fontSize: 16
  },
})
