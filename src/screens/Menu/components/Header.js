import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';

import Select from '../../../components/Select';
import Price from './Header/Price';

import {CITIES} from '../../../const';

export default () => {
  const [selected, setSelected] = useState(CITIES[0].value);

  return (
    <View style={styles.header}>
      <Select
        items={CITIES}
        value={selected}
        onValueChange={value => setSelected(value)}
      />

      <Price value={1234} />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
    paddingTop: 10,
    zIndex: 10,
    elevation: 10,
  },
});
