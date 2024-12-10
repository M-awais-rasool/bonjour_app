import React, {useState} from 'react';
import {
  Image,
  ScrollView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Validations} from '../../../constants';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import {useToast} from 'react-native-toasty-toast';
import {Loader} from '../../../components/loader';
import {InputText} from '../../../components/customInputText';
import {CustomButton} from '../../../components/customButton';
import useStyles from './styles';
import AsyncStorage from '@react-native-async-storage/async-storage';
const LoginScreen = (props: any) => {
  const {showToast} = useToast();
  const styles = useStyles();

  const [isSecure, setIsSecure] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  // Main States
  const [textEmail, setTextEmail] = useState<string>('');
  const [textPassword, setTextPassword] = useState<string>('');
  // Error States
  const [errorEmail, setErrorEmail] = useState<string>('');
  const [errorPassword, setErrorPassword] = useState<string>('');
  // End States

  const isAllValid = () => {
    let isValid = true;

    setErrorEmail('');
    setErrorPassword('');

    if (!Validations.isValidEmail(textEmail)) {
      isValid = false;
      setErrorEmail('*Please enter valid email!');
    } else if (!Validations.isValidPassword(textPassword)) {
      isValid = false;
      setErrorPassword(
        '*Password must have 8 characters with 1 speacial character 1 capital 1 small and 1 number!',
      );
    }

    return isValid;
  };
  const doLogin = async () => {
    try {
      setIsLoading(true);
      const userCredential = await auth().signInWithEmailAndPassword(
        textEmail,
        textPassword,
      );
      //get user data from user table
      const userDoc: any = await firestore()
        .collection('users')
        .doc(userCredential.user.uid)
        .get();
      if (userDoc.exists) {
        const userData = userDoc.data();
        let token = `${userData.email}${userData.userId}`;
        await AsyncStorage.setItem('token', token);
        await AsyncStorage.setItem('userId', userData.userId);

        //get subscriptions data from subscriptions table
        const subscriptions = await firestore()
          .collection('subscriptions')
          .doc(userCredential.user.uid)
          .get();
        const subscriptionsData = subscriptions.data();
        setIsLoading(false);
        showToast('Login successfully!', 'success', 'top', 1000);

        // check if user is subscribed and trial is used or not
        if (subscriptionsData?.isSubscribed) {
          props.navigation.reset({
            index: 0,
            routes: [{name: 'BOTTOM_NAVIGATION'}],
          });
        } else if (await checkTrialStatus(subscriptionsData?.trialStartDate)) {
          props.navigation.reset({
            index: 0,
            routes: [{name: 'MEMBER_SHIP_SCREEN'}],
          });
        } else {
          props.navigation.reset({
            index: 0,
            routes: [{name: 'BOTTOM_NAVIGATION'}],
          });
        }
      }
    } catch (error: any) {
      setIsLoading(false);
      let errorMessage = '';
      if (error.code === 'auth/user-not-found') {
        errorMessage = 'No user found with this email address.';
        showToast(errorMessage, 'error', 'bottom', 1000);
      } else if (error.code === 'auth/wrong-password') {
        errorMessage = 'Incorrect password.';
        showToast(errorMessage, 'error', 'bottom', 1000);
      } else if (error.code === 'auth/invalid-email') {
        errorMessage = 'Invalid email address.';
        showToast(errorMessage, 'error', 'bottom', 1000);
      } else {
        errorMessage = 'Invalid email or password';
        showToast(errorMessage, 'error', 'bottom', 1000);
      }
      console.log(error);
    }
  };

  const checkTrialStatus = async (trialStartDate: any) => {
    if (!trialStartDate) return true;
    const trialEndDate = trialStartDate.toDate();
    trialEndDate.setDate(trialEndDate.getDate() + 7);

    return new Date() > trialEndDate;
  };
  return (
    <>
      <StatusBar
        hidden={false}
        backgroundColor={'#ffff'}
        barStyle={'dark-content'}
      />
      <Loader isLoading={isLoading} />
      <ScrollView style={styles.mainContainer}>
        <Image
          source={require('../../../resource/login.png')}
          style={styles.mainImage}
        />
        <Text style={styles.topSubTitle}>{'Let’s learn English together!'}</Text>
        <Image
          source={require('../../../resource/loginImage.jpg')}
          style={styles.image}
        />
        <Text style={styles.textTitle}>{'Log into your account'}</Text>
        <View style={[styles.marginV8, styles.padding]}>
          <InputText
            value={textEmail}
            title={'Email'}
            error={errorEmail}
            onChangeText={setTextEmail}
            keyboardType={'email-address'}
            viewMainStyle={styles.marginV5}
            placeholder={'Enter your email'}
          />
          <InputText
            value={textPassword}
            title={'Password'}
            error={errorPassword}
            isPassword={true}
            secure={isSecure}
            onChangeSecurity={() => {
              setIsSecure(!isSecure);
            }}
            onChangeText={setTextPassword}
            viewMainStyle={styles.marginV5}
            placeholder={'Enter your password'}
          />
        </View>
        <CustomButton
          title={'Login'}
          bgStyle={styles.viewButton}
          onClick={() => {
            if (isAllValid()) {
              doLogin();
            }
          }}
        />
        <TouchableOpacity
          onPress={() => props.navigation.navigate('REGISTER_SCREEN')}>
          <Text style={styles.dontText}>
            Don't have an account?
            <Text style={styles.SignUpText}> Sign Up</Text>
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </>
  );
};

export default LoginScreen;
