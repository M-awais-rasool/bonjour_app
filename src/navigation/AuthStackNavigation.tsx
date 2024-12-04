import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SafeAreaView} from 'react-native';
import SplashScreen from '../screens/authNavigation/splashScreen/SplashScreen';
import LoginScreen from '../screens/authNavigation/loginScreen/LoginScreen';
import RegisterScreen from '../screens/authNavigation/registerScreen/RegisterScreen';
import {BottomTabs} from './BottomTab';

const Stack = createNativeStackNavigator();

const AuthStackNavigation = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <Stack.Navigator
        initialRouteName={'SPLASH_SCREEN'}
        screenOptions={({navigation, route}) => ({})}>
        <Stack.Screen
          name={'SPLASH_SCREEN'}
          component={SplashScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={'LOGIN_SCREEN'}
          component={LoginScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={'REGISTER_SCREEN'}
          component={RegisterScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={'BOTTOM_NAVIGATION'}
          component={BottomTabs}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </SafeAreaView>
  );
};

export default AuthStackNavigation;
