import React, {useState} from 'react';
import {
  Image,
  ScrollView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import styles from './styles';
import {Validations} from '../../../constants';
import Theme from '../../../theme/Theme';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import {useToast} from 'react-native-toasty-toast';
import {Loader} from '../../../components/loader';
import {InputText} from '../../../components/customInputText';
import {CustomButton} from '../../../components/customButton';

const LoginScreen = (props: any) => {
  const {showToast} = useToast();
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
      const userDoc: any = await firestore()
        .collection('users')
        .doc(userCredential.user.uid)
        .get();
      if (userDoc.exists) {
        let data = userDoc._data;
        let token = `${data.email}${data.userId}`;
        setIsLoading(false);
        showToast('Login successfully!', 'success', 'top', 1000);
        props.navigation.reset({
          index: 0,
          routes: [{name: "HOME_SCREEN"}],
        });
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
    }
  };

  return (
    <>
      <StatusBar
        hidden={false}
        backgroundColor={Theme.colors.white}
        barStyle={'dark-content'}
      />
      <Loader isLoading={isLoading} />
      <ScrollView style={styles.mainContainer}>
        <Text style={styles.textTitle}>{'Sign In'}</Text>
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
            // if (isAllValid()) {
            //   doLogin();
            // }
            props.navigation.navigate("BOTTOM_NAVIGATION");
          }}
        />
        <TouchableOpacity
          onPress={() => props.navigation.navigate("REGISTER_SCREEN")}>
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
