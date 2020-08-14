import React, {useState, useEffect} from 'react';
import {View, StyleSheet, useWindowDimensions} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import FAB from 'react-native-fab';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import Header from '../components/Header';
import Screen from '../../components/Screen';
import Text from '../../components/Text';

import {loadAddresses} from '../../store';

export default () => {
  const [addresses, setAddresses] = useState([]);
  const width = useWindowDimensions().width - 60;
  const navigation = useNavigation();

  useEffect(() => {
    loadAddresses().then(d => setAddresses(d));
  }, []);

  const updateAddresses = newAddress => {
    setAddresses([...addresses, newAddress]);
  };

  return (
    <>
      <Screen>
        <Header title="Адреса доставки" />
        <View>
          {addresses.map((address, index) => (
            <View key={index}>
              {index !== 0 && <View style={[{width}, styles.divider]} />}
              <View style={styles.line}>
                <Text>{address}</Text>
              </View>
            </View>
          ))}
        </View>
      </Screen>
      <FAB
        buttonColor="#E32913"
        iconTextColor="white"
        onClickAction={() =>
          navigation.navigate('profile-addaddress', {
            onSubmit: newAddress => updateAddresses(newAddress),
          })
        }
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
