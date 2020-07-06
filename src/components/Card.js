import React from 'react';
import {
  StyleSheet,
  View,
} from 'react-native'

export default ({children, withoutPadding, style}) => {
  return (
    <View style={[ styles.card, withoutPadding ? undefined : {padding: 20}, style ]}>
      {children}
    </View>
  );
}

const styles = new StyleSheet.create({
  card: {
    marginVertical: 10,
    backgroundColor: '#FFF',
    shadowOffset:{  width: 0,  height: 0,  },
    shadowColor: '#E9E9E9',
    shadowOpacity: 1,
    shadowRadius: 8,
    elevation: 2,
    borderRadius: 10,
  }
});
