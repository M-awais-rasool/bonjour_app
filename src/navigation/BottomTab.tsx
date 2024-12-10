import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Image, Text} from 'react-native';
import React from 'react';
import HomeScreen from '../screens/home/HomeScreen';
import ProfileScreen from '../screens/profileScreen/ProfileScreen';
import {useTheme} from '../contextProvider/ContextProvider';

const Tab = createBottomTabNavigator();

export function BottomTabs() {
  const {theme} = useTheme();
  return (
    <Tab.Navigator
      initialRouteName={'HOME_SCREEN'}
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color}) => {
          let iconSource;

          if (route.name === 'HOME_SCREEN') {
            iconSource = focused
              ? require('../resource/home.png')
              : require('../resource/home.png');
          } else if (route.name === 'PROFILE_SCREEN') {
            iconSource = focused
              ? require('../resource/profile.png')
              : require('../resource/profile.png');
          }

          return (
            <Image
              source={iconSource}
              style={{
                tintColor: color,
                width: 30,
                height: 30,
                top: 5,
              }}
            />
          );
        },
        tabBarLabel: ({focused}) => {
          let label;
          if (route.name === 'HOME_SCREEN') {
            label = 'Home';
          } else if (route.name === 'PROFILE_SCREEN') {
            label = 'Profile';
          }
          return (
            <Text
              style={{
                color: focused ? theme.textColor29 : theme.white,
                fontSize: 15,
                fontWeight: focused ? 'bold' : 'normal',
                bottom: -10,
                zIndex: 1,
              }}>
              {label}
            </Text>
          );
        },
        tabBarActiveTintColor: theme.textColor29,
        tabBarInactiveTintColor: theme.white,

        tabBarStyle: {
          height: 70,
          backgroundColor: theme.textColor28,
        },
      })}>
      <Tab.Screen
        name={'HOME_SCREEN'}
        component={HomeScreen}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name={'PROFILE_SCREEN'}
        component={ProfileScreen}
        options={{headerShown: false}}
      />
    </Tab.Navigator>
  );
}
