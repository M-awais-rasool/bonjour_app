import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  Alert,
} from 'react-native';
import styles from './styles';
import * as RNIap from 'react-native-iap';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import {Loader} from '../../components/loader';
import AsyncStorage from '@react-native-async-storage/async-storage';

const purchaseProductId = 'product_access';

const FreeTrialScreen = (props: any) => {
  const [colorIndex, setColorIndex] = useState(0);
  const [products, setProducts] = useState<any>([]);
  const [isReady, setIsReady] = useState(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const colors = ['#FF6347', '#1E90FF'];

  useEffect(() => {
    const interval = setInterval(() => {
      setColorIndex(prevIndex => (prevIndex + 1) % colors.length);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const initializeIAP = async () => {
      try {
        await RNIap.initConnection();
        const availableProducts = await RNIap.getProducts({
          skus: [purchaseProductId],
        });

        if (availableProducts && availableProducts.length > 0) {
          setProducts(availableProducts);
          setIsReady(true);
        } else {
          Alert.alert('Error', 'No products are currently available');
        }
      } catch (err: any) {
        Alert.alert(
          'Initialization Error',
          `Unable to initialize in-app purchases: ${err.message}`,
        );
      }
    };

    initializeIAP();
    return () => {
      RNIap.endConnection();
    };
  }, []);

  const purchaseProduct = async () => {
    try {
      setIsLoading(true);
      const userId = auth().currentUser?.uid;
      if (!userId) {
        Alert.alert('Error', 'User not logged in.');
        return;
      }
      const userDoc = await firestore()
        .collection('subscriptions')
        .doc(userId)
        .get();

      const userData = userDoc.data();

      if (userData && !userData?.isSubscribed && userData?.isTrialUsed) {
        const purchaseResult = await RNIap.requestPurchase({
          sku: purchaseProductId,
          skus: [purchaseProductId],
        });

        if (purchaseResult) {
          await firestore().collection('subscriptions').doc(userId).update({
            isSubscribed: true,
            isTrialUsed: false,
          });
          setIsLoading(false);
          await AsyncStorage.setItem('isSubscribed', 'true');
          Alert.alert('Success', 'Subscription purchased successfully!');
          props.navigation.reset({
            index: 0,
            routes: [{name: 'BOTTOM_NAVIGATION'}],
          });
        }
      } else {
        await firestore().collection('subscriptions').doc(userId).set(
          {
            trialStartDate: firestore.Timestamp.now(),
            isSubscribed: false,
            isTrialUsed: true,
          },
          {merge: true},
        );
        const trialStartDate = firestore.Timestamp.now();
        await AsyncStorage.setItem(
          'trialStartDate',
          JSON.stringify(trialStartDate),
        );
        await AsyncStorage.setItem('isSubscribed', 'false');
        setIsLoading(false);
        Alert.alert(
          'Free Trial Started',
          'Your free trial has started! You now have 7 days to explore all features.',
          [
            {
              text: 'OK',
              onPress: () => {
                props.navigation.reset({
                  index: 0,
                  routes: [{name: 'BOTTOM_NAVIGATION'}],
                });
              },
            },
          ],
        );
      }
      setIsLoading(false);
    } catch (err) {
      setIsLoading(false);
      console.error('Purchase Error:', err);
      Alert.alert('Purchase Failed');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Loader isLoading={isLoading} />
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.Text1}>
          <Text style={{color: colors[colorIndex]}}>{'YOU'}</Text>
          {'ENGLISH'}
        </Text>
        <Text style={styles.tagline}>{'Learning English is this easy!'}</Text>

        <Text style={styles.priceText}>{'0$'}</Text>
        <Text style={styles.trialText}>{'THE FIRST 7 DAYS'}</Text>

        <Text style={styles.afterTrial}>
          After the trial period{'\n'}pay only{' '}
          <Text style={styles.boldText}>{'100/RS '}</Text>
          <Text>{'for life time'}</Text>
        </Text>

        <View style={styles.benefitsList}>
          <Text style={styles.benefit}>
            {'• All you need to become fluent in English!'}
          </Text>
          <Text style={styles.benefit}>
            {' • Full access to hours of engaging audio'}
          </Text>
          <Text style={styles.benefit}>{'• Passive and active learning'}</Text>
          <Text style={styles.benefit}>{'• Downloadable materials'}</Text>
          <Text style={styles.benefit}>
            {'• New content added every month'}
          </Text>
          <Text style={styles.benefit}>{'• Learn at your own pace'}</Text>
          <Text style={styles.benefit}>
            {' • A proven method for mastering English'}
          </Text>
        </View>

        <TouchableOpacity
          style={styles.trialButton}
          onPress={() => purchaseProduct()}>
          <Text style={styles.trialButtonText}>{'Subscribe'}</Text>
        </TouchableOpacity>

        <View style={styles.charactersContainer}>
          <View style={styles.character}>
            <Text style={styles.characterEmoji}>🎺</Text>
          </View>
          <View style={styles.character}>
            <Text style={styles.characterEmoji}>👩‍🌾</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default FreeTrialScreen;
