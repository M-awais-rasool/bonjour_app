import {StyleSheet} from 'react-native';
import {useTheme} from '../../contextProvider/ContextProvider';

const useStyles = () => {
  const {theme} = useTheme();
  return StyleSheet.create({
    toggleContainer: {
      width: 60,
      height: 30,
      borderRadius: 15,
      justifyContent: 'center',
      borderWidth: 1,
      borderColor: 'gray',
      position: 'relative',
      overflow: 'hidden',
    },
    flexRow: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      width: '99%',
      marginTop: 20,
    },
    ThemeText: {
      fontSize: 18,
      color: theme.black,
      fontWeight: '600',
      letterSpacing: 0.7,
    },
    toggleCircle: {
      width: 26,
      height: 26,
      borderRadius: 13,
      position: 'absolute',
      left: 2,
    },
  });
};

export default useStyles;
