import React from 'react';
import {
  StyleSheet,
  View,
} from 'react-native'

import ShadowView from './ShadowView'

export default ({children, withoutPadding, style}) => {
  return (
    <ShadowView style={[ styles.card, withoutPadding ? undefined : {padding: 20}, style ]}>
      {children}
    </ShadowView>
  );
}

const styles = new StyleSheet.create({
  card: {
    marginVertical: 10,
    backgroundColor: '#FFF',
    borderRadius: 10,
  }
});
