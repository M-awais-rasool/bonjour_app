import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  StatusBar,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {InputText} from '../../components/customInputText';
import {CustomButton} from '../../components/customButton';
import useStyles from './styles';
import firestore from '@react-native-firebase/firestore';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {DropDown} from '../../components/dropDown';
import {Loader} from '../../components/loader';
import {useToast} from 'react-native-toasty-toast';
import {useFocusEffect} from '@react-navigation/native';
const ProfileScreen = (props: any) => {
  const styles = useStyles();
  const {showToast} = useToast();
  const [name, setName] = useState('');
  const [nameError, setNameError] = useState('');
  const [data, setData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [dropValue, setDropValue] = useState<string>('');

  const isAllValid = () => {
    let isValid = true;
    setNameError('');
    if (!name) {
      isValid = false;
      setNameError('*Please enter Name!');
    }
    return isValid;
  };

  useFocusEffect(
    React.useCallback(() => {
      getData();
    }, []),
  );

  const getData = async () => {
    try {
      setIsLoading(true);
      const userId: any = await AsyncStorage.getItem('userId');
      const res = await firestore().collection('users').doc(userId).get();
      if (res.exists) {
        const userData = res.data();
        setData(userData);
        setName(userData?.name);
        setDropValue(userData?.gender);
      }
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.error('Error fetching user data:', error);
    }
  };

  const doUpdate = async () => {
    try {
      setIsLoading(true);
      const userId: any = await AsyncStorage.getItem('userId');
      const res = await firestore().collection('users').doc(userId).update({
        name: name,
        gender: dropValue,
      });
      getData();
      setIsLoading(false);
      showToast('Profile update successfully', 'success', 'top', 1000);
    } catch (Lands) {
      setIsLoading(false);
      console.error('Error fetching user data:', Lands);
    }
  };

  const onLogout = () => {
    AsyncStorage.clear();
    props.navigation.reset({
      index: 0,
      routes: [{name: 'LOGIN_SCREEN'}],
    });
  };
  return (
    <>
      <StatusBar
        hidden={false}
        backgroundColor={'#ffff'}
        barStyle={'dark-content'}
      />
      <Loader isLoading={isLoading} />
      <ScrollView style={styles.container}>
        <Text style={styles.profileText}>Profile</Text>
        <View style={styles.martgin} />
        <View style={styles.martgin} />
        <View style={styles.martgin} />
        <InputText
          value={data?.email}
          title="Email"
          placeholder="Enter your Email"
          isEditable={false}
        />
        <View style={styles.martgin} />
        <InputText
          value={name}
          title="Full Name"
          error={nameError}
          onChangeText={setName}
          placeholder="Enter your Name"
        />
        <View style={styles.martgin} />
        <DropDown
          title="Select Gender"
          onBlur={() => isAllValid()}
          onChange={setDropValue}
          value={dropValue}
          dropdownList={{top:63}}
        />
        <View style={styles.martgin} />
        <View style={styles.martgin} />
        <CustomButton
          title="Save"
          onClick={() => {
            if (isAllValid()) {
              doUpdate();
            }
          }}
        />
        <View style={styles.martgin} />
        <CustomButton
          title="Logout"
          bgStyle={{backgroundColor: '#F84D42'}}
          onClick={() => {
            onLogout();
          }}
        />
      </ScrollView>
    </>
  );
};

export default ProfileScreen;
