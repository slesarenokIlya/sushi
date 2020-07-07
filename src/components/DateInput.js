import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  TouchableWithoutFeedback
} from 'react-native'

import Text from './Text'

import ShowSvg from '../svg/show-input.svg'

export default ({value, onChange, placeholder, style, inputStyle, secure, withoutBorder}) => {
  const [ _secure, _setSecure ] = useState(!!secure);

  return (<View style={[ style, styles.box ]}>
    {placeholder ? (<Text style={styles.placeholder}>{placeholder}</Text>) : (<></>)}
    <TextInput style={[
        inputStyle,
        styles.input,
        withoutBorder ? styles.input_withoutBorder : undefined,
        _secure ? styles.input__secure : undefined
      ]}
      value={value}
      onChangeText={onChange}
      secureTextEntry={_secure}/>

    {secure ?
      <TouchableWithoutFeedback onPress={() => _setSecure(!_secure)}>
        <View style={styles.box__show}><ShowSvg /></View>
      </TouchableWithoutFeedback>
      : (<></>)}
  </View>);
}

const styles = new StyleSheet.create({
  box: {
    marginVertical: 10,
  },
  placeholder: {
    fontSize: 12,
    color: '#818283',
    marginLeft: 3,
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: 'rgba(16,16,16,0.3)',
    borderRadius: 8,
    height: 50,
    padding: 10,
    color: '#1D1C1B',
    fontSize: 19
  },
  input_withoutBorder: {
    borderColor: 'transparent'
  },
  input__secure: {
    paddingRight: 30
  },
  box__show: {
    position: 'absolute',
    right: 10,
    bottom: 5,
    height: 40,
    width: 40,
    justifyContent: 'center',
    alignItems: 'center',
  }
});
