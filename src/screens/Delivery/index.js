import React from 'react'
import {
  View,
  Text,
  TouchableWithoutFeedback,
  Image,
  StyleSheet
} from 'react-native'

import Screen from '../../components/Screen'
import Header from '../components/Header'

import {useLoadOrders} from '../../store'
import {getFont} from '../../utils'

const formatDate = () => {
  return '15.03.2020 в 06:45';
}

export default () => {
  const items = useLoadOrders();

  const onItemClick = () => {

  }

  return (<Screen>
    <Header title="Доставка" />
    <View style={styles.cont}>
      {items.map(({id, date, count, amount, status}, ind) => (
        <TouchableWithoutFeedback key={ind} onPress={onItemClick}>
          <View style={styles.items__item}>
            <View style={styles.items__item__cont}>
              <Text style={styles.items__item__title}>Заказ №{id}</Text>
              <Text style={[ styles.items__item__status, status ? styles.items__item__status_ready : undefined ]}>
                {status ? 'Выполнен' : 'Готовится'}
              </Text>
            </View>

            <View>
              <Text style={styles.items__item__text}>{formatDate(date)}</Text>
              <Text style={styles.items__item__text}>{count} позиций на сумму  {amount} ₽</Text>
            </View>
          </View>
      </TouchableWithoutFeedback>
    ))}
    </View>
  </Screen>);
}

const styles = StyleSheet.create({
  cont: {
    paddingHorizontal: 20
  },
  items__item: {
    borderBottomWidth: 1,
    borderColor: '#EBEBEA',
    paddingVertical: 10
  },
  items__item__cont: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10
  },
  items__item__title: {
    fontSize: 16,
    fontFamily: getFont(),
    fontWeight: '400',
    color: '#0D0802'
  },
  items__item__text: {
    fontSize: 13,
    fontFamily: getFont(),
    color: '#ADADB7',
    marginVertical: 2
  },
  items__item__status: {
    fontSize: 13,
    color: '#ADADB7'
  },
  items__item__status_ready: {
    color: '#D6271D'
  }
});
