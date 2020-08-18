import React from 'react';
import {View, Image, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import Text from '../../../components/Text';

export default ({item}) => {
  const {title, descr, image} = item;

  return (
    <View style={styles.box}>
      <View style={{alignSelf: 'center'}}>
        <Icon name="chevron-down" size={40} color="#EBEBEA" />
      </View>
      <Image style={styles.box__image} source={image} />
      <Text style={styles.box__title}>{title}</Text>
      <Text style={styles.box__descr}>{descr}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    paddingHorizontal: 20,
    backgroundColor: 'white',
    elevation: 5,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    marginTop: 25,
    paddingBottom: '50%',
  },
  box__image: {
    width: '100%',
    // maxHeight: 100,
    height: 150,
    borderRadius: 10,
  },
  box__title: {
    fontSize: 17,
    fontWeight: '600',
    marginVertical: 20,
  },
  box__descr: {
    fontSize: 13,
    flexWrap: 'wrap',
  },
});
