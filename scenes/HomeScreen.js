import React from 'react';
import { Image, ScrollView,Button, View, Text } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import styles from '../styles/Styles';
import image from '../assets/Covid.jpg';



export function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 2,flexDirection:'row' , justifyContent: 'space-between' , padding: 10}}>
      

      

<ScrollView>

    <Text style={{ fontSize: 96 }}>Scroll me plz. I have info on the Coronavirus</Text>
       <Image source={image} />

          <Button
        onPress={navigation.openDrawer}
        color = '#BBBBBB'
        title="Open navigation drawer"
      />
  

  </ScrollView>


    </View>
  );
}

export default HomeScreen;