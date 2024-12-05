import {StyleSheet} from 'react-native';
import {Dimensions} from 'react-native';
import {useTheme} from '../../contextProvider/ContextProvider';
const {height, width} = Dimensions.get('window');

const useStyles = () => {
  const {theme} = useTheme();
  return StyleSheet.create({
    textStyleTitle: {
      fontSize: 14,
      marginVertical: 8,
      color: theme.black,
      textAlign: 'center',
    },
    viewLoader: {
      backgroundColor: theme.white,
      height: height / 4,
      width: width / 2,
      borderRadius: 20,
      rowGap: 5,
    },
    textStyle: {
      fontSize: 12,
      marginVertical: 8,
      color: theme.black,
      textAlign: 'center',
    },
  });
};

export default useStyles;
