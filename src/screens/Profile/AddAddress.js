import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import Screen from '../../components/Screen';
import Text from '../../components/Text';
import Header from '../components/Header';
import Input from '../../components/Input';

import {CITIES} from '../../const.js';

export default ({onSubmit}) => {
  const [street, setStreet] = useState('');
  const [house, setHouse] = useState('');
  const [apartment, setApartment] = useState('');
  const [floor, setFloor] = useState('');
  const [entrance, setEntrance] = useState('');
  const [error, setError] = useState(false);

  const navigation = useNavigation();

  const onPress = () => {
    if (!street || !house) {
      setError(true);
      return;
    } else {
      let address = `${CITIES[0].value}, улица ${street}, ${house}`;
      address += !!entrance ? `, подъезд ${entrance}` : '';
      address += !!floor ? `, этаж ${floor}` : '';
      address += !!apartment ? `, квартира ${apartment}` : '';
      // onSubmit(address);
      navigation.goBack();
    }
  };

  return (
    <Screen>
      <Header
        title="Добавить адрес"
        buttonTitle="Готово"
        buttonClick={() => onPress()}
      />

      <Input
        value={street}
        onChange={v => setStreet(v)}
        placeholder="Улица"
        error={error}
      />
      <Input
        value={house}
        onChange={v => setHouse(v)}
        placeholder="Дом"
        error={error}
      />
      <Input
        value={entrance}
        onChange={v => setEntrance(v)}
        placeholder="Подъезд"
      />
      <Input value={floor} onChange={v => setFloor(v)} placeholder="Этаж" />
      <Input
        value={apartment}
        onChange={v => setApartment(v)}
        placeholder="Квартира"
      />
    </Screen>
  );
};
