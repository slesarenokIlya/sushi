import React from 'react'
import {
  View,
  Image,
  TouchableWithoutFeedback,
  StyleSheet,
  Linking
} from 'react-native'

import Text from '../../components/Text'
import Screen from '../../components/Screen'
import Header from '../components/Header'
import Button from '../../components/Button'

import Logo from '../../svg/contacts-logo.svg'
import PhoneIcon from '../../svg/phone-icon.svg'
import EmailIcon from '../../svg/email-icon.svg'

import {getFont} from '../../utils'

export default () => {
  return (<Screen>
    <Header title="Контакты" />
    <View style={styles.mapCont}>
      <Logo />
      <Button style={styles.mapButton} onClick={() => {}}>San Sushi на карте</Button>
    </View>

    <View style={styles.infoCont}>
      <View style={styles.infoCont__row}>
        <View style={styles.infoCont__row__icon}><PhoneIcon /></View>
        <View style={styles.infoCont__row__cont}>
          <TouchableWithoutFeedback onPress={() => Linking.openURL('tel:88008888888')}><View>
            <Text style={styles.infoCont__row__title} type="bold">8 800 888 88 88</Text>
          </View></TouchableWithoutFeedback>
          <Text style={styles.infoCont__row__text}>Горячая линия, звонок по России бесплатный</Text>
        </View>
      </View>

      <View style={styles.infoCont__row}>
        <View style={styles.infoCont__row__icon}><EmailIcon /></View>
        <View style={styles.infoCont__row__cont}>
          <TouchableWithoutFeedback onPress={() => Linking.openURL('mailto:feedback@sansushi.com')}><View>
            <Text style={styles.infoCont__row__title} type="bold">feedback@sansushi.com</Text>
          </View></TouchableWithoutFeedback>
          <Text style={styles.infoCont__row__text}>Вопросы, отзывы и предложения по улучшению сервиса и качества</Text>
        </View>
      </View>
    </View>

    <Button style={styles.rateButton} withoutBkg onClick={() => {}}>
      <Text style={styles.rateButton__text}>Оценить приложение</Text>
    </Button>
  </Screen>);
}

const styles = StyleSheet.create({
  mapCont: {
    marginHorizontal: 40,
    alignItems: 'center'
  },
  mapButton: {
    width: '100%',
    bottom: 20
  },
  infoCont: {
    marginTop: 10,
  },
  infoCont__row: {
    flexDirection: 'row',
    marginVertical: 10
  },
  infoCont__row__icon: {
    width: 40,
    alignItems: 'center'
  },
  infoCont__row__cont: {
    marginLeft: 20,
    flex: 1
  },
  infoCont__row__title: {
    fontWeight: '500',
    fontSize: 17,
    color: '#0D0802',
    marginBottom: 10
  },
  infoCont__row__text: {
    fontSize: 13,
    color: '#ADADB7',
  },
  rateButton: {
    marginTop: 60,
    marginHorizontal: 40
  },
  rateButton__text: {
    fontSize: 15,
    color: '#0D0802',
    fontWeight: '400'
  }
});
