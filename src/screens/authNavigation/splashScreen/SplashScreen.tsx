import React, {useCallback} from 'react';
import {Image, StatusBar, View} from 'react-native';
import styles from './styles';
import {useFocusEffect} from '@react-navigation/native';
import Theme from '../../../theme/Theme';

const SplashScreen = (props: any) => {
  useFocusEffect(
    useCallback(() => {
      setTimeout(async () => {
        props.navigation.reset({
          index: 0,
          routes: [
            {
              name: "LOGIN_SCREEN",
            },
          ],
        });
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
