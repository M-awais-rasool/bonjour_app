import {StyleSheet} from 'react-native';
import {useTheme} from '../../contextProvider/ContextProvider';

const useStyles = () => {
  const {theme} = useTheme();

  return StyleSheet.create({
    mainContainer: {
      height: '100%',
      width: '100%',
      backgroundColor: theme.white,
      paddingHorizontal: 15,
    },
  });
};

export default useStyles;
