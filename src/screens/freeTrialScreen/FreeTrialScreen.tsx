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
import * as RNIap from 'react-native-iap'

const purchaseProductId = 'premium_access'; 
const FreeTrialScreen = (props: any) => {
  const [colorIndex, setColorIndex] = useState(0);
  const colors = ['#FF6347', '#1E90FF'];

  useEffect(() => {
    const interval = setInterval(() => {
      setColorIndex(prevIndex => (prevIndex + 1) % colors.length);
    }, 1000);

    return () => clearInterval(interval);
  }, []);
  const [products, setProducts] = useState<any>([]);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setColorIndex(prevIndex => (prevIndex + 1) % colors.length);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const initializeIAP = async () => {
      try {
        if (!RNIap || !RNIap.initConnection) {
          throw new Error('RNIap is not properly imported');
        }
        const result = await RNIap.initConnection();
        console.log('IAP Connection Result:', result);

        const availableProducts = await RNIap.getProducts({
          skus: [purchaseProductId]
        });
        if (availableProducts && availableProducts.length > 0) {
          setProducts(availableProducts);
          setIsReady(true);
        } else {
          console.warn('No products available');
          Alert.alert('Error', 'No products are currently available');
        }
      } catch (err:any) {
        console.error('Detailed IAP Initialization Error:', err);
        Alert.alert(
          'Initialization Error', 
          `Unable to initialize in-app purchases: ${err.message}`
        );
      }
    };

    initializeIAP();
    return () => {
      try {
        if (RNIap && RNIap.endConnection) {
          RNIap.endConnection();
        }
      } catch (err) {
        console.error('Error ending IAP connection:', err);
      }
    };
  }, []);

  const purchaseProduct = async () => {
    try {
      console.log('Available Products:', products);
  
      if (!products || products.length === 0) {
        Alert.alert('Error', 'No products are currently available');
        return;
      }
  
      const productDetails = products[0];
      console.log('Product Details:', {
        productId: productDetails.productId,
        price: productDetails.price,
        currency: productDetails.currency,
        type: productDetails.type
      });
  
      const purchaseResult = await RNIap.requestPurchase({
        sku: purchaseProductId,
        skus: [purchaseProductId]
      });
      
      console.log('Purchase successful:', purchaseResult);
    } catch (err) {
      console.error('Full Purchase Error:', err);
      Alert.alert('Purchase Failed', `Detailed error: ${JSON.stringify(err)}`);
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.Text1}>
          <Text style={{color: colors[colorIndex]}}>{'YOU'}</Text>
          {'FRANCH'}
        </Text>
        <Text style={styles.tagline}>{'Learning French is this easy!'}</Text>

        <Text style={styles.priceText}>{'0$'}</Text>
        <Text style={styles.trialText}>{'THE FIRST 7 DAYS'}</Text>
        <Text style={styles.cancelText}>{'you can cancel anytime'}</Text>

        <Text style={styles.afterTrial}>
          After the trial period{'\n'}pay only{' '}
          <Text style={styles.boldText}>{'10$/month'}</Text>
        </Text>

        <View style={styles.benefitsList}>
          <Text style={styles.benefit}>
            {'• All you need to become fluent in French!'}
          </Text>
          <Text style={styles.benefit}>
            {' • Full access to hours of engaging audio'}
          </Text>
          <Text style={styles.benefit}>{'• Passive and active learning'}</Text>
          <Text style={styles.benefit}>
            {
              ' • Learn while awake and even while you sleep: conscious & subconscious modes'
            }
          </Text>
          <Text style={styles.benefit}>
            {'• Adapted for all levels (beginner, intermediate, advanced)'}
          </Text>
          <Text style={styles.benefit}>{'• Downloadable materials'}</Text>
          <Text style={styles.benefit}>
            {'• New content added every month'}
          </Text>
          <Text style={styles.benefit}>{'• Learn at your own pace'}</Text>
          <Text style={styles.benefit}>
            {' • A proven method for mastering French'}
          </Text>
        </View>

        <TouchableOpacity
          style={styles.trialButton}
          onPress={() =>
            // props.navigation.reset({
            // //   index: 0,
            // //   routes: [{name: 'BOTTOM_NAVIGATION'}],
            // // })
            purchaseProduct()
          }>
          <Text style={styles.trialButtonText}>{'FREE TRIAL'}</Text>
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
