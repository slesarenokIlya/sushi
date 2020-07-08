import React from 'react'
import {
  View,
  Image,
  ScrollView,
  StyleSheet
} from 'react-native'

import Screen from '../../components/Screen'
import Button from '../../components/Button'
import Header from '../components/Header'

import Item from './components/Item'

import {useLoadBasket} from '../../store'

export default () => {
  const items = useLoadBasket();
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
    </ScrollView>
    <View style={styles.bottom}>
      <Button>Оформить заказ на {sum} ₽</Button>
    </View>
  </Screen>);
}

const styles = StyleSheet.create({
  cont: {
    marginBottom: 60,
    height: 0
  },
  bottom: {
    position: 'absolute',
    bottom: 10,
    left: 20,
    right: 20
  }
});
