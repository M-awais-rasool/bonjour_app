import {StyleSheet} from 'react-native';
import {useTheme} from '../../../contextProvider/ContextProvider';

const useStyles = () => {
  const {theme} = useTheme();

  return StyleSheet.create({
    mainContainer: {
      height: '100%',
      width: '100%',
      backgroundColor: theme.white,
    },
    topTitle: {
      fontSize: 18,
      color: theme.black,
      fontWeight: 'bold',
      textAlign: 'center',
    },
    topSubTitle: {
      fontSize: 16,
      color: theme.black,
      textAlign: 'center',
      marginBottom: 30,
    },
    image: {
      width: 200,
      height: 200,
      alignSelf: 'center',
    },
    viewContainer: {
      flex: 1,
    },
    padding: {
      paddingHorizontal: 20,
    },
    imageMain: {
      alignSelf: 'center',
      height: 80,
      width: 80,
      marginVertical: 30,
      marginTop: 80,
    },
    viewCenter: {
      paddingHorizontal: 15,
      marginTop: 55,
      paddingBottom: 60,
    },
    textTitle: {
      color: theme.textColor3,
      fontSize: 16,
      fontWeight: 'bold',
      textAlign: 'center',
      marginTop: 10,
    },
    marginV8: {
      marginVertical: 8,
    },
    marginV5: {
      marginVertical: 5,
    },
    viewButton: {
      marginVertical: 15,
      marginHorizontal: 15,
    },
    dontText: {
      fontSize: 15,
      color: theme.black,
      textAlign: 'center',
    },
    SignUpText: {
      fontSize: 15,
      color: theme.textColor28,
      fontWeight: 'bold',
    },
    mainImage: {
      width: 200,
      height: 100,
      alignSelf: 'center',
      resizeMode: 'contain',
      marginTop: 20,
    },
  });
};

export default useStyles;
