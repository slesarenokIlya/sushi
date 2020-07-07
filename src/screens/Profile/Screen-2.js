import React, {useState} from 'react'
import {
  View,
  Image,
  StyleSheet
} from 'react-native'

import Text from '../../components/Text'
import Screen from '../../components/Screen'
import Button from '../../components/Button'
import PhoneInput from '../../components/PhoneInput'

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
        <Text style={styles.box__descr} type="light">Сможете быстро оформлять заказы и использовать бонусы</Text>
        <PhoneInput value={phone} onChange={setPhone}/>
    </View>

    <View style={styles.bottom}>
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
  bottom: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20
  },
  box__button: {

  }
});
