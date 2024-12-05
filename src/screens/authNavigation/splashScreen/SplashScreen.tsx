import React, {useCallback} from 'react';
import {Image, StatusBar, View} from 'react-native';
import {useFocusEffect} from '@react-navigation/native';
import useStyles from './styles';
import AsyncStorage from '@react-native-async-storage/async-storage';
const SplashScreen = (props: any) => {
  const styles = useStyles();

  useFocusEffect(
    useCallback(() => {
      setTimeout(async () => {
        try {
          let token = await AsyncStorage.getItem('token');
          if (token) {
            props.navigation.reset({
              index: 0,
              routes: [
                {
                  name: 'BOTTOM_NAVIGATION',
                },
              ],
            });
          } else {
            props.navigation.reset({
              index: 0,
              routes: [
                {
                  name: 'LOGIN_SCREEN',
                },
              ],
            });
          }
        } catch (err) {
          props.navigation.reset({
            index: 0,
            routes: [
              {
                name: 'LOGIN_SCREEN',
              },
            ],
          });
        }
      }, 1500);
    }, []),
  );

  return (
    <>
      <StatusBar hidden />
      <View style={styles.mainContainer}>
        <View style={styles.viewMainContainer}></View>
      </View>
    </>
  );
};

export default SplashScreen;
