/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {Welcome} from './screens/Welcome';
import {VPN} from './screens/VPN';
import {SafeAreaProvider} from 'react-native-safe-area-context';

const Stack = createStackNavigator();

export const App = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Welcome"
          screenOptions={{headerShown: false}}>
          <Stack.Screen name="Welcome" component={Welcome} />
          <Stack.Screen name="VPN" component={VPN} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};
