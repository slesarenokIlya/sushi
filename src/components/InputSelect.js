import React, {useState} from 'react';
import {View, TouchableWithoutFeedback, StyleSheet} from 'react-native';

import Animated, {timing, Value, Easing} from 'react-native-reanimated';

import Text from './Text';
import Input from './Input';

import SelectArrow from '../svg/select-arrow.svg';

export default ({items, selected, onSelect, placeholder}) => {
  const [listOpened, _setListOpened] = useState(false);

  const [openAnimation] = useState(new Value(0));
  const [arrowAnimation] = useState(
    openAnimation.interpolate({inputRange: [0, 1], outputRange: [1, -1]}),
  );
  const setListOpened = v => {
    var val = v ? 1 : 0;
    timing(openAnimation, {
      duration: 100,
      toValue: val,
      easing: Easing.inOut(Easing.quad),
    }).start();
    _setListOpened(v);
  };

  return (
    <View style={styles.box}>
      <Text style={styles.box__placeholder}>{placeholder}</Text>

      <TouchableWithoutFeedback onPress={() => setListOpened(!listOpened)}>
        <View>
          <View
            style={[
              styles.box__input,
              listOpened ? styles.box__input_opened : undefined,
            ]}>
            <Text style={styles.box__input__label}>{items[selected]}</Text>
          </View>
          <View style={styles.box__cover} />
          <Animated.View
            style={[styles.box__open, {transform: [{scaleY: arrowAnimation}]}]}>
            <SelectArrow />
          </Animated.View>
        </View>
      </TouchableWithoutFeedback>

      <Animated.View
        style={[
          styles.box__list,
          listOpened ? styles.box__list_opened : {},
          {opacity: openAnimation},
        ]}>
        {items.map((item, ind) => (
          <TouchableWithoutFeedback
            onPress={() => {
              onSelect(ind);
              setListOpened(false);
            }}
            key={ind}>
            <View style={styles.box__list__item}>
              <Text>{item}</Text>
            </View>
          </TouchableWithoutFeedback>
        ))}
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    marginTop: 10,
    zIndex: 200,
    elevation: 20,
  },
  box__placeholder: {
    fontSize: 12,
    color: '#818283',
    marginLeft: 3,
    marginBottom: 5,
  },
  box__input: {
    borderWidth: 1,
    borderColor: '#D5D8DD',
    borderRadius: 8,
    padding: 10,
    height: 50,
    justifyContent: 'center',
  },
  box__input_opened: {
    borderBottomWidth: 0,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  },
  box__input__label: {},
  box__open: {
    position: 'absolute',
    right: 20,
    bottom: 20,
  },
  box__list: {
    position: 'absolute',
    top: 70,
    padding: 5,
    width: '100%',
    display: 'none',
    borderWidth: 1,
    borderColor: '#D5D8DD',
    borderTopWidth: 0,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
    backgroundColor: '#FFF',
  },
  box__list__item: {
    height: 40,
    justifyContent: 'center',
    paddingVertical: 10,
    paddingHorizontal: 5,
  },
  box__list_opened: {
    display: 'flex',
  },
});
