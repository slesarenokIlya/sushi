import React, {useState, useEffect} from 'react'
import {
  StyleSheet,
  TouchableWithoutFeedback,
  View,
  ScrollView,
  Dimensions
} from 'react-native'

import Animated from 'react-native-reanimated';

const w = Dimensions.get('window').width
const ITEM_MARGIN = 0;
const ITEM_WIDTH = w * 0.8;
const SCROLL_PADDING = w - ITEM_WIDTH - 20;
const SWIPE_POINT = 0.1;

export default ({children, onChange, style}) => {
  const [ scrollRef, _setScrollRef ] = useState(null);
  const [ selected, _setSelected ] = useState(0);
  const [ lastSelected, _setLastSelected ] = useState(0);
  const [ offset, _setOffset ] = useState(0);
  const setSelected = ind => {
    scrollRef && scrollRef.scrollTo({ x: ITEM_WIDTH * ind, y: 0, animated: true });
    if( onChange && ind !== selected ) onChange(ind);
    _setSelected(ind);
    _setOffset( ITEM_WIDTH * lastSelected );
  }

  const [ scroll, setScroll ] = useState(0);
  const onScroll = ({nativeEvent: {contentOffset: {x}}}) => {
    var _offset = (x - offset) / ITEM_WIDTH, curItem = selected;
    if( _offset > SWIPE_POINT ) curItem = selected + (Math.floor(_offset) + 1);
    else if( _offset < -SWIPE_POINT ) curItem = selected - (Math.floor( Math.abs(_offset) ) + 1);
    _setLastSelected(curItem);
    setScroll(x);
  }

  useEffect(() => {
    if( selected >= children.length ) setSelected( children.length - 1 );
  });

  const onEndScroll = () => {
    setSelected(lastSelected);
  }

  return(<View style={[ styles.swiper, style ]}>
    <ScrollView contentContainerStyle={{paddingRight: SCROLL_PADDING}}
      ref={_setScrollRef}
      horizontal
      showsHorizontalScrollIndicator={false}
      bounces={false}
      scrollsToTop={false}
      overScrollMode="never"
      nestedScrollEnabled
      onScroll={onScroll}
      scrollEventThrottle={14}
      onScrollEndDrag={onEndScroll}>
        {children.map((item, ind) => {
          //var dist = Math.abs( ( ind * ITEM_WIDTH ) - scroll );
          //var t = dist / w;
          var opacity = 1,// - ( t / 2 ),
          scale = 1// - (t / 8)

          return (
              <Animated.View key={ind} style={[
                styles.swiper__item,
                {opacity},
                {transform: [{scale}]}
              ]}>
              {item}
            </Animated.View>
          )
        })}
      </ScrollView>
    </View>)
}

const styles = new StyleSheet.create({
  swiper: {

  },

  swiper__item: {
    width: ITEM_WIDTH - ITEM_MARGIN,
    marginRight: ITEM_MARGIN
  }
});
