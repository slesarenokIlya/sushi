import React from 'react';
import {
  StyleSheet,
  TouchableWithoutFeedback,
  Text,
  View
} from 'react-native'

export default ({children, onClick, disabled, withoutBkg, withBorder, withMargin, style, bold, noText}) => {
  const onPress = () => {
    if( !disabled && onClick ) onClick();
  }

  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={[
        style,
        styles.button,
        disabled ? styles.button_disabled : undefined,
        withoutBkg ? styles.button_withoutBkg : undefined,
        withBorder ? styles.button_withBorder : undefined,
        withMargin ? styles.button_withMargin : undefined
      ]}>
        { noText ?
          children :
          <Text style={[
            styles.button__text,
            //bold ? styles.button__text_bold : undefined
            styles.button__text_bold,
            withoutBkg ? styles.button__text_withoutBkg : undefined,
          ]}>{children}</Text>
        }
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = new StyleSheet.create({
  button: {
    height: 50,
    backgroundColor: '#E30613',
    borderRadius: 10,
    justifyContent: 'center',
    paddingHorizontal: 20
  },
  button_disabled: {
    opacity: 0.3
  },
  button_withoutBkg: {
    backgroundColor: '#FFF',
    shadowOffset:{  width: 0,  height: 0,  },
    shadowColor: '#E9E9E9',
    shadowOpacity: 1,
    shadowRadius: 8,
    elevation: 2
  },
  button_withBorder: {
    borderWidth: 1,
    borderColor: '#E30613'
  },
  button_withMargin: {
    marginVertical: 10
  },
  button__text: {
    textAlign: 'center',
    fontSize: 18,
    color: '#FFF',
  },
  button__text_withoutBkg: {
    color: '#F00'
  },
  button__text_bold: {
    fontWeight: '700'
  }
});
