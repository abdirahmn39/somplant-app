import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './LoginScreen';
import HomeScreen from './HomeScreen';
import DetailsScreen from './DetailsScreen';
import 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Products from './Products';
import Register from './Register';
const Stack = createStackNavigator();
const Navigation = () => {
  return (
    <NavigationContainer>
    <Stack.Navigator>
    <Stack.Screen name="Login" component={LoginScreen}/>
    <Stack.Screen name="Home" component={HomeScreen} />
    <Stack.Screen name="Products" component={Products}  />
    <Stack.Screen name="Details" component={DetailsScreen} />
    <Stack.Screen name="Register" component={Register} />
    </Stack.Navigator>
  </NavigationContainer>
  );
};
export default Navigation;