import React from 'react';
import {View, StyleSheet} from 'react-native';

import Button from '../../../components/Button';
import Card from '../../../components/Card';
import Text from '../../../components/Text';
import ItemImage from '../../components/ItemImage';

export default ({item}) => {
  if (!item) return <></>;
  const {title, list, weight, price, image} = item;
  return (
    <View style={styles.container}>
      <ItemImage style={styles.item__image} source={image} />
      <View
        style={{
          borderTopLeftRadius: 32,
          borderTopRightRadius: 32,
          elevation: 2,
          flex: 1,
          paddingTop: 20,
        }}>
        <View style={styles.item__content}>
          <Text style={styles.item__content__title}>{title}</Text>
          {list.map(({title, count}, ind) => (
            <Text
              key={ind}
              style={styles.item__content__list__item}
              type="light">
              • {title} – {count}
            </Text>
          ))}

          <Card withoutPadding style={{maxWidth: 100}}>
            <Text style={styles.item__content__weight}>{weight} гр</Text>
          </Card>
          <Button
            style={styles.item__content__button}
            noText
            onClick={() => {}}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <Text style={styles.item__content__button__text} type="bold">
                В корзину
              </Text>
              <Text style={styles.item__content__button__text} type="bold">
                {price} ₽
              </Text>
            </View>
          </Button>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    height: 1050,
  },
  closeButton: {
    width: 40,
    height: 40,
    margin: 20,
    marginBottom: 0,
    borderRadius: 20,
    elevation: 3,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  item__image: {
    width: '100%',
    height: '40%',
    resizeMode: 'contain',
  },
  item__content: {
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 30,
  },
  item__content__title: {
    fontSize: 24,
    marginLeft: 10,
    marginBottom: 15,
  },
  item__content__list: {
    marginBottom: 20,
  },
  item__content__list__item: {
    fontSize: 16,
  },
  item__content__weight: {
    fontSize: 14,
    padding: 10,
    textAlign: 'center',
  },
  item__content__button: {
    elevation: 1,
  },
  item__content__button__text: {
    fontSize: 18,
    color: '#FFF',
  },
});
