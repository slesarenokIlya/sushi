import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput
} from 'react-native'

export default ({value, onChange, placeholder, style, inputStyle, secure, withoutBorder}) => {
  return (<View style={[ style, styles.box ]}>
    {placeholder ? (<Text style={styles.placeholder}>{placeholder}</Text>) : (<></>)}
    <TextInput style={[inputStyle, styles.input, withoutBorder ? styles.input_withoutBorder : undefined]}
      value={secure ? '•'.repeat(value.length) : value} onChangeText={onChange}/>
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
    color: '#3D3D3D',
  },
  input_withoutBorder: {
    borderColor: 'transparent'
  }
});
