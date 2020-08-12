import React, {useState, createRef} from 'react';
import {
  View,
  ScrollView,
  TouchableWithoutFeedback,
  StyleSheet,
} from 'react-native';
import BottomSheet from 'reanimated-bottom-sheet';

import Screen from '../../components/Screen';
import Text from '../../components/Text';
import Button from '../../components/Button';
import Header from '../components/Header';
import ItemImage from '../components/ItemImage';
import ItemContent from '../Menu/components/ItemContent';
import Item from './components/Item';

import Arrow from '../../svg/item-content-arrow.svg';

import {useLoadBasket, useLoadBasketOffers, useLoadItems} from '../../store';

export default () => {
  const allItems = useLoadItems();
  const _basket = useLoadBasket();
  const _offers = useLoadBasketOffers();
  const offers = allItems.filter(({id}) => _offers.includes(id));
  const basket = allItems.filter(({id}) => _basket.includes(id));
  const [currentBottomSheet, setCurrentBottomSheet] = useState(false); // false for offers, true for menu items
  const [activeOffer, setActiveOffer] = useState(0);
  const [activeItem, setActiveItem] = useState(0);
  const sheetRef = createRef();

  var sum = basket.reduce((s, {price}) => price + s, 0);

  const onChangeClick = () => {};

  const onOpenOffer = id => {
    setCurrentBottomSheet(false);
    setActiveOffer(id);
    sheetRef.current.snapTo(0);
  };

  const onOpenMenu = id => {
    setCurrentBottomSheet(true);
    setActiveItem(id);
    sheetRef.current.snapTo(0);
  };

  return (
    <>
      {!!allItems.length && (
        <BottomSheet
          snapPoints={['93%', -50]}
          initialSnap={1}
          ref={sheetRef}
          renderContent={() =>
            currentBottomSheet ? (
              <ItemContent
                item={basket[activeItem]}
                onPress={() => sheetRef.current.snapTo(1)}
              />
            ) : (
              <ItemContent
                item={offers[activeOffer]}
                onPress={() => sheetRef.current.snapTo(1)}
              />
            )
          }
          renderHeader={() => (
            <View style={{backgroundColor: 'white', flex: 1}}>
              <Button
                withoutBkg
                style={styles.closeButton}
                onClick={() => sheetRef.current.snapTo(1)}
                withoutBkg
                noText>
                <Arrow />
              </Button>
            </View>
          )}
        />
      )}
      <Screen disableScroll>
        <Header title="Корзина" />
        <ScrollView
          style={styles.cont}
          bounces={false}
          showsVerticalScrollIndicator={false}
          overScrollMode="never">
          {basket.map((item, ind) => (
            <Item
              key={ind}
              item={item}
              onChangeClick={onChangeClick}
              onPress={() => onOpenMenu(ind)}
            />
          ))}

          <View style={styles.offers}>
            {offers.length ? (
              <Text style={styles.offers__title}>Рекомендуем попробовать</Text>
            ) : (
              undefined
            )}
            {offers.map(({image, title, price}, ind) => (
              <TouchableWithoutFeedback
                onPress={() => onOpenOffer(ind)}
                key={ind}>
                <View style={styles.offers__item}>
                  <ItemImage
                    style={styles.offers__item__image}
                    source={image}
                  />
                  <View>
                    <Text style={styles.offers__item__title}>{title}</Text>
                    <Text style={styles.offers__item__price} type="bold">
                      {price} ₽
                    </Text>
                  </View>
                </View>
              </TouchableWithoutFeedback>
            ))}
          </View>
        </ScrollView>
        <View style={styles.bottom}>
          <Button>Оформить заказ на {sum} ₽</Button>
        </View>
      </Screen>
    </>
  );
};

const styles = StyleSheet.create({
  cont: {
    marginBottom: 60,
    height: 0,
  },
  offers: {
    paddingHorizontal: 20,
  },
  offers__title: {
    fontSize: 12,
    marginVertical: 10,
  },
  offers__item: {
    flexDirection: 'row',
    marginVertical: 10,
  },
  offers__item__image: {
    width: 75,
    height: 75,
    marginRight: 15,
  },
  offers__item__title: {
    fontSize: 15,
  },
  offers__item__price: {
    fontSize: 14,
    fontWeight: '700',
  },
  bottom: {
    position: 'absolute',
    bottom: 10,
    left: 20,
    right: 20,
  },
  closeButton: {
    width: 40,
    height: 40,
    margin: 20,
    borderRadius: 20,
    elevation: 3,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
