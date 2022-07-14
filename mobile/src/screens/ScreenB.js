//React imports
import {View, Text, StyleSheet} from 'react-native';
import React, {useEffect, useState} from 'react';
//Redux imports
import {useDispatch, useSelector} from 'react-redux';
import {radioButtonsData} from '../constants/appConstants';
import {
  resetScreenBState,
  rSubmitSelection,
} from '../redux/slices/selectionSlice';
//UI imports
import RadioGroup from 'react-native-radio-buttons-group';
import TouchableForwardArrowIcon from '../components/TouchableForwardArrowIcon';
import Spinner from '../components/Spinner';
//Constants imports
import {RADIO_GROUP_SELECTION_ERR_MSG, SCREEN_D} from '../constants/strings';

export default function ScreenB({navigation}) {
  const [radioButtons, setRadioButtons] = useState(radioButtonsData);
  const [selectionErrMessage, setSelectionErrMessage] = useState('');

  function onPressRadioButton(radioButtonsArray) {
    setRadioButtons(radioButtonsArray);
  }
  const dispatch = useDispatch();
  const {loading, message, err, nextScreen} = useSelector(
    state => state.selectionReducer,
  );

  useEffect(() => {
    return navigation.addListener('focus', () => {
      //
    });
  }, [navigation]);

  useEffect(() => {
    if (nextScreen == SCREEN_D) {
      navigation.navigate(SCREEN_D);
      dispatch(resetScreenBState());
    }
  }, [nextScreen]);

  const onPressArrow = () => {
    if (radioButtons.find(r => r.selected)) {
      dispatch(rSubmitSelection());
      setSelectionErrMessage('');
    } else {
      setSelectionErrMessage(RADIO_GROUP_SELECTION_ERR_MSG);
    }
  };

  return loading ? (
    <View style={styles.backgroundStyle}>
      <Spinner />
    </View>
  ) : (
    <View style={styles.backgroundStyle}>
      <View>
        {err && <Text style={styles.textStyle}>{message}</Text>}
        {selectionErrMessage && <Text>{selectionErrMessage}</Text>}
      </View>
      <RadioGroup radioButtons={radioButtons} onPress={onPressRadioButton} />
      <TouchableForwardArrowIcon
        style={styles.arrowStyle}
        onPress={onPressArrow}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  backgroundStyle: {
    backgroundColor: 'yellow',
    display: 'flex',
    alignContent: 'space-between',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '100%',
  },
  arrowStyle: {
    alignSelf: 'flex-end',
    padding: 20,
  },
  textStyle: {
    textAlign: 'center',
    color: 'red',
    padding: 20,
    fontSize: 28,
  },
});
