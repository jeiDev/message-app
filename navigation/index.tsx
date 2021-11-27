import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { ColorSchemeName, Text } from 'react-native';

import ModalScreen from '../screens/ModalScreen';
import { RootStackParamList } from '../types';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer 
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack.Navigator initialRouteName="Modal">
        {/* <Stack.Screen name="Root" component={() => {
          return (
            <Text>Hello world</Text>
          )
        }} options={{ headerShown: false }} /> */}
        <Stack.Group screenOptions={{ presentation: 'modal' }}>
          <Stack.Screen name="Modal" component={ModalScreen} />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
