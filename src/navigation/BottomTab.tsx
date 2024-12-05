import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Image, Text} from 'react-native';
import React from 'react';
import HomeScreen from '../screens/home/HomeScreen';
import ProfileScreen from '../screens/profileScreen/ProfileScreen';
import LibraryScreen from '../screens/library/LibraryScreen';
import MenuScreen from '../screens/menu/MenuScreen';
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
          } else if (route.name === 'LIBRARY_SCREEN') {
            iconSource = focused
              ? require('../resource/library.png')
              : require('../resource/library.png');
          } else if (route.name === 'PROFILE_SCREEN') {
            iconSource = focused
              ? require('../resource/profile.png')
              : require('../resource/profile.png');
          } else if (route.name === 'MENU_SCREEN') {
            iconSource = focused
              ? require('../resource/menu.png')
              : require('../resource/menu.png');
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
          } else if (route.name === 'LIBRARY_SCREEN') {
            label = 'Library';
          } else if (route.name === 'PROFILE_SCREEN') {
            label = 'Profile';
          } else if (route.name === 'MENU_SCREEN') {
            label = 'Menu';
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
        name={'LIBRARY_SCREEN'}
        component={LibraryScreen}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name={'PROFILE_SCREEN'}
        component={ProfileScreen}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name={'MENU_SCREEN'}
        component={MenuScreen}
        options={{headerShown: false}}
      />
    </Tab.Navigator>
  );
}
