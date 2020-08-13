import React, {useState, createRef, useEffect} from 'react';
import {
  View,
  TouchableWithoutFeedback,
  ScrollView,
  StyleSheet,
} from 'react-native';
import BottomSheet from 'reanimated-bottom-sheet';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import Text from '../../components/Text';
import Screen from '../../components/Screen';
import Header from '../components/Header';
import Card from '../../components/Card';
import ItemImage from '../components/ItemImage';

import {loadOrders, loadItems} from '../../store';

const formatDate = () => {
  return '15.03.2020 в 06:45';
};

export default () => {
  const sheetRef = createRef();
  const [deliveryItems, setDeliveryItems] = useState([]);
  const [allItems, setAllItems] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [itemShow, setItemShow] = useState(0);

  useEffect(() => {
    Promise.all([loadOrders(), loadItems()]).then(d => {
      setDeliveryItems(d[0].filter(item => item.status));
      setAllItems(d[1]);
      setLoaded(true);
    });
  }, []);

  const renderContent = () => {
    const {id, status, details, summary, deliveryTime, items} = deliveryItems[
      itemShow
    ];
    return (
      <View style={styles.sheet_cont}>
        <View style={{alignSelf: 'center'}}>
          <Icon name="chevron-down" size={40} color="#EBEBEA" />
        </View>
        <Text style={styles.title}>Заказ №{id}</Text>
        <Card style={styles.status}>
          <Text
            style={[
              styles.status__left,
              status ? styles.status__left_done : undefined,
            ]}
            type="light">
            {status ? 'Выполнен' : 'Готовится'}
          </Text>
          <Text style={styles.status__right} type="light">
            Доставка через ~{deliveryTime} минут
          </Text>
        </Card>

        <View style={styles.details}>
          <Text style={styles.details__title} type="bold">
            Детали заказа:
          </Text>
          <Text style={styles.details__value} type="light">
            {details}
          </Text>
        </View>

        <View style={styles.summary}>
          <View style={styles.summary__row}>
            <Text style={styles.summary__row__title} type="light">
              Бонусы за заказ
            </Text>
            <Text style={styles.summary__row__value} type="bold">
              {summary.bonuses} бонусов
            </Text>
          </View>
          <View style={styles.summary__row}>
            <Text style={styles.summary__row__title} type="light">
              Сумма заказа
            </Text>
            <Text style={styles.summary__row__value} type="bold">
              {summary.price} ₽
            </Text>
          </View>
          <View style={styles.summary__row}>
            <Text style={styles.summary__row__title} type="light">
              Стоимость доставки
            </Text>
            <Text style={styles.summary__row__value} type="bold">
              {summary.delivery === 0 ? 'Бесплатно' : summary.delivery}
            </Text>
          </View>
          <View style={styles.summary__row}>
            <Text style={styles.summary__row__title} type="light">
              Персональная скидка
            </Text>
            <Text style={styles.summary__row__value} type="bold">
              {summary.sale} ₽
            </Text>
          </View>
          <View style={styles.summary__row}>
            <Text style={styles.summary__row__title} type="light">
              Итого
            </Text>
            <Text style={styles.summary__row__value} type="bold">
              {summary.price + summary.delivery - summary.sale} ₽
            </Text>
          </View>
        </View>
        <View style={styles.list}>
          <Text style={styles.list__title}>В заказе:</Text>
          {items.map(({id, count}, ind) => {
            var item = allItems.find(({id: _id}) => _id === id);
            return !item ? (
              undefined
            ) : (
              <TouchableWithoutFeedback onPress={() => {}} key={ind}>
                <View style={styles.list__item}>
                  <ItemImage
                    style={styles.list__item__image}
                    source={item.image}
                  />
                  <View style={styles.list__item__cont}>
                    <Text style={styles.list__item__title} type="light">
                      {item.title}
                    </Text>
                    <Text style={styles.list__item__weight} type="light">
                      {item.weight} гр
                    </Text>
                    <Text style={styles.list__item__price}>
                      {item.price} ₽ x {count}
                    </Text>
                  </View>
                </View>
              </TouchableWithoutFeedback>
            );
          })}
        </View>
      </View>
    );
  };

  const onOpen = id => {
    setItemShow(id);
    sheetRef.current.snapTo(0);
  };

  return (
    <>
      {loaded && (
        <BottomSheet
          snapPoints={['85%', -50]}
          renderContent={renderContent}
          ref={sheetRef}
          initialSnap={1}
        />
      )}
      <Screen>
        <Header title="Доставка" />
        <View style={styles.cont}>
          {deliveryItems.map(({id, date, count, amount, status}, ind) => (
            <TouchableWithoutFeedback key={ind} onPress={() => onOpen(ind)}>
              <View style={styles.items__item}>
                <View style={styles.items__item__cont}>
                  <Text style={styles.items__item__title}>Заказ №{id}</Text>
                  <Text
                    style={[
                      styles.items__item__status,
                      status ? styles.items__item__status_done : undefined,
                    ]}>
                    {status ? 'Выполнен' : 'Готовится'}
                  </Text>
                </View>

                <View>
                  <Text style={styles.items__item__text} type="light">
                    {formatDate(date)}
                  </Text>
                  <Text style={styles.items__item__text} type="light">
                    {count} позиций на сумму {amount} ₽
                  </Text>
                </View>
              </View>
            </TouchableWithoutFeedback>
          ))}
        </View>
      </Screen>
    </>
  );
};

const styles = StyleSheet.create({
  cont: {
    paddingHorizontal: 20,
  },
  items__item: {
    borderBottomWidth: 1,
    borderColor: '#EBEBEA',
    paddingVertical: 20,
  },
  items__item__cont: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  items__item__title: {
    fontSize: 16,
    fontWeight: '400',
    color: '#0D0802',
  },
  items__item__text: {
    fontSize: 13,
    color: '#ADADB7',
    marginVertical: 2,
  },
  items__item__status: {
    fontSize: 13,
    color: '#D6271D',
  },
  items__item__status_done: {
    color: '#ADADB7',
  },
  sheet_cont: {
    paddingHorizontal: 20,
    // paddingTop: 20,
    marginTop: 25,
    // paddingBottom: '20%',
    // zIndex: 10,
    elevation: 5,
    height: '100%',
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    // elevation: 20,
    // zIndex: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: '400',
    marginBottom: 10,
  },
  status: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
  status__left: {
    color: '#D6271D',
    fontSize: 13,
  },
  status__left_done: {
    color: '#ADADB7',
  },
  status__right: {
    fontSize: 13,
  },
  details: {
    paddingVertical: 20,
  },
  details__title: {
    fontSize: 16,
    marginBottom: 10,
  },
  details__value: {
    fontSize: 13,
    lineHeight: 20,
    fontWeight: '100',
  },
  summary: {
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#EBEBEA',
    paddingVertical: 20,
  },
  summary__row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 3,
  },
  summary__row__title: {
    fontWeight: '100',
  },
  summary__row__value: {},
  list: {},
  list__title: {
    marginTop: 20,
    fontSize: 16,
  },
  list__item: {
    flexDirection: 'row',
    marginVertical: 10,
  },
  list__item__image: {
    width: 80,
    height: 80,
    marginRight: 20,
    resizeMode: 'contain',
  },
  list__item__cont: {
    flex: 1,
  },
  list__item__title: {
    fontSize: 17,
  },
  list__item__weight: {
    fontSize: 9,
  },
  list__item__price: {
    fontSize: 16,
    marginTop: 10,
  },
});