import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  TextInput,
  View,
} from 'react-native'

const CODE_COUNT = 4;

export default ({value, onChange, codeLength}) => {
  const [ values, setValues ] = useState( new Array(CODE_COUNT) );
  const [ focus, setFocus ] = useState(0);

  const _length = codeLength ? codeLength : CODE_COUNT

  return (<View style={style.container}>
    {
      new Array(CODE_COUNT).fill(null).map((_, i) =>
        <TextInput key={i}
        style={[ style.input, {width: `${(100 / CODE_COUNT) - (1 * CODE_COUNT)}%`} ]}
        keyboardType="number-pad"
        maxLength={1}
        selectTextOnFocus
        textContentType="oneTimeCode"
        ref={r => r && i === focus ? r.focus() : undefined}
        value={values[i]}
        onChangeText={t => {
          values[i] = t.slice(0, 1);
          setValues(values);
          setFocus(i + 1);
          onChange(values.join(''));
        }}/>)
    }
  </View>);
}

const style = new StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 10,
    borderWidth: 1,
    borderColor: '#D5D8DD',
    paddingVertical: 5,
    paddingHorizontal: 60,
    borderRadius: 10,
    width: '100%',
    height: 60
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: '#D5D8DD',
    textAlign: 'center',
    fontSize: 24,
    fontWeight: '500',
    color: '#000',
  }
});
