import React, {useCallback, useEffect, useState} from 'react';
import {Image, StatusBar, Text, View} from 'react-native';
import {useFocusEffect} from '@react-navigation/native';
import useStyles from './styles';
import AsyncStorage from '@react-native-async-storage/async-storage';
const SplashScreen = (props: any) => {
  const styles = useStyles();
  const [colorIndex, setColorIndex] = useState(0);
  const colors = ['#FF6347', '#1E90FF'];

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

  useEffect(() => {
    const interval = setInterval(() => {
      setColorIndex(prevIndex => (prevIndex + 1) % colors.length);
    }, 1000);

    return () => clearInterval(interval);
  }, []);
  return (
    <>
      <StatusBar hidden />
      <View style={styles.mainContainer}>
        <Image
          source={require('../../../resource/splash2.png')}
          style={styles.image1}
        />
        <View style={styles.textContainer}>
          <Text style={styles.Text1}>
            <Text style={{color: colors[colorIndex]}}>{'YOU'}</Text>
            {'FRANCH'}
          </Text>
          <Text style={styles.Text2}>
            {'Welcome to your French learning journey with us!'}
          </Text>
        </View>
        <Image
          source={require('../../../resource/splash1.png')}
          style={styles.imag2}
        />
      </View>
    </>
  );
};

export default SplashScreen;
