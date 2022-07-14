import {View, TouchableOpacity, Image} from 'react-native';
import React from 'react';

export default function TouchableForwardArrowIcon({style, onPress}) {
  return (
    <View style={style}>
      <TouchableOpacity onPress={onPress}>
        <Image source={require('../assets/arrow_forward.png')} />
      </TouchableOpacity>
    </View>
  );
}
