import React from 'react';
import {View, TouchableWithoutFeedback, StyleSheet} from 'react-native';

import Text from '../../../components/Text';
import Button from '../../../components/Button';

import ItemImage from '../../components/ItemImage';

export default ({item, onChangeClick, onPress}) => {
  const {title, descr, weight, price, image} = item;

  return (
    <View style={styles.item}>
      <TouchableWithoutFeedback onPress={() => onPress()}>
        <View>
          <ItemImage style={styles.item__image} source={image} />
        </View>
      </TouchableWithoutFeedback>
      <View style={styles.item__cont}>
        <View>
          <Text style={styles.item__title}>{title}</Text>
          <Text style={styles.item__descr} type="light">
            {descr}
          </Text>
          <Text style={styles.item__weight} type="light">
            {weight} гр
          </Text>
        </View>

        <Button
          style={styles.item__change}
          onClick={onChangeClick}
          withoutBkg
          withBorder>
          Изменить
        </Button>

        <View style={styles.item__bottom}>
          <View style={styles.item__bottom__count}>
            <Button
              style={styles.item__bottom__count__button}
              onClick={() => {}}
              withoutBkg
              withBorder>
              -
            </Button>
            <Text style={styles.item__bottom__count__value}>1</Text>
            <Button
              style={styles.item__bottom__count__button}
              onClick={() => {}}
              withoutBkg
              withBorder>
              +
            </Button>
          </View>
          <Text style={styles.item__bottom__price}>{price} ₽</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    width: '100%',
    margin: 10,
    borderBottomWidth: 1,
    borderColor: '#EBEBEA',
  },
  item__cont: {
    flex: 1,
    justifyContent: 'space-between',
    padding: 10,
  },
  item__image: {
    height: 115,
    width: 115,
    alignItems: 'center',
    justifyContent: 'center',
  },
  item__title: {
    fontSize: 17,
    fontWeight: '600',
    color: '#0D0802',
  },
  item__descr: {
    fontSize: 12,
    marginBottom: 10,
    fontWeight: '300',
  },
  item__weight: {
    fontSize: 12,
    fontWeight: '300',
  },
  item__change: {
    height: 30,
    marginTop: 20,
  },
  item__bottom: {
    flexDirection: 'row',
    marginTop: 20,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  item__bottom__count: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  item__bottom__count__button: {
    width: 30,
    height: 30,
    paddingHorizontal: 0,
  },
  item__bottom__count__value: {
    marginHorizontal: 12,
  },
  item__bottom__price: {},
});
