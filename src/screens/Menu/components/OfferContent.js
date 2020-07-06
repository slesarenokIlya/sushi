import React from 'react'
import {
  View,
  Text,
  Image,
  StyleSheet
} from 'react-native'

export default ({item: {title, descr, image}}) => (
  <View style={styles.box}>
    <Image style={styles.box__image} source={image} />
    <Text style={styles.box__title}>{title}</Text>
    <Text style={styles.box__descr}>{descr}</Text>
  </View>)

const styles = StyleSheet.create({
  box: {
    padding: 30,
  },
  box__image: {
    width: '100%',
    maxHeight: 100,
    borderRadius: 10
  },
  box__title: {
    fontSize: 17,
    fontWeight: '600',
    marginVertical: 20,
  },
  box__descr: {
    fontSize: 13,
    flexWrap: 'wrap'
  }
})
