import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './styles';

const MembershipScreen = (props: any) => {
  const features = [
    {icon: 'book', title: 'Vocabulary'},
    {icon: 'comment', title: 'Sentences'},
    {icon: 'users', title: 'Dialogues'},
    {icon: 'lightbulb-o', title: 'Grammar'},
    {icon: 'list-alt', title: 'Conjugation'},
    {icon: 'gift', title: 'Bonus'},
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.title}>
          {' Start listening with your membership today'}
        </Text>
        <Text style={styles.subtitle}>
          {
            ' Unlock all the French learning audio today and become fluent faster with YouFrench!'
          }
        </Text>

        <TouchableOpacity
          style={styles.continueButton}
          onPress={() => props.navigation.navigate('FREE_TRIAL_SCREEN')}>
          <Text style={styles.continueButtonText}>{'CONTINUE'}</Text>
          <Icon
            name="hand-pointer-o"
            size={20}
            color="#fff"
            style={styles.continueIcon}
          />
        </TouchableOpacity>

        <View style={styles.featuresContainer}>
          {features.map((feature, index) => (
            <View key={index} style={styles.featureCard}>
              <Icon name={feature.icon} size={40} color="#FFD700" />
              <Text style={styles.featureTitle}>{feature.title}</Text>
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default MembershipScreen;
