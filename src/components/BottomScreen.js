import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  TouchableWithoutFeedback,
  Dimensions,
  StatusBar,
  ScrollView
} from 'react-native'

const SCREEN_HEIGHT = ( Dimensions.get('window').height - StatusBar.currentHeight ) * 0.8;
const MIN_SCREEN_HEIGHT = 120;
const HITBOX_HEIGHT = 40;
const SCREEN_PADDING = 30 + HITBOX_HEIGHT;

var lastY = 0;

export default ({children, bottomContent, minHeight, maxHeight, autoHeight, initialHeight, withPadding, onClose}) => {
  const [ minOffset, _setMinOffset ] = useState(minHeight ? minHeight : MIN_SCREEN_HEIGHT);
  const [ maxOffset, _setMaxOffset ] = useState(maxHeight ? maxHeight : SCREEN_HEIGHT);

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

  const onTouchMove = ({nativeEvent: {pageY}}) => {
    var delta = lastY - pageY;
    var _offset = offset + delta;
    if( _offset < minOffset ) return setOffset(minOffset);
    if( _offset > maxOffset ) return setOffset(maxOffset);
    lastY = pageY;
    if( _offset <= minOffset + 10 ) onClose();
    setOffset(_offset);
  }
  /*const bkgFunc = v => {
    var t = (1 - (v / maxOffset)) / 2;
    return 2 * t * t
  }*/

  const onLayout = ({height}) => {
    if( !autoHeight ) return;
    var off = height > maxOffset ? maxOffset : height;
    if( minHeight === undefined ) setMinOffset( off );
    else setOffset( off < minHeight ? minHeight : off );
  }

  return (<>
    {/*<View style={{...StyleSheet.absoluteFill, backgroundColor: `rgba(0,0,0,${bkgFunc(offset)})`}}></View>*/}

    <View style={[ styles.container, {bottom: -SCREEN_HEIGHT + offset} ]}>
      <View style={styles.hitbox}
        onStartShouldSetResponder={() => true}
        onMoveShouldSetResponder={() => true}
        onResponderGrant={({nativeEvent: {pageY}}) => lastY = pageY}
        onResponderMove={onTouchMove}
        onResponderRelease={() => {}}>
        <View style={styles.hitbox__button}></View>
      </View>

      <View style={[
          styles.screen,
          withPadding ? styles.screen_withPadding : undefined
        ]}>
        <ScrollView bounces={false} showsVerticalScrollIndicator={false}>
          <View style={{paddingBottom: SCREEN_PADDING + (bottomContent ? paddingBottom : 0)}}
           onLayout={({nativeEvent: {layout}}) => onLayout(layout)}>{children}</View>
        </ScrollView>
      </View>

    </View>
    {bottomContent ?
      <View style={styles.bottomContent}
        onLayout={({nativeEvent: {layout}}) => setPaddingBottom(layout.height)}>
        {bottomContent}</View>
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
    height: HITBOX_HEIGHT,
    justifyContent: 'flex-end',
    alignItems: 'center',
    top: 10,
    zIndex: 10,
    elevation: 5,
    backgroundColor: 'transparent'
  },
  hitbox__button: {
    width: 40,
    height: 5,
    borderRadius: 8,
    backgroundColor: 'rgba(0,0,0,0.3)',
    marginBottom: 16
  },
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
