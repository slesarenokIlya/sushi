import React from 'react';
import {View, Image, TouchableWithoutFeedback, StyleSheet} from 'react-native';

import Text from '../../components/Text';
import BottomScreen from '../../components/BottomScreen';
import Button from '../../components/Button';

import Arrow from '../../svg/open-arrow-2.svg';

const levels = [
  [
    {name: 'Сержант', percent: 1, amount: 0},
    {name: 'Лейтенант', percent: 2, amount: 2000},
    {name: 'Капитан', percent: 3, amount: 5000},
    {name: 'Майор', percent: 4, amount: 15000},
    {name: 'Полковник', percent: 5, amount: 30000},
    {name: 'Генерал', percent: 6, amount: 50000},
  ],
  [
    {name: 'Леди', percent: 1, amount: 0},
    {name: 'Принцесса', percent: 2, amount: 2000},
    {name: 'Королева', percent: 3, amount: 5000},
    {name: 'Повелительница', percent: 4, amount: 15000},
    {name: 'Владычица', percent: 5, amount: 30000},
    {name: 'Богиня', percent: 6, amount: 50000},
  ],
];

export default ({type}) => {
  return (
    <BottomScreen
      noClose
      minHeight={400}
      autoHeight
      bottomContent={<Button>Как получить бонусы?</Button>}
      hitboxComponent={() => (
        <View style={styles.hitbox}>
          <Arrow />
          <View style={styles.header}>
            <Text style={styles.header__title} type="bold">
              Система лояльности
            </Text>
          </View>
        </View>
      )}>
      <View style={styles.content}>
        {levels[type].map(({name, percent, amount}, ind) => (
          <View key={ind}>
            <Text style={styles.content__title}>{name}</Text>
            <Text style={styles.content__text}>
              Кэшбэк {percent}%, оборот {amount}
            </Text>
          </View>
        ))}
      </View>
    </BottomScreen>
  );
};

const styles = StyleSheet.create({
  hitbox: {
    height: 100,
    width: '100%',
    backgroundColor: '#E30613',
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
  },
  header__title: {
    fontSize: 23,
    color: '#FFF',
    fontWeight: '900',
  },
  content: {
    padding: 20,
    marginTop: 40,
  },
  content__title: {
    fontSize: 15,
    marginVertical: 10,
  },
  content__text: {
    fontSize: 13,
    color: '#84848B',
  },
});
