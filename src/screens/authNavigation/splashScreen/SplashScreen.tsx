import React, {useCallback, useEffect, useState} from 'react';
import {Image, StatusBar, Text, View, Alert} from 'react-native';
import {useFocusEffect} from '@react-navigation/native';
import useStyles from './styles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import firestore from '@react-native-firebase/firestore';

const SplashScreen = (props: any) => {
  const styles = useStyles();
  const [colorIndex, setColorIndex] = useState(0);
  const colors = ['#FF6347', '#1E90FF'];

  const checkUserStatus = async () => {
    try {
      const token = await AsyncStorage.getItem('token');
      const userId = await AsyncStorage.getItem('userId');

      if (token && userId) {
        const subscriptionsDoc = await firestore()
          .collection('subscriptions')
          .doc(userId)
          .get();
        const subscriptionsData = subscriptionsDoc.data();

        if (subscriptionsData?.isSubscribed) {
          props.navigation.reset({
            index: 0,
            routes: [{name: 'BOTTOM_NAVIGATION'}],
          });
        } else if (checkTrialStatus(subscriptionsData?.trialStartDate)) {
          props.navigation.reset({
            index: 0,
            routes: [{name: 'LOGIN_SCREEN'}],
          });
        } else {
          props.navigation.reset({
            index: 0,
            routes: [{name: 'BOTTOM_NAVIGATION'}],
          });
        }
      } else {
        props.navigation.reset({
          index: 0,
          routes: [{name: 'LOGIN_SCREEN'}],
        });
      }
    } catch (err) {
      console.error('Error checking user status:', err);
      props.navigation.reset({
        index: 0,
        routes: [{name: 'LOGIN_SCREEN'}],
      });
    }
  };

  const checkTrialStatus = (trialStartDate: any) => {
    if (!trialStartDate) return true;
    const trialEndDate = trialStartDate.toDate();
    trialEndDate.setDate(trialEndDate.getDate() + 7);

    return new Date() > trialEndDate;
  };

  useFocusEffect(
    useCallback(() => {
      setTimeout(() => {
        checkUserStatus();
      }, 2000);
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
            {'ENGLISH'}
          </Text>
          <Text style={styles.Text2}>
            {'Welcome to your English learning journey with us!'}
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
