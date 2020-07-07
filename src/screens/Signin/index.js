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
import Header from '../components/Header'

export default ({navigation}) => {
  const [ login, setLogin ] = useState('');
  const [ pwd, setPwd ] = useState('');

  const onLogin = () => {
    //login
    navigation.navigate('main');
  }

  return (<Screen>
    <Header title="Войти" />

    <View style={styles.cont}>
      <Input value={login} onChange={setLogin} placeholder="Ваш логин" />
      <Input value={pwd} onChange={setPwd} placeholder="Пароль" secure/>

      <Button style={styles.button} onClick={onLogin}>Войти</Button>
    </View>

    <View style={styles.bottom}>
      <TouchableWithoutFeedback onPress={() => navigation.navigate('restore')}>
        <Text style={[ styles.bottom__text, styles.bottom__touchText ]}>Забыли пароль?</Text>
      </TouchableWithoutFeedback>

      <View style={styles.bottom__cont}>
        <Text style={styles.bottom__text}>Еще нет аккаунта?</Text>

        <TouchableWithoutFeedback onPress={() => navigation.navigate('signup', {initial: true})}>
          <Text style={[ styles.bottom__text, styles.bottom__touchText ]}>Зарегистрируйтесь</Text>
        </TouchableWithoutFeedback>
      </View>
    </View>
  </Screen>);
}

const styles = StyleSheet.create({
  cont: {
    paddingHorizontal: 20,
    marginTop: 50,
    paddingBottom: 100
  },
  button: {
    marginTop: 30
  },
  bottom: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    alignItems: 'center',
    height: 100
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
