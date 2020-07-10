import React from 'react'
import {
  View,
  Image,
  TouchableWithoutFeedback,
  StyleSheet
} from 'react-native'

import Text from '../../components/Text'
import BottomScreen from '../../components/BottomScreen'
import Button from '../../components/Button'

import Arrow from '../../svg/open-arrow-2.svg'

export default ({title, buttonTitle, buttonClick}) => {
  return (<BottomScreen noClose minHeight={400} autoHeight
      bottomContent={(
        <Button>Как получить бонусы?</Button>
      )}
      hitboxComponent={(
        () => (
          <View style={styles.hitbox}>
            <Arrow />
            <View style={styles.header}>
              <Text style={styles.header__value} type="bold">1 340</Text>
              <Text style={styles.header__title} type="bold">Сушистеры</Text>
            </View>
          </View>
        )
      )}>
    <View style={styles.content}>
      <Text style={{fontSize: 17}} type="bold">Как потратить бонусы?</Text>
      <Text style={styles.content__title}>Онлайн</Text>
      <Text style={styles.content__text}>Назовите кассиру код для списания сушистеров</Text>
      <Text style={styles.content__title}>В ресторане</Text>
      <Text style={styles.content__text}>Назовите кассиру код для списания сушистеров</Text>
    </View>
  </BottomScreen>);
}

const styles = StyleSheet.create({
  hitbox: {
    height: 120,
    width: '100%',
    backgroundColor: '#E30613',
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    justifyContent: 'center',
    alignItems: 'center'
  },
  header: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10
  },
  header__value: {
    fontSize: 29,
    color: '#FFF',
    fontWeight: '900'
  },
  header__title: {
    fontSize: 16,
    color: '#FFF'
  },
  content: {
    padding: 20,
    marginTop: 60
  },
  content__title: {
    fontSize: 15,
    marginVertical: 10
  },
  content__text: {
    fontSize: 13
  },
});
