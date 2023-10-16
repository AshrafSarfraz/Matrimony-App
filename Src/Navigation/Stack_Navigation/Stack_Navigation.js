// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ChatScreen from '../../Screens/ChatScreen';
import Connection from '../../Screens/Connection';


const Stack = createNativeStackNavigator();

function Stack_Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator  initialRouteName='Connection'  screenOptions={{headerShown:false}} >
        <Stack.Screen name="Chat" component={ChatScreen} />
        <Stack.Screen name="Connection" component={Connection} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Stack_Navigation;