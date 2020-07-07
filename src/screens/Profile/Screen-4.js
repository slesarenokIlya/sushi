import React, {useState} from 'react'
import {
  View,
  Image,
  StyleSheet
} from 'react-native'

import Screen from '../../components/Screen'
import Input from '../../components/Input'
import InputSelect from '../../components/InputSelect'
import DateInput from '../../components/DateInput'
import Button from '../../components/Button'

import Header from '../components/Header'

export default () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [birthday, setBirthday] = useState('');
  const [gender, setGender] = useState('');

  return (<Screen>
    <Header title="Настройки" buttonTitle="Готово" />

    <View style={styles.cont}>
      <Input value={name} onChange={setName} placeholder="Имя" />
      <Input value={phone} onChange={setPhone} placeholder="Телефон" />
      <DateInput value={birthday} onChange={setBirthday} placeholder="День рождения" />
      <InputSelect items={['Мужской', 'Женский']} value={gender} onChange={setGender} placeholder="Пол" />
    </View>

    <View style={styles.bottom}>
      <Button withoutBkg onClick={() => {}}>Выход</Button>
    </View>
  </Screen>);
}

const styles = StyleSheet.create({
  cont: {
    paddingBottom: 110
  },
  bottom: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 50,
    paddingHorizontal: 10
  },
});
