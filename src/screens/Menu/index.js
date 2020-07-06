import React, {useState, useEffect} from 'react'
import {
  View,
  Text,
  ScrollView,
  StyleSheet
} from 'react-native'

import Screen from '../../components/Screen'
import BottomScreen from '../../components/BottomScreen'
import Button from '../../components/Button'

import {useLoadItems} from '../../store'
import {useLoadOffers} from '../../store'

import Header from './components/Header'

import Offers from './components/Offers'
import Filter from './components/Filter'
import Item from './components/Item'
import OfferContent from './components/OfferContent'

export default () => {
  const items = useLoadItems();
  const offers = useLoadOffers();
  const [ activeTab, setActiveTab ] = useState(0);
  const [ activeOffer, setActiveOffer ] = useState(null);

  return (<Screen>
    <Header />
    <Offers items={offers} onClick={setActiveOffer}/>
    <Filter onChange={setActiveTab} selected={activeTab}/>
    <ScrollView style={styles.items}
      bounces={false}
      showsVerticalScrollIndicator={false}>
      {items.filter(({category}) => category === activeTab).map((item, ind) => <Item key={ind} item={item}/>)}
    </ScrollView>

    {activeOffer !== null ? (
      <BottomScreen minHeight={120}
        initialHeight={500}
        onClose={() => setActiveOffer(null)}
        bottomContent={(
          <Button>Показать</Button>
        )}>
        <OfferContent item={offers[activeOffer]}/>
      </BottomScreen>
    ) : (<></>)}
  </Screen>)
}

const styles = StyleSheet.create({
  items: {
    height: 0,
  },
})
