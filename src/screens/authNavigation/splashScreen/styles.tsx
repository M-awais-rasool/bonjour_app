import {Dimensions, StyleSheet} from 'react-native';
import {useTheme} from '../../../contextProvider/ContextProvider';
const {height} = Dimensions.get('screen');
const useStyles = () => {
  const {theme} = useTheme();

  return StyleSheet.create({
    mainContainer: {
      height: '100%',
      width: '100%',
      backgroundColor: theme.white,
    },
    image1: {
      height: 150,
      width: '100%',
      marginTop: 30,
    },
    imag2: {
      position: 'absolute',
      height: 350,
      width: 350,
      bottom: 0,
      alignSelf: 'center',
    },
    textContainer: {
      marginTop: height - 800,
    },
    Text1: {
      fontSize: 20,
      fontWeight: '700',
      textAlign: 'center',
    },
    Text2: {
      fontSize: 17,
      textAlign: 'center',
      color: theme.textColor29,
    },
  });
};

export default useStyles;
