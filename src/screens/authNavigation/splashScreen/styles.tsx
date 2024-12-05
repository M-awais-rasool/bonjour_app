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
    viewMainContainer: {
      height: '100%',
      width: '100%',
      position: 'absolute',
      justifyContent: 'center',
      alignItems: 'center',
      paddingHorizontal: 20,
      backgroundColor: theme.bgColor10,
    },
    image: {
      height: 150,
      width: 150,
    },
  });
};

export default useStyles;
