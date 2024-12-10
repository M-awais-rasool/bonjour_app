import {Dimensions, StyleSheet} from 'react-native';
import {useTheme} from '../../contextProvider/ContextProvider';
const {width, height} = Dimensions.get('screen');
const useStyles = () => {
  const {theme} = useTheme();
  return StyleSheet.create({
    container: {
      width,
      height,
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 2,
    },
    loadingContainer: {
      width: 110,
      height: 110,
      backgroundColor: 'white',
      justifyContent: 'center',
      alignItems: 'center',
    },
  });
};

export default useStyles;
