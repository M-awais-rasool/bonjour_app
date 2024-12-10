import {StyleSheet} from 'react-native';
import {useTheme} from '../../contextProvider/ContextProvider';

const useStyles = () => {
  const {theme} = useTheme();

  return StyleSheet.create({
    container: {
      width: '100%',
      height: '100%',
      backgroundColor: theme.white,
      paddingHorizontal: 10,
    },
    martgin: {
      marginTop: 15,
    },
    profileText: {
      marginTop: 30,
      textAlign: 'center',
      fontSize: 20,
      fontWeight: 'bold',
      letterSpacing: 0.7,
      color: 'black',
    },
  });
};
export default useStyles;
