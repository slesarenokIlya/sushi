import React from 'react'
import {
  View,
  Text,
  Image,
  TouchableWithoutFeedback,
  StyleSheet
} from 'react-native'

import Swiper from '../../../components/Swiper'

export default ({items, onClick}) => {
    return (<View style={styles.box}>
      <Swiper>
        {items.map(({image}, ind) => (
          <TouchableWithoutFeedback key={ind} onPress={() => onClick(ind)}>
            <Image style={styles.box__item} source={image} />
          </TouchableWithoutFeedback>
        ))}
      </Swiper>
    </View>)
}

const styles = StyleSheet.create({
  box__item: {
    height: 115
  }
})
