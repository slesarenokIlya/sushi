import React, {useState} from 'react'
import {
  View,
  Text,
  Image,
  StyleSheet
} from 'react-native'

import Screen from '../../components/Screen'
import Button from '../../components/Button'

import PhoneInput from './components/PhoneInput'
import Header from '../components/Header'

import {apiCall} from '../../utils'

export default ({navigation}) => {
  const [phone, setPhone] = useState('');

  const onContinue = () => {
    apiCall('', {phone}).then(() => {
      navigation.navigate('profile-3', {phone, timeout: 3});
    });
  }

  return (<Screen>
      <Header title="Укажите телефон" />
      <View style={styles.box}>
        <Text style={styles.box__descr}>Сможете быстро оформлять заказы и использовать бонусы</Text>
        <PhoneInput value={phone} onChange={setPhone}/>
        <Button style={styles.box__button} onClick={onContinue}>Продолжить</Button>
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
  box__descr: {
    fontSize: 15,
    marginBottom: 40,
    color: '#0D0802',
    textAlign: 'center',
    lineHeight: 24
  },
  box__button: {
    width: '100%'
  }
});