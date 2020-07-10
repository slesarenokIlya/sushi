import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  View,
  TouchableWithoutFeedback,
  Dimensions,
  StatusBar,
  ScrollView
} from 'react-native'

import Animated, { Value, timing, Easing } from 'react-native-reanimated';

import Arrow from '../svg/bottom-screen-arrow.svg'

const SCREEN_HEIGHT = ( Dimensions.get('window').height - StatusBar.currentHeight ) * 0.9;
const MIN_SCREEN_HEIGHT = 120;
const HITBOX_HEIGHT = 30;
const SCREEN_PADDING = HITBOX_HEIGHT;

export default ({
  children,
  bottomContent,
  minHeight,
  maxHeight,
  autoHeight,
  initialHeight,
  withPadding,
  onClose,
  noClose,
  noCover,
  noOverScroll,
  hitboxComponent
}) => {
  const [ lastY, setLastY ] = useState(0);
  const [ minOffset, _setMinOffset ] = useState(minHeight ? minHeight : MIN_SCREEN_HEIGHT);
  const [ maxOffset, _setMaxOffset ] = useState(maxHeight ? maxHeight : SCREEN_HEIGHT);

  const [ translate ] = useState( new Value(SCREEN_HEIGHT) );
  useEffect(() => {
    timing(translate, {
      duration: 120,
      toValue: 0,
      easing: Easing.inOut(Easing.quad),
    }).start();
  }, []);

  const [ offset, setOffset ] = useState(initialHeight ? initialHeight : minOffset);

  const setMinOffset= h => {
    if( offset < h ) setOffset(h);
    _setMinOffset(h);
  }
  const setMaxOffset = h => {
    if( offset > h ) setOffset(h);
    _setMaxOffset(h);
  }

  const [ paddingBottom, setPaddingBottom ] = useState(0);

  const close = () => {
    if( noClose ){
      if( offset <= minOffset ){
        setOffset(minOffset)
      }
    } else {
      timing(translate, {
        duration: 120,
        toValue: offset,
        easing: Easing.inOut(Easing.quad),
      }).start(() => setTimeout(onClose, 0));
    }
  }

  const _setOffset = delta => {
    var mult = offset <= minOffset ?
      (1 - ((minOffset - offset) / minOffset) ) / 4
      : 1;
    delta *= mult;
    var _offset = offset + delta;
    if( noOverScroll && _offset < minOffset ) return;
    //if( _offset < minOffset ) return setOffset(minOffset);
    if( _offset > maxOffset ) return setOffset(maxOffset);
    setOffset(_offset);
  }
  const onTouchMove = ({nativeEvent: {pageY}}) => {
    var delta = lastY - pageY;
    _setOffset(delta);
    setLastY( pageY );
  }
  const onTouchEnd = () => {
    if( offset <= minOffset ){
      close();
    }
  }
  const bkgFunc = v => {
    var t = v / maxOffset / 2;
    return t * t;
  }

  const onLayout = ({height}) => {
    if( !autoHeight ) return;
    var off = height > maxOffset ? maxOffset : height;
    if( minHeight === undefined ) setMinOffset( off );
    else setOffset( off < minHeight ? minHeight : off );
  }

  const Hitbox = hitboxComponent;
  return (<>
    {noCover ? (<></>) : (
      <TouchableWithoutFeedback onPress={close}>
    <View style={{...StyleSheet.absoluteFill, backgroundColor: `rgba(0,0,0,${bkgFunc(offset)})`}} />
    </TouchableWithoutFeedback>
    )}

    <Animated.View style={[
        styles.container,
        {bottom: -SCREEN_HEIGHT + offset},
        {transform: [{translateY: translate}]}
      ]}>
      <View style={[ styles.hitbox, {justifyContent: Hitbox ? 'flex-start' : 'flex-end'} ]}
        onStartShouldSetResponder={() => true}
        onMoveShouldSetResponder={() => true}
        onResponderGrant={({nativeEvent: {pageY}}) => setLastY( pageY )}
        onResponderMove={onTouchMove}
        onResponderRelease={onTouchEnd}>
        {/*<View style={styles.hitbox__button}></View>*/}
        {Hitbox ? <Hitbox /> : <Arrow />}
      </View>

      <View style={[
          styles.screen,
          withPadding ? styles.screen_withPadding : undefined
        ]}>
        <ScrollView bounces={false}
          showsVerticalScrollIndicator={false}
          overScrollMode="never"
          nestedScrollEnabled>
          <View style={{
            paddingBottom: SCREEN_PADDING + (bottomContent ? paddingBottom : 0) + (SCREEN_HEIGHT - maxOffset)
            }}
           onLayout={({nativeEvent: {layout}}) => onLayout(layout)}>{children}</View>
        </ScrollView>
      </View>

    </Animated.View>
    {bottomContent ?
      <Animated.View style={[ styles.bottomContent, {transform: [{translateY: translate}]} ]}
        onLayout={({nativeEvent: {layout}}) => setPaddingBottom(layout.height)}>
        {bottomContent}</Animated.View>
      : undefined}
  </>);
}

const styles = new StyleSheet.create({
  container: {
    height: SCREEN_HEIGHT,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  hitbox: {
    width: '100%',
    height: HITBOX_HEIGHT + 10,
    alignItems: 'center',
    top: HITBOX_HEIGHT,
    zIndex: 10,
    elevation: 5,
    backgroundColor: 'transparent',
  },
  /*hitbox__button: {
    width: 40,
    height: 5,
    borderRadius: 8,
    backgroundColor: 'rgba(0,0,0,0.3)',
    marginBottom: 16
  },*/
  screen: {
    minHeight: '100%',
    backgroundColor: '#FFF',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    shadowOffset:{  width: 0,  height: 5,  },
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 4,
    paddingTop: HITBOX_HEIGHT + 10
  },
  screen_withPadding: {
    padding: 20
  },
  bottomContent: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    elevation: 5,
    backgroundColor: '#FFF',
    padding: 10,
    shadowOffset:{  width: 0,  height: -5,  },
    shadowColor: '#E9E9E9',
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 4,
  }
});
