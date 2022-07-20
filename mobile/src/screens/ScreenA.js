//React imports
import React, {useEffect} from 'react';
//Redux imports
import {useDispatch, useSelector} from 'react-redux';
import {
  resetScreenAState,
  rFetchExpirements,
} from '../redux/slices/expirementSlice';
//Ui imports
import Spinner from '../components/Spinner';
import {View, StyleSheet, Text} from 'react-native';
//Constants imports
import {SCREEN_B, SCREEN_D} from '../constants/strings';

export default function ScreenA({navigation}) {
  const dispatch = useDispatch();
  const {loading, nextScreen, err, message} = useSelector(
    state => state.expirementReducer,
  );
  useEffect(() => {
    return navigation.addListener('focus', () => {
      dispatch(rFetchExpirements());
    });
  }, [navigation]);

  useEffect(() => {
    if (nextScreen == SCREEN_B) {
      navigation.navigate(SCREEN_B);
      dispatch(resetScreenAState());
    }
    if (nextScreen == SCREEN_D) {
      setTimeout(() => {
        navigation.navigate(SCREEN_D);
        dispatch(resetScreenAState());
      }, 5000);
    }
  }, [nextScreen]);

  return (
    <View style={styles.backgroundStyle}>
      {loading ? (
        <Spinner />
      ) : (
        err && <Text style={styles.messageStyle}>{message}</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  backgroundStyle: {
    backgroundColor: 'lightgreen',
    height: '100%',
    display: 'flex',
    alignContent: 'center',
    justifyContent: 'center',
  },
  messageStyle: {
    alignSelf: 'center',
    fontSize: 28,
  },
});
