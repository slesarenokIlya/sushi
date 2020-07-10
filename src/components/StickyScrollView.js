import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  ScrollView
} from 'react-native'

export default ({children, topContent, stickyContent, style}) => {
  const [ topContentHeight, _setTopContentHeight ] = useState(0);
  const [ showFixed, setShowFixed ] = useState(false);

  const onScroll = ({nativeEvent: {contentOffset: {y}}}) => {
    setShowFixed( y >= topContentHeight );
  }

  return (<View>
    {showFixed ?
      <View style={{position: 'absolute', top: 0, left: 0, right: 0, zIndex: 2}}>
        {stickyContent}
      </View>
      : undefined}

    <ScrollView style={style}
      bounces={false}
      showsVerticalScrollIndicator={false}
      onScroll={onScroll}
      overScrollMode="never">
      <View onLayout={
        ({nativeEvent: {layout: {height}}}) =>_setTopContentHeight(height)
      }>{topContent}</View>
      <View>{stickyContent}</View>
      {children}
    </ScrollView>
  </View>);
}

const styles = new StyleSheet.create({

});
