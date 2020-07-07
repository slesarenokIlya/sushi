import React from 'react'
import {
  View,
  Image,
  StyleSheet
} from 'react-native'

import Text from '../../../components/Text'
import Card from '../../../components/Card'
import Button from '../../../components/Button'

import ItemStubImg from '../../../svg/item-stub.svg'

export default ({item: {title, descr, weight, price, image}, onChangeClick}) => {

  return (<View style={styles.item}>
    <View>
      {image ?
        <Image style={styles.item__image} source={image} />
        : <View style={styles.item__image}><ItemStubImg /></View>}
    </View>
    <View style={styles.item__cont}>
      <View>
        <Text style={styles.item__title}>{title}</Text>
        <Text style={styles.item__descr} type="light">{descr}</Text>
        <Text style={styles.item__weight} type="light">{weight} гр</Text>
      </View>

      <Button style={styles.item__change} onClick={onChangeClick}
        withoutBkg withBorder>Изменить</Button>

      <View style={styles.item__bottom}>
        <View style={styles.item__bottom__count}>
          <Button style={styles.item__bottom__count__button} onClick={() => {}} withoutBkg withBorder>-</Button>
          <Text style={styles.item__bottom__count__value}>1</Text>
          <Button style={styles.item__bottom__count__button} onClick={() => {}} withoutBkg withBorder>+</Button>
        </View>
        <Text style={styles.item__bottom__price}>{price} ₽</Text>
      </View>

    </View>
  </View>)
}

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
    fontSize: 12,
    marginBottom: 10,
    fontWeight: '300'
  },
  item__weight: {
    fontSize: 12,
    fontWeight: '300'
  },
  item__change: {
    height: 30,
    marginTop: 20
  },
  item__bottom: {
     flexDirection: 'row',
     marginTop: 20,
     justifyContent: 'space-between',
     alignItems: 'center'
  },
  item__bottom__count: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  item__bottom__count__button: {
    width: 30,
    height: 30,
    paddingHorizontal: 0
  },
  item__bottom__count__value: {
    marginHorizontal: 12
  },
  item__bottom__price: {

  }
})
