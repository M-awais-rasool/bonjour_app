import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#FFF9E7',
    },
    content: {
      padding: 20,
      alignItems: 'center',
    },
    Text1: {
      fontSize: 20,
      fontWeight: '700',
      textAlign: 'center',
      color: '#004aad',
    },
    tagline: {
      fontSize: 16,
      color: '#004aad',
      textAlign: 'center',
      marginBottom: 30,
    },
    priceText: {
      fontSize: 50,
      fontWeight: 'bold',
      color: '#004aad',
      marginBottom: 10,
    },
    trialText: {
      fontSize: 18,
      color: '#004aad',
      fontWeight: 'bold',
      textAlign: 'center',
      marginBottom: 5,
    },
    cancelText: {
      fontSize: 14,
      color: '#004aad',
      textAlign: 'center',
      marginBottom: 20,
    },
    afterTrial: {
      fontSize: 16,
      color: '#000',
      textAlign: 'center',
      marginBottom: 20,
    },
    boldText: {
      fontWeight: 'bold',
      color: '#4A90E2',
    },
    benefitsList: {
      width: '100%',
      marginBottom: 30,
    },
    benefit: {
      fontSize: 14,
      color: 'black',
      marginBottom: 8,
      lineHeight: 20,
    },
    trialButton: {
      backgroundColor: '#4A90E2',
      paddingVertical: 12,
      paddingHorizontal: 50,
      borderRadius: 25,
      marginBottom: 20,
    },
    trialButtonText: {
      color: '#fff',
      fontSize: 16,
      fontWeight: 'bold',
    },
    charactersContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: 20,
      width: '100%',
    },
    character: {
      flex: 1,
      alignItems: 'center',
    },
    characterEmoji: {
      fontSize: 50,
    },
  });

  export default styles;