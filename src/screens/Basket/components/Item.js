import React from 'react'
import {
  View,
  Text,
  Image,
  StyleSheet
} from 'react-native'

import Card from '../../../components/Card'
import Button from '../../../components/Button'

import ItemStubImg from '../../../svg/item-stub.svg'

export default ({item: {title, descr, weight, price, image}, onChangeClick}) => (
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
      <Button style={styles.item__change} onClick={onChangeClick}
        withoutBkg withBorder>Изменить</Button>
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
    fontSize: 17,
    fontWeight: '600',
    color: '#0D0802'
  },
  item__descr: {
    fontSize: 14,
    marginVertical: 10,
    fontWeight: '300'
  },
  item__weight: {
    fontSize: 14,
    fontWeight: '300'
  },
  item__change: {
    height: 30,
  }
})
