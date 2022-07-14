//react imports
import React from 'react';
//Ui imports
import {View, StyleSheet, Image} from 'react-native';

export default function ScreenD() {
  return (
    <View style={styles.backgroundStyle}>
      <Image height={64} source={require('../assets/check.png')} />
    </View>
  );
}

const styles = StyleSheet.create({
  backgroundStyle: {
    backgroundColor: 'lightblue',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
