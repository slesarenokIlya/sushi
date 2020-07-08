import React from 'react'
import {
  View,
  Image,
  StyleSheet
} from 'react-native'

import Screen from '../../components/Screen'
import Text from '../../components/Text'
import Card from '../../components/Card'

import {useLoadUser} from '../../store'

import ProfileMaleImg from '../../svg/profile-male.svg'
import ProfileFemaleImg from '../../svg/profile-female.svg'

export default () => {
  const user = useLoadUser();

  const greeting = user.gender ? (<>
      <Text style={styles.greeting__text}>Здравия желаю,
      <Text style={{fontWeight: '700'}} type="bold">товарищ {user.name}</Text>
      , за время отсутствия происшествий не было!</Text>
    </>) : (<>
    <Text style={styles.greeting__text}>Мы очень рады вам,
    <Text style={{fontWeight: '700'}} type="bold">Леди {user.name}</Text>
    </Text>
  </>);

  return user.gender === undefined ? (<></>) : (<Screen>
    <View style={styles.balance}>
      <Text style={styles.balance__text} type="bold">{user.balance} ₽</Text>
    </View>
    <Card style={styles.image}>
      {user.gender ? <ProfileMaleImg /> : <ProfileFemaleImg />}
    </Card>
    <View style={styles.cont}>
      <View style={styles.greeting}>{greeting}</View>
    </View>
  </Screen>);
}

const styles = StyleSheet.create({
  balance: {
    backgroundColor: '#E32913',
    paddingHorizontal: 12,
    paddingVertical: 6,
    paddingRight: 26,
    borderRadius: 6,
    width: 100,
    position: 'absolute',
    top: 30,
    right: -20,
    zIndex: 2,
    elevation: 2
  },
  balance__text: {
    color: '#FFF',
    fontWeight: '700',
    textAlign: 'center',
    fontSize: 16
  },
  image: {
    alignSelf: 'center',
  },
  cont: {
    paddingHorizontal: 10,
    marginTop: 10
  },
  greeting: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 40
  },
  greeting__text: {
    fontSize: 17,
    lineHeight: 25
  }
});
