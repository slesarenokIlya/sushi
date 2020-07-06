import React, {useState} from 'react'
import {
  View,
  Image,
  StyleSheet
} from 'react-native'

import Screen from '../../components/Screen'
import Input from '../../components/Input'
import Button from '../../components/Button'

import Header from '../components/Header'

export default () => {
  const [name, setName] = useState('');

  return (<Screen>
    <Header title="Настройки" buttonTitle="Готово" />

    <Input value={name} onChange={setName} placeholder="Имя" />
    <Input value={name} onChange={setName} placeholder="Имя" />
    <Input value={name} onChange={setName} placeholder="Имя" />
    <Input value={name} onChange={setName} placeholder="Имя" />

    <View style={styles.bottom}>
      <Button withoutBkg onClick={() => {}}>Выход</Button>
    </View>
  </Screen>);
}

const styles = StyleSheet.create({
  bottom: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 50,
    paddingHorizontal: 10
  },
});
