import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';

import Screen from '../../components/Screen';
import Text from '../../components/Text';
import Header from '../../components/Header';
import TextInput from '../../components/TextInput';

export default () => {
  const [address, setAddress] = useState('');
  return (
    <Screen>
      <Header title="Добавить адрес" />
    </Screen>
  );
};
