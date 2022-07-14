import {View, ActivityIndicator, StyleSheet} from 'react-native';
import React from 'react';

export default function Spinner() {
  return (
    <View style={styles.spinnerContainer}>
      <ActivityIndicator size={'large'} color={'grey'} />
    </View>
  );
}

const styles = StyleSheet.create({
  spinnerContainer: {
    height: '100%',
    display: 'flex',
    alignContent: 'center',
    justifyContent: 'center',
  },
});
