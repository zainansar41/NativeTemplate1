import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import ABC from './Screens/ABC';
import "react-native-gesture-handler"
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './Screens/Home';
import LoginScreen from './Screens/LoginScreen';

const tab = createBottomTabNavigator();

export default function App() {
  return (
    <>
      <NavigationContainer>
        <tab.Navigator >
          <tab.Screen name="Home" component={Home} options={{tabBarLabel:''}} />
          <tab.Screen name="login" component={LoginScreen} />

        </tab.Navigator>

      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
