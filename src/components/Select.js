import React, {useState} from 'react';

import {Picker} from '@react-native-community/picker';

export default ({items, onValueChange, style, enabled, value}) => {
  const [select, setSelect] = useState(value);
  return (
    <Picker
      selectedValue={select}
      onValueChange={value => {
        setSelect(value);
        onValueChange(value);
      }}
      style={[{height: 30, width: 200}, style]}
      mode="dropdown"
      enabled={enabled}>
      {items.map(item => (
        <Picker.Item label={item.label} value={item.value} key={item.value} />
      ))}
    </Picker>
  );
};
