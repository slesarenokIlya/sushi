import React from 'react'
import {
  View,
  Image,
  TouchableOpacity,
  StyleSheet
} from 'react-native'

import Text from '../../../components/Text'
import Button from '../../../components/Button'
import List from '../../../components/List'
import ShadowView from '../../../components/ShadowView'
import Card from '../../../components/Card'
import BottomScreen from '../../../components/BottomScreen'

import ItemImage from '../../components/ItemImage'

import Arrow from '../../../svg/item-content-arrow.svg'

export default ({item: {title, list, weight, price, image}, onClose, onBasketAdd}) => (
  <View style={styles.item}>
    <Button style={styles.item__close} onClick={onClose} withoutBkg noText>
      <Arrow />
    </Button>

    <ItemImage style={styles.item__image} source={image} />

    <BottomScreen onClose={() => {}}
      maxHeight={360} minHeight={360}
      noClose noCover noOverScroll
      hitboxComponent={() => (<></>)}
      bottomContent={(
        <Button style={styles.item__content__button} noText onClick={onBasketAdd}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={styles.item__content__button__text} type="bold">В корзину</Text>
            <Text style={styles.item__content__button__text} type="bold">{price} ₽</Text>
          </View>
        </Button>
      )}>
      <View style={styles.item__content}>
        <Text style={styles.item__content__title}>{title}</Text>
        <List style={styles.item__content__list}>
          {list.map(({title, count}, ind) => (
            <Text key={ind} style={styles.item__content__list__item} type="light">
              {title} – {count}
            </Text>
          ))}
        </List>

        <Card withoutPadding style={{maxWidth: 100}}>
          <Text style={styles.item__content__weight}>{weight} гр</Text>
        </Card>
      </View>
    </BottomScreen>
  </View>)

const styles = StyleSheet.create({
  item: {
    width: '100%',
    height: '100%',
    backgroundColor: '#FFF',
  },
  item__close:{
    width: 40,
    height: 40,
    backgroundColor: '#FFF',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
    //position: 'absolute',
    marginTop: 20,
    marginLeft: 20,
  },
  item__image: {
    width: '100%',
    height: '40%',
    resizeMode: 'contain',
  },
  item__content: {
    paddingVertical: 10,
    paddingHorizontal: 30,
  },
  item__content__title: {
    fontSize: 24,
    marginLeft: 10,
    marginBottom: 15
  },
  item__content__list: {
    marginBottom: 20
  },
  item__content__list__item: {
    fontSize: 16,
  },
  item__content__weight: {
    fontSize: 14,
    padding: 10,
    textAlign: 'center'
  },
  item__content__button: {
    marginHorizontal: 20
  },
  item__content__button__text: {
    fontSize: 18,
    color: '#FFF'
  }
})
