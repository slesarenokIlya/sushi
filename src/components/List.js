import React from 'react';
import {
  StyleSheet,
  View,
} from 'react-native'

export default ({children, style}) => {
  return (<View style={style}>
      {children.map((item, ind) => (
        <View key={ind} style={styles.list__item}>
          <View style={styles.list__item__dot}></View>
          {item}
        </View>
      ))}
    </View>);
}

const styles = new StyleSheet.create({
  list__item: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  list__item__dot: {
    width: 5,
    height: 5,
    borderRadius: 100,
    backgroundColor: '#000',
    marginRight: 10
  }
});
