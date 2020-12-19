import 'react-native-gesture-handler';
import React from 'react';
import { View, Text } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import UnityScreen from './src/UnityScreen';
import AboutScreen from './src/AboutScreen';
import ApiDataScreen from './src/ApiDataScreen';

const Stack = createStackNavigator();

const App = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none">
        <Stack.Screen name="Unity" component={UnityScreen} />
        <Stack.Screen name="About" component={AboutScreen} />
        <Stack.Screen name="ApiData" component={ApiDataScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
