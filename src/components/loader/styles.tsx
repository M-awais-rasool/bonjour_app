import {StyleSheet} from 'react-native';
import {useTheme} from '../../contextProvider/ContextProvider';

const useStyles = () => {
  const {theme} = useTheme();
  return StyleSheet.create({
    viewLoader: {
      backgroundColor: theme.white,
      height: 80,
      width: 80,
      borderRadius: 20,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });
};

export default useStyles;
