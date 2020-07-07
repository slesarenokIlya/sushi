import React from 'react'
import {
  View,
  Image,
  StyleSheet
} from 'react-native'

import Text from '../../components/Text'
import Screen from '../../components/Screen'
import Button from '../../components/Button'

import Header from '../components/Header'

import defaultImg from '../../img/profile-default.png'

export default ({navigation}) => {
  return (<Screen>
      <Header title="Профиль" />
      <View style={styles.box}>
        <Image style={styles.box__image} source={defaultImg} />
        <Text style={styles.box__title} type="bold">Давайте знакомиться!</Text>
        <Text style={styles.box__descr} type="light">Подарим подарок на день рождения, сохраним адрес доставки и расскажем об акциях</Text>
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
    height: 260,
    resizeMode: 'contain',
  },
  box__title: {
    fontSize: 21,
    fontWeight: '700',
    marginTop: 30,
    marginBottom: 10
  },
  box__descr: {
    fontSize: 16,
    marginBottom: 40,
    textAlign: 'center',
  },
  box__button: {
    minWidth: 240
  }
});
