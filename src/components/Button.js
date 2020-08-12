import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import Text from './Text';

export default ({
  children,
  onClick,
  disabled,
  withoutBkg,
  withBorder,
  withMargin,
  style,
  bold,
  noText,
}) => {
  const onPress = () => {
    if (!disabled && onClick) onClick();
  };

  var contStyles = [
    styles.button,
    disabled ? styles.button_disabled : undefined,
    withoutBkg ? styles.button_withoutBkg : undefined,
    withBorder ? styles.button_withBorder : undefined,
    withMargin ? styles.button_withMargin : undefined,
    style,
  ];

  const Cont =
    withoutBkg || disabled
      ? ({children}) => <View style={contStyles}>{children}</View>
      : ({children}) => (
          <LinearGradient
            start={{x: 0, y: 0.5}}
            end={{x: 1, y: 0.5}}
            colors={['#E30613', '#E32913']}
            style={contStyles}>
            {children}
          </LinearGradient>
        );

  return (
    <TouchableOpacity onPress={onPress}>
      <Cont>
        {noText ? (
          children
        ) : (
          <Text
            style={[
              styles.button__text,
              disabled ? styles.button__text_disabled : undefined,
              bold ? styles.button__text_bold : undefined,
              withoutBkg ? styles.button__text_withoutBkg : undefined,
            ]}>
            {children}
          </Text>
        )}
      </Cont>
    </TouchableOpacity>
  );
};

const styles = new StyleSheet.create({
  button: {
    height: 50,
    borderRadius: 6,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  button_disabled: {
    backgroundColor: '#EBEBEA',
  },
  button_withoutBkg: {
    backgroundColor: '#FFF',
    shadowOffset: {width: 0, height: 0},
    shadowColor: '#E9E9E9',
    shadowOpacity: 1,
    shadowRadius: 8,
    elevation: 2,
  },
  button_withBorder: {
    borderWidth: 1,
    borderColor: '#E30613',
    shadowOpacity: 0,
  },
  button_withMargin: {
    marginVertical: 10,
  },
  button__text: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '400',
    color: '#FFF',
  },
  button__text_disabled: {
    color: '#ADADB7',
  },
  button__text_withoutBkg: {
    color: '#F00',
  },
  button__text_bold: {
    fontWeight: '700',
  },
});
