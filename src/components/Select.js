import React, {useState} from 'react';

// import {Picker} from '@react-native-community/picker';
import RNPickerSelect from 'react-native-picker-select';

export default ({items, onValueChange, style, enabled = true, value}) => {
  const [select, setSelect] = useState(value);
  return (
    <RNPickerSelect
      value={select}
      onValueChange={value => {
        setSelect(value);
        onValueChange(value);
      }}
      style={{
        height: 30,
        width: 200,
        ...style,
      }}
      disabled={!enabled}
      items={items}
      placeholder={{}}
    />
  );
};
