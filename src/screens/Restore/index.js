import React, {useState} from 'react'
import {
  View,
  Image,
  Text,
  TouchableWithoutFeedback,
  StyleSheet
} from 'react-native'

import Screen from '../../components/Screen'
import Input from '../../components/Input'
import Button from '../../components/Button'
import CodeInput from '../../components/CodeInput'
import Header from '../components/Header'

import {apiCall, getFont} from '../../utils'

export default ({navigation}) => {
  const [ sended, setSended ] = useState(false);
  const [ phone, setPhone ] = useState('');
  const [ code, setCode ] = useState('');

  const onSubmit = () => {
    if( sended ){
      apiCall('/sendCode', {code}).then(r => {
        navigation.navigate('main');
      });
    } else {
      apiCall('/getCode').then(r => {
        setSended(true);
      });
    }
  }

  return (<Screen>
    <Header title="Восстановление пароля" />

    <View style={styles.cont}>
      <Input value={phone} onChange={setPhone} placeholder="Ваш телефон" />

      {sended ? (<>
        <View style={styles.text}>
          <Text style={styles.text__title}>Подтверждение кодом</Text>
          <Text style={styles.text__descr}>На ваш телефон придет СМС с кодом подтверждения регистрации</Text>
        </View>
        <CodeInput value={code} onChange={setCode} codeLength={8}/>
      </>) : undefined}

      <Button style={styles.button} onClick={onSubmit}>{sended ? 'Восстановить' : 'Отправить код'}</Button>
    </View>
  </Screen>);
}

const styles = StyleSheet.create({
  cont: {
    paddingHorizontal: 20,
    marginTop: 10,
    paddingBottom: 60
  },
  text: {
    maxWidth: 250
  },
  text__title: {
    fontSize: 18,
    color: '#0D0802',
    marginTop: 20,
    fontFamily: getFont('bold')
  },
  text__descr: {
    fontSize: 13,
    color: '#1D1C1B',
    marginVertical: 15,
    fontFamily: getFont()
  },
  button: {
    marginTop: 30
  },
  bottom: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    alignItems: 'center'
  },
  bottom__cont: {
    flexDirection: 'row'
  },
  bottom__text: {
    fontSize: 16,
    color: '#1D1C1B',
    marginVertical: 8,
    marginHorizontal: 5
  },
  bottom__touchText: {
    color: '#E32913',
  }
});
