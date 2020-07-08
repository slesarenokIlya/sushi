import React, {useState} from 'react'
import {
  View,
  Image,
  TouchableWithoutFeedback,
  StyleSheet
} from 'react-native'

import Text from '../../components/Text'
import Screen from '../../components/Screen'
import Input from '../../components/Input'
import InputSelect from '../../components/InputSelect'
import Button from '../../components/Button'
import Header from '../components/Header'

export default ({navigation}) => {
  const [ login, setLogin ] = useState('');
  const [ phone, setPhone ] = useState('');
  const [ gender, setGender ] = useState(0);
  const [ pwd, setPwd ] = useState('');
  const [ pwdRepeat, setPwdRepeat ] = useState('');

  const onReg = () => {
    //reg
    navigation.navigate('main');
  }

  return (<Screen>
    <Header title="Регистрация" />

    <View style={styles.cont}>
      <Input value={login} onChange={setLogin} placeholder="Ваш логин" />
      <Input value={phone} onChange={setPhone} placeholder="Телефон" />
      <InputSelect items={[ 'Мужской', 'Женский' ]} selected={gender} onSelect={setGender} placeholder="Пол" />
      <Input value={pwd} onChange={setPwd} placeholder="Пароль" secure/>
      <Input value={pwdRepeat} onChange={setPwdRepeat} placeholder="Повторите пароль" secure/>

      <Button style={styles.button} onClick={onReg}>Регистрация</Button>
    </View>

    <View style={styles.bottom}>

      <View style={styles.bottom__cont}>
        <Text style={styles.bottom__text}>Уже есть аккаунт?</Text>

        <TouchableWithoutFeedback onPress={() => navigation.navigate('signin')}><View>
          <Text style={[ styles.bottom__text, styles.bottom__touchText ]}>Войдите</Text>
        </View></TouchableWithoutFeedback>
      </View>
    </View>
  </Screen>);
}

const styles = StyleSheet.create({
  cont: {
    paddingHorizontal: 20,
    paddingBottom: 50
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
    height: 50
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
