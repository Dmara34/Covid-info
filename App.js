import React from 'react';
import { Button, View, Text } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './scenes/HomeScreen';

import NotificationsScreen from './scenes/NotificationsScreen';
import styles from './styles/Styles';

const Drawer = createDrawerNavigator();
//const NavStack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>

      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Notifications" component={NotificationsScreen} />
      </Drawer.Navigator>

    </NavigationContainer>
  );
}