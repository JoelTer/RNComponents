import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { HomeScreen } from '../screen/HomeScreen';
import { Animation101Screen } from '../screen/Animation101Screen';
import { Animation102Screen } from '../screen/Animation102Screen';

const Stack = createStackNavigator();

export const Navigator = () => {
  return (
    <Stack.Navigator
        screenOptions={{
            headerShown: false
        }}
    >
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="Animation1" component={Animation101Screen} />
      <Stack.Screen name="Animation2" component={Animation102Screen} />
    </Stack.Navigator>
  );
}