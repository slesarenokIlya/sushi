import React from 'react'
import {
  View,
  Image,
  StyleSheet
} from 'react-native'

import Screen from '../../components/Screen'
import Button from '../../components/Button'
import Header from '../components/Header'

import Item from './components/Item'

import {useLoadBasket} from '../../store'

export default () => {
  const items = useLoadBasket();

  const onChangeClick = () => {

  }

  return (<Screen>
    <Header title="Корзина" />
    <View>
      {items.map((item, ind) => (<Item item={item} onChangeClick={onChangeClick}/>))}
    </View>
  </Screen>);
}

const styles = StyleSheet.create({

});
