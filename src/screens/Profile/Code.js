import React, {useState, useEffect} from 'react';
import {View, Image, StyleSheet} from 'react-native';

import Text from '../../components/Text';
import Screen from '../../components/Screen';
import Button from '../../components/Button';
import CodeInput from '../../components/CodeInput';

import Header from '../components/Header';

import {apiCall} from '../../utils';

var _setTimeout, _timeout;

export default ({navigation, route}) => {
  const [code, _setCode] = useState('');
  const [blocked, setBlocked] = useState(false);

  const setCode = v => {
    if (blocked) return;
    if (v.length === 4) {
      setBlocked(true);
      apiCall('', {code: v})
        .then(() => {
          navigation.navigate('profile-settings');
        })
        .catch(() => {
          setCode('');
          setBlocked(false);
        });
    }
    _setCode(code);
  };

  const [__timeout, __setTimeout] = useState(route.params.timeout);
  _setTimeout = __setTimeout;
  _timeout = __timeout;

  useEffect(() => {
    var t = setInterval(() => {
      _timeout--;
      if (_timeout < 0) clearInterval(t);
      else _setTimeout(_timeout);
    }, 1000);
    return () => clearInterval(t);
  }, []);

  return (
    <Screen>
      <Header title="Теперь введите код" />
      <View style={styles.box}>
        <Text style={styles.box__descr} type="light">
          Код отправили сообщением на {route.params.phone}
        </Text>
        <CodeInput value={code} onChange={setCode} />
        <View style={styles.box__bottom}>
          {_timeout ? (
            <Text style={styles.box__resend} type="light">
              Если код не придет, можно получить новый через {_timeout} сек
            </Text>
          ) : (
            <></>
          )}
          <Button
            style={styles.box__button}
            onClick={() => {}}
            disabled={!!_timeout}>
            Получить новый код
          </Button>
        </View>
      </View>
    </Screen>
  );
};

const styles = StyleSheet.create({
  box: {
    paddingHorizontal: 20,
    alignItems: 'center',
    height: '100%',
  },
  box__image: {
    width: '100%',
    height: 300,
    resizeMode: 'contain',
  },
  box__descr: {
    fontSize: 15,
    marginBottom: 40,
    color: '#0D0802',
    textAlign: 'center',
    lineHeight: 24,
  },
  box__bottom: {
    position: 'absolute',
    left: 20,
    right: 20,
    bottom: 170,
  },
  box__resend: {
    fontSize: 12,
    textAlign: 'center',
    color: '#0D0802',
    marginVertical: 10,
  },
  box__button: {
    width: '100%',
  },
});
