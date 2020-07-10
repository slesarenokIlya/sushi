import React from 'react'
import {
  View,
  Image,
  ScrollView,
  StyleSheet
} from 'react-native'

import Screen from '../../components/Screen'
import Text from '../../components/Text'
import Button from '../../components/Button'

import Header from '../components/Header'
import ItemImage from '../components/ItemImage'

import Item from './components/Item'

import {useLoadBasket, useLoadBasketOffers, useLoadItems} from '../../store'

export default () => {
  const items = useLoadBasket();
  const allItems = useLoadItems();
  const _offers = useLoadBasketOffers();
  const offers = allItems.filter(({id}) => _offers.includes(id));

  var sum = items.reduce((s, {price}) => price + s, 0);

  const onChangeClick = () => {

  }

  return (<Screen disableScroll>
    <Header title="Корзина" />
    <ScrollView style={styles.cont}
      bounces={false}
      showsVerticalScrollIndicator={false}
      overScrollMode="never">
      {items.map((item, ind) => (<Item key={ind} item={item} onChangeClick={onChangeClick}/>))}

      <View style={styles.offers}>
        {offers.length ?
          <Text style={styles.offers__title}>Рекомендуем попробовать</Text> :
          undefined}
        {offers.map(({image, title, price}, ind) => (
          <View key={ind} style={styles.offers__item}>
            <ItemImage style={styles.offers__item__image} source={image} />
            <View>
              <Text style={styles.offers__item__title}>{title}</Text>
              <Text style={styles.offers__item__price} type="bold">{price} ₽</Text>
            </View>
          </View>
        ))}
      </View>
    </ScrollView>
    <View style={styles.bottom}>
      <Button>Оформить заказ на {sum} ₽</Button>
    </View>
  </Screen>);
}

const styles = StyleSheet.create({
  cont: {
    marginBottom: 60,
    height: 0,
  },
  offers: {
    paddingHorizontal: 20
  },
  offers__title: {
    fontSize: 12,
    marginVertical: 10
  },
  offers__item: {
    flexDirection: 'row',
    marginVertical: 10
  },
  offers__item__image: {
    width: 75,
    height: 75,
    marginRight: 15
  },
  offers__item__title: {
    fontSize: 15
  },
  offers__item__price: {
    fontSize: 14,
    fontWeight: '700'
  },
  bottom: {
    position: 'absolute',
    bottom: 10,
    left: 20,
    right: 20
  }
});
