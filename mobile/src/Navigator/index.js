import ScreenA from '../screens/ScreenA';
import ScreenB from '../screens/ScreenB';
import ScreenD from '../screens/ScreenD';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';

const Stack = createNativeStackNavigator();

const Navigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="ScreenA">
        <Stack.Screen name="ScreenA" component={ScreenA} />
        <Stack.Screen name="ScreenB" component={ScreenB} />
        <Stack.Screen name="ScreenD" component={ScreenD} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
