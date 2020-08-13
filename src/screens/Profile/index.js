import React from 'react';
import {
  View,
  useWindowDimensions,
  StyleSheet,
  TouchableWithoutFeedback,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import Screen from '../../components/Screen';
import Text from '../../components/Text';
import Card from '../../components/Card';

import {useLoadUser} from '../../store';

import ProfileMaleImg from '../../svg/profile-male.svg';
import ProfileFemaleImg from '../../svg/profile-female.svg';
import DeliveryTruck from '../../svg/delivery-truck.svg';
import Location from '../../svg/location.svg';
import Message from '../../svg/message.svg';
import Review from '../../svg/review.svg';

export default () => {
  const user = useLoadUser();
  const {width, height} = useWindowDimensions();
  const navigation = useNavigation();

  const greeting =
    user.gender === 1 ? (
      <>
        <Text style={styles.greeting__text}>
          Здравия желаю,{' '}
          <Text style={{fontWeight: '700'}} type="bold">
            товарищ {user.name}
          </Text>
          , за время отсутствия происшествий не было!
        </Text>
      </>
    ) : (
      <>
        <Text style={styles.greeting__text}>
          Мы очень рады вам,{' '}
          <Text style={{fontWeight: '700'}} type="bold">
            Леди {user.name}
          </Text>
        </Text>
      </>
    );

  return user.gender === undefined ? (
    <></>
  ) : (
    <Screen>
      <View style={styles.balance}>
        <Text style={styles.balance__text} type="bold">
          {user.balance} ₽
        </Text>
      </View>
      <Card style={styles.image}>
        {user.gender === 1 ? (
          <ProfileMaleImg height={200} />
        ) : (
          <ProfileFemaleImg height={200} />
        )}
      </Card>
      <View style={styles.cont}>
        <View style={styles.greeting}>{greeting}</View>
      </View>
      <View style={{flexDirection: 'column', alignItems: 'center', width}}>
        <View style={styles.row}>
          <TouchableWithoutFeedback
            onPress={() => {
              navigation.navigate('profile-addresses');
            }}>
            <View style={styles.button}>
              <Card>
                <Location width={130} height={100} />
              </Card>
              <Text style={styles.buttonLabel}>Адреса доставки</Text>
            </View>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback
            onPress={() => {
              navigation.navigate('profile-history');
            }}>
            <View style={styles.button}>
              <Card>
                <Message width={130} height={100} />
              </Card>
              <Text style={styles.buttonLabel}>История заказов</Text>
            </View>
          </TouchableWithoutFeedback>
        </View>
        <View style={styles.row}>
          <TouchableWithoutFeedback
            onPress={() => {
              navigation.navigate('profile-active');
            }}>
            <View style={styles.button}>
              <Card>
                <DeliveryTruck width={130} height={100} />
              </Card>
              <Text style={styles.buttonLabel}>Активные заказы</Text>
            </View>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback
            onPress={() => {
              navigation.navigate('profile-settings');
            }}>
            <View style={styles.button}>
              <Card>
                <Review width={130} height={100} />
              </Card>
              <Text style={styles.buttonLabel}>Контакты</Text>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </View>
    </Screen>
  );
};

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
    elevation: 2,
  },
  balance__text: {
    color: '#FFF',
    fontWeight: '700',
    textAlign: 'center',
    fontSize: 16,
  },
  image: {
    alignSelf: 'center',
    width: '100%',
  },
  cont: {
    paddingHorizontal: 10,
    marginTop: 10,
  },
  greeting: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginBottom: 40,
  },
  greeting__text: {
    fontSize: 17,
    lineHeight: 25,
    textAlign: 'center',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  button: {
    flexDirection: 'column',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  buttonLabel: {
    color: '#ADADB7',
    fontSize: 16,
  },
});
