import {StyleSheet} from 'react-native';
import {useTheme} from '../../contextProvider/ContextProvider';

const useStyles = () => {
  const {theme} = useTheme();
  return StyleSheet.create({
    container: {
      backgroundColor: theme.white,
      width: '100%',
      height: '100%',
      paddingHorizontal: 15,
    },
  });
};

export default useStyles;
