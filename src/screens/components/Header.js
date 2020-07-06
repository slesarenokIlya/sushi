import React from 'react'
import {
  View,
  Text,
  Image,
  TouchableWithoutFeedback,
  StyleSheet
} from 'react-native'

export default ({title, buttonTitle, buttonClick}) => {
  return (<View style={styles.header}>
    <Text style={styles.header__title}>{title}</Text>
    {buttonTitle ? (
      <TouchableWithoutFeedback onPress={buttonClick}><Text style={styles.header__button}>{buttonTitle}</Text></TouchableWithoutFeedback>
    ) : (<></>)}
  </View>);
}

const styles = StyleSheet.create({
  header: {
    padding: 10,
    marginHorizontal: 20,
    marginBottom: 30,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(112,112,112,0.3)',
    flexDirection: 'row',
    justifyContent: 'space-between',
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
    alignSelf: 'center'
  },
  header__button: {
    fontSize: 16,
    color: '#E32913'
  }
});
