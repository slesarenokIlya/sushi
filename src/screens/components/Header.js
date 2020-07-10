import React from 'react'
import {
  View,
  Image,
  TouchableWithoutFeedback,
  StyleSheet
} from 'react-native'

import Text from '../../components/Text'

export default ({title, buttonTitle, buttonClick}) => {
  return (<View style={[
      {justifyContent: buttonTitle ? 'space-between' : 'center'},
      styles.header
    ]}>
    <Text style={styles.header__title} type="light">{title}</Text>
    {buttonTitle ? (
      <TouchableWithoutFeedback onPress={buttonClick}><Text style={styles.header__button}>{buttonTitle}</Text></TouchableWithoutFeedback>
    ) : (<></>)}
  </View>);
}

const styles = StyleSheet.create({
  header: {
    padding: 12,
    marginHorizontal: 20,
    //marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#EBEBEA',
    flexDirection: 'row',
    /*position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 50,
    backgroundColor: '#FFF',
    zIndex: 10*/
  },
  header__title: {
    fontSize: 18,
    textAlign: 'center',
    alignSelf: 'center',
  },
  header__button: {
    fontSize: 16,
    color: '#E32913',
  }
});
