import React, {useState, useRef} from 'react';
import {useWindowDimensions, StyleSheet, View} from 'react-native';
import BottomSheet from 'reanimated-bottom-sheet';

import Screen from '../../components/Screen';
import StickyScrollView from '../../components/StickyScrollView';
import Arrow from '../../svg/item-content-arrow.svg';
import Button from '../../components/Button';

import Header from './components/Header';
import Offers from './components/Offers';
import Filter from './components/Filter';
import Item from './components/Item';
import OfferContent from './components/OfferContent';
import ItemContent from './components/ItemContent';

import {offers, items} from '../../_data';

export default () => {
  const [activeTab, setActiveTab] = useState(0);
  const [activeItem, setActiveItem] = useState(0);
  const [activeOffer, setActiveOffer] = useState(0);
  const [currentBottomSheet, setCurrentBottomSheet] = useState(false); // false for offers, true for menu items
  const sheetRef = useRef();
  const height = useWindowDimensions().height - 170;

  // console.log(params);

  const onOpenOffer = id => {
    setCurrentBottomSheet(false);
    setActiveOffer(id);
    sheetRef.current.snapTo(0);
  };

  const onOpenMenu = id => {
    setCurrentBottomSheet(true);
    setActiveItem(id);
    // console.log(id);
    sheetRef.current.snapTo(0);
  };

  return (
    <>
      <BottomSheet
        snapPoints={currentBottomSheet ? ['93%', -50] : [500, -50]}
        initialSnap={1}
        ref={sheetRef}
        renderContent={() =>
          currentBottomSheet ? (
            <ItemContent
              item={items[activeItem]}
              onPress={() => sheetRef.current.snapTo(1)}
            />
          ) : (
            <OfferContent item={offers[activeOffer]} />
          )
        }
        renderHeader={() =>
          currentBottomSheet ? (
            <View style={{backgroundColor: 'white', flex: 1}}>
              <Button
                withoutBkg
                style={style.closeButton}
                onClick={() => sheetRef.current.snapTo(1)}
                withoutBkg
                noText>
                <Arrow />
              </Button>
            </View>
          ) : null
        }
      />
      <Screen disableScroll>
        <Header />
        <StickyScrollView
          style={{height}}
          topContent={<Offers items={offers} onClick={onOpenOffer} />}
          stickyContent={
            <Filter onChange={setActiveTab} selected={activeTab} />
          }>
          {items
            .filter(({category}) => category === activeTab)
            .map((item, ind) => (
              <Item
                key={ind}
                item={item}
                onClick={() => onOpenMenu(item.id - 1)}
              />
            ))}
        </StickyScrollView>
      </Screen>
    </>
  );
};

const style = StyleSheet.create({
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
