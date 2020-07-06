import React from 'react'
import {
  View,
  Text,
  Image,
  StyleSheet
} from 'react-native'

import Screen from '../../components/Screen'
import Button from '../../components/Button'

import Header from '../components/Header'

import defaultImg from '../../img/profile-default.png'

export default ({navigation}) => {
  return (<Screen>
      <Header title="Профиль" />
      <View style={styles.box}>
        <Image style={styles.box__image} source={defaultImg} />
        <Text style={styles.box__title}>Давайте знакомиться!</Text>
        <Text style={styles.box__descr}>Подарим подарок на день рождения, сохраним адрес доставки и расскажем об акциях</Text>
        <Button style={styles.box__button} onClick={() => navigation.navigate('profile-2')}>Указать телефон</Button>
    </View>
  </Screen>);
}

const styles = StyleSheet.create({
  box: {
    paddingHorizontal: 20,
    alignItems: 'center'
  },
  box__image: {
    width: '100%',
    height: 300,
    resizeMode: 'contain',
  },
  box__title: {
    fontSize: 21,
    fontWeight: '600',
    marginVertical: 30
  },
  box__descr: {
    fontSize: 16,
    marginBottom: 40
  },
  box__button: {
    width: '80%'
  }
});
