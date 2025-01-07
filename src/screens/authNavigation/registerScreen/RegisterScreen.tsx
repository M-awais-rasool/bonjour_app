import React, {useEffect, useState} from 'react';
import {Image, StatusBar, Text, View, ScrollView} from 'react-native';
import {Validations} from '../../../constants';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import {useToast} from 'react-native-toasty-toast';
import {Loader} from '../../../components/loader';
import {InputText} from '../../../components/customInputText';
import {CustomButton} from '../../../components/customButton';
import useStyles from './styles';
import {DropDown} from '../../../components/dropDown';
const RegisterScreen = (props: any) => {
  const {showToast} = useToast();
  const styles = useStyles();

  const [isSecure, setIsSecure] = useState<boolean>(false);
  //input state
  const [textEmail, setTextEmail] = useState<string>('');
  const [textName, setTextName] = useState<string>('');
  const [textPassword, setTextPassword] = useState<string>('');
  const [dropValue, setDropValue] = useState<string>('');
  //error state
  const [errorName, setErrorName] = useState<string>('');
  const [errorEmail, setErrorEmail] = useState<string>('');
  const [errorDrop, setErrorDrop] = useState<string>('');
  const [errorPassword, setErrorPassword] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const isAllValid = () => {
    let isValid = true;
    setErrorName('');
    setErrorEmail('');
    setErrorPassword('');
    setErrorDrop('');

    if (!textName.trim()) {
      isValid = false;
      setErrorName('*Please enter your name!');
    } else if (!Validations.isValidEmail(textEmail)) {
      isValid = false;
      setErrorEmail('*Please enter a valid email!');
    } else if (!Validations.isValidPassword(textPassword)) {
      isValid = false;
      setErrorPassword(
        '*Password must be 8 characters long with 1 special character, 1 capital, 1 small case, and 1 number!',
      );
    } else if (!dropValue) {
      isValid = false;
      setErrorDrop('*Please select a grade!');
    }
    return isValid;
  };

  const handleSignUp = async () => {
    setIsLoading(true);
    try {
      auth()
        .createUserWithEmailAndPassword(textEmail, textPassword)
        .then(async (res: any) => {
          await firestore().collection('users').doc(res.user.uid).set({
            userId: res.user.uid,
            name: textName,
            email: textEmail,
            password: textPassword,
            gender: dropValue,
          });
          setTextEmail('');
          setTextPassword('');
          setIsLoading(false);
          showToast('Account created successfully!', 'success', 'top', 1000);
          props.navigation.navigate('LOGIN_SCREEN');
        })
        .catch(error => {
          setIsLoading(false);
          if (error.code === 'auth/email-already-in-use') {
            showToast(
              'That email address is already in use!',
              'error',
              'bottom',
              1000,
            );
          }
          if (error.code === 'auth/invalid-email') {
            showToast(
              'That email address is invalid!',
              'error',
              'bottom',
              1000,
            );
          }
        });
    } catch (err) {
      setIsLoading(false);
    }
  };

  return (
    <>
      <StatusBar
        hidden={false}
        backgroundColor={'#fff'}
        barStyle={'dark-content'}
      />
      <ScrollView style={styles.mainContainer}>
        <Loader isLoading={isLoading} />
        <Image
          source={require('../../../resource/login.png')}
          style={styles.mainImage}
        />
        <Text style={styles.topSubTitle}>
          {'Let’s learn English together!'}
        </Text>
        <Image
          source={require('../../../resource/loginImage.jpg')}
          style={styles.image}
        />
        <Text style={styles.textTitle}>{'Create an account'}</Text>
        <View style={[styles.marginV8, styles.padding]}>
          {/* Name Input */}
          <InputText
            value={textName}
            title={'Name'}
            error={errorName}
            onBlur={() => isAllValid()}
            onChangeText={setTextName}
            keyboardType={'email-address'}
            viewMainStyle={styles.marginV5}
            placeholder={'Enter your name'}
          />
          {/* Email Input */}
          <InputText
            value={textEmail}
            title={'Email'}
            error={errorEmail}
            onChangeText={setTextEmail}
            onBlur={() => isAllValid()}
            keyboardType={'email-address'}
            viewMainStyle={styles.marginV5}
            placeholder={'Enter your email'}
          />
          {/* Password Input */}
          <InputText
            value={textPassword}
            title={'Password'}
            error={errorPassword}
            isPassword={true}
            secure={isSecure}
            onChangeSecurity={() => {
              setIsSecure(!isSecure);
            }}
            onBlur={() => isAllValid()}
            onChangeText={setTextPassword}
            viewMainStyle={styles.marginV5}
            placeholder={'Enter your password'}
          />
          <DropDown
            title="Select Gender"
            onBlur={() => isAllValid()}
            onChange={setDropValue}
            value={dropValue}
            bgStyle={styles.marginV5}
            error={errorDrop}
          />
        </View>
        <View style={styles.marginV8} />
        {/* Sign Up Button */}
        <CustomButton
          title={'Sign Up'}
          bgStyle={styles.viewButton}
          onClick={() => {
            if (isAllValid()) {
              handleSignUp();
            }
          }}
        />
        <View style={styles.marginV8} /> <View style={styles.marginV8} />
      </ScrollView>
    </>
  );
};

export default RegisterScreen;
