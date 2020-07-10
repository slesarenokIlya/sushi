import React from 'react'
import {
  View,
  Image,
  ScrollView,
  TouchableWithoutFeedback,
  StyleSheet
} from 'react-native'

import Screen from '../../components/Screen'
import Text from '../../components/Text'
import Button from '../../components/Button'

import Header from '../components/Header'
import ItemImage from '../components/ItemImage'

import Item from './components/Item'

import {useLoadBasket, useLoadBasketOffers, useLoadItems} from '../../store'

export default ({navigation}) => {
  const allItems = useLoadItems();
  const _basket = useLoadBasket();
  const _offers = useLoadBasketOffers();
  const offers = allItems.filter(({id}) => _offers.includes(id));
  const basket = allItems.filter(({id}) => _basket.includes(id));



  var sum = basket.reduce((s, {price}) => price + s, 0);

  const onChangeClick = () => {

  }

  return (<Screen disableScroll>
    <Header title="Корзина" />
    <ScrollView style={styles.cont}
      bounces={false}
      showsVerticalScrollIndicator={false}
      overScrollMode="never">
      {basket.map((item, ind) => (<Item navigation={navigation} key={ind} item={item} onChangeClick={onChangeClick}/>))}

      <View style={styles.offers}>
        {offers.length ?
          <Text style={styles.offers__title}>Рекомендуем попробовать</Text> :
          undefined}
        {offers.map(({image, title, price}, ind) => (
          <TouchableWithoutFeedback onPress={() => navigation.navigate('menuTab', {
            screen: 'item',
            params: {item: offers[ind]}
          })}>
            <View key={ind} style={styles.offers__item}>
              <ItemImage style={styles.offers__item__image} source={image} />
              <View>
                <Text style={styles.offers__item__title}>{title}</Text>
                <Text style={styles.offers__item__price} type="bold">{price} ₽</Text>
              </View>
          </View>
          </TouchableWithoutFeedback>
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
