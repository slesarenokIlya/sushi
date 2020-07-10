import React, {useState} from 'react'
import {
  View,
  TouchableWithoutFeedback,
  Image,
  StyleSheet
} from 'react-native'

import Text from '../../components/Text'
import Screen from '../../components/Screen'
import Header from '../components/Header'

import Item from './components/Item'

import {useLoadOrders} from '../../store'

const formatDate = () => {
  return '15.03.2020 в 06:45';
}

export default ({navigation}) => {
  const items = useLoadOrders();
  const [ itemShow, setItemShow ] = useState(null);

  const onItemClick = ind => {
    setItemShow(ind);
  }

  return (<Screen>
    <Header title="Доставка" />
    <View style={styles.cont}>
      {items.map(({id, date, count, amount, status}, ind) => (
        <TouchableWithoutFeedback key={ind} onPress={() => onItemClick(ind)}>
          <View style={styles.items__item}>
            <View style={styles.items__item__cont}>
              <Text style={styles.items__item__title}>Заказ №{id}</Text>
              <Text style={[ styles.items__item__status, status ? styles.items__item__status_done : undefined ]}>
                {status ? 'Выполнен' : 'Готовится'}
              </Text>
            </View>

            <View>
              <Text style={styles.items__item__text} type="light">{formatDate(date)}</Text>
              <Text style={styles.items__item__text} type="light">{count} позиций на сумму  {amount} ₽</Text>
            </View>
          </View>
      </TouchableWithoutFeedback>
    ))}
    </View>

    {itemShow !== null ? <Item navigation={navigation} item={items[itemShow]} onClose={() => setItemShow(null)} /> : undefined}
  </Screen>);
}

const styles = StyleSheet.create({
  cont: {
    paddingHorizontal: 20
  },
  items__item: {
    borderBottomWidth: 1,
    borderColor: '#EBEBEA',
    paddingVertical: 20
  },
  items__item__cont: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5
  },
  items__item__title: {
    fontSize: 16,
    fontWeight: '400',
    color: '#0D0802'
  },
  items__item__text: {
    fontSize: 13,
    color: '#ADADB7',
    marginVertical: 2
  },
  items__item__status: {
    fontSize: 13,
    color: '#D6271D'
  },
  items__item__status_done: {
    color: '#ADADB7',
  }
});
