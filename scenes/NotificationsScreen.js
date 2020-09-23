import React from 'react';
import { Button, View, Text } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

export function NotificationsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        onPress={navigation.openDrawer}
        color = '#BBBBBB'
        title="Open navigation drawer"
      />
      <Button
        onPress={() => navigation.goBack()}
        color = '#BBBBBB'
        title="Go back home"
      />
    </View>
  );
}

export default NotificationsScreen;

