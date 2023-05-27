import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text } from 'react-native'

import ModalScreen from './Screens/ModalScreen';



const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <>
      <ModalScreen/>
    </>
  );
}
