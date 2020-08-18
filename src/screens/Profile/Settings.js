import React, {useState, useEffect} from 'react';
import {View, Image, StyleSheet} from 'react-native';

import Text from '../../components/Text';
import Screen from '../../components/Screen';
import Input from '../../components/Input';
import DateInput from '../../components/DateInput';
import Button from '../../components/Button';
import Select from '../../components/Select';
import {loadUser} from '../../store';

import Header from '../components/Header';

export default () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [birthday, setBirthday] = useState('');
  const [gender, setGender] = useState(1);
  const [isEditable, setEditable] = useState(false);
  const [dataLoaded, setDataLoaded] = useState(false);

  useEffect(() => {
    loadUser().then(user => {
      const {name, phone, birthday, gender} = user;
      setName(name);
      setPhone(phone);
      setBirthday(birthday);
      setGender(gender);
      setDataLoaded(true);
    });
  }, []);

  return (
    <Screen>
      <Header
        title="Настройки"
        buttonTitle={isEditable ? 'Готово' : 'Редактировать'}
        buttonClick={() => setEditable(!isEditable)}
      />

      <View style={styles.cont}>
        {dataLoaded && (
          <>
            <Input
              value={name}
              onChange={setName}
              placeholder="Имя"
              editable={isEditable}
            />
            <Input
              value={phone}
              onChange={setPhone}
              placeholder="Телефон"
              editable={isEditable}
              keyboardType="phone-pad"
            />
            <DateInput
              value={birthday}
              onChange={setBirthday}
              editable={isEditable}
              placeholder="День рождения"
            />
            <Text style={styles.placeholder}>Пол</Text>
            <View
              style={[
                styles.input,
                {
                  backgroundColor: isEditable ? undefined : '#fafafa',
                  justifyContent: 'center',
                },
              ]}>
              <Select
                value={gender}
                items={[
                  {label: 'Мужской', value: 1},
                  {label: 'Женский', value: 2},
                ]}
                onValueChange={value => setGender(value)}
                style={[{width: '100%'}]}
                enabled={isEditable}
              />
            </View>
          </>
        )}
      </View>

      <View style={styles.bottom}>
        <Button withoutBkg onClick={() => {}}>
          Выход
        </Button>
      </View>
    </Screen>
  );
};

const styles = StyleSheet.create({
  cont: {
    paddingBottom: 110,
  },
  bottom: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 30,
    paddingHorizontal: 10,
  },
  placeholder: {
    fontSize: 12,
    color: '#818283',
    marginLeft: 3,
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#D5D8DD',
    borderRadius: 8,
    height: 50,
    padding: 10,
    color: '#1D1C1B',
    fontSize: 19,
  },
});
