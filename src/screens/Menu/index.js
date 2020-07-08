import React, {useState, useEffect} from 'react'
import {
  View,
  ScrollView,
  StyleSheet,
  Dimensions
} from 'react-native'

import Text from '../../components/Text'
import Screen from '../../components/Screen'
import BottomScreen from '../../components/BottomScreen'
import Button from '../../components/Button'
import StickyScrollView from '../../components/StickyScrollView'

import {useLoadItems, useLoadOffers} from '../../store'

import Header from './components/Header'

import Offers from './components/Offers'
import Filter from './components/Filter'
import Item from './components/Item'
import OfferContent from './components/OfferContent'
import ItemContent from './components/ItemContent'

export default () => {
  const items = useLoadItems();
  const offers = useLoadOffers();
  const [ activeTab, setActiveTab ] = useState(0);
  const [ activeOffer, setActiveOffer ] = useState(null);
  const [ activeItem, setActiveItem ] = useState(null);

  return (<Screen disableScroll>
    <Header />
    <StickyScrollView style={{height: Dimensions.get('window').height - 170}}
      topContent={(
        <Offers items={offers} onClick={setActiveOffer}/>
      )}
      stickyContent={(
        <Filter onChange={setActiveTab} selected={activeTab}/>
      )}>
      {items.filter(({category}) => category === activeTab).map((item, ind) =>
        <Item key={ind} item={item} onClick={() => setActiveItem(ind)}/>
      )}
    </StickyScrollView>

    {activeOffer !== null ? (
      <BottomScreen minHeight={300}
        initialHeight={500}
        onClose={() => setActiveOffer(null)}
        bottomContent={(
          <Button>Показать</Button>
        )}>
        <OfferContent item={offers[activeOffer]}/>
      </BottomScreen>
    ) : (<></>)}

    {activeItem !== null ? (
      <View style={styles.itemContent}>
        <ItemContent item={items[activeItem]}
          onClose={() => setActiveItem(null)}
          onBasketAdd={() => {}}/>
      </View>
    ) : (<></>)}
  </Screen>)
}

const styles = StyleSheet.create({
  items: {
    height: 0,
  },
  itemContent: {
    ...StyleSheet.absoluteFill,
    zIndex: 10,
    elevation: 10
  }
})
