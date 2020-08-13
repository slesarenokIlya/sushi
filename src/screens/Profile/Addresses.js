import React, {useState, useEffect} from 'react';
import FAB from 'react-native-fab';
import {View, StyleSheet, useWindowDimensions} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import Header from '../components/Header';
import Screen from '../../components/Screen';
import Text from '../../components/Text';

import {loadAddresses} from '../../store';

export default () => {
  const [addresses, setAddresses] = useState([]);
  const width = useWindowDimensions().width - 60;

  useEffect(() => {
    loadAddresses().then(d => setAddresses(d));
  });
  return (
    <>
      <Screen>
        <Header title="Доставка" />
        <View>
          {addresses.map((address, index) => (
            <>
              {index !== 0 && <View style={[{width}, styles.divider]} />}
              <View style={styles.line}>
                <Text key={index}>{address}</Text>
              </View>
            </>
          ))}
        </View>
      </Screen>
      <FAB
        buttonColor="#E32913"
        iconTextColor="white"
        onClickAction={() => {}}
        iconTextComponent={<Icon name="plus" />}
      />
    </>
  );
};

const styles = StyleSheet.create({
  line: {paddingHorizontal: 20, paddingVertical: 20},
  divider: {
    backgroundColor: '#D5D8DD',
    height: 0.5,
    marginHorizontal: 20,
  },
});
