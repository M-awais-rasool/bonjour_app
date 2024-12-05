import {Dimensions, StyleSheet} from 'react-native';
import {useTheme} from '../../contextProvider/ContextProvider';
const {height} = Dimensions.get('window');

const useStyles = () => {
  const {theme} = useTheme();
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.white,
      padding: 20,
    },
    subContainer: {
      borderWidth: 0.7,
      borderColor: theme.textColor29,
      borderRadius: 20,
      height: height - 300,
    },
    youText: {
      fontSize: 18,
      color: theme.textColor28,
      fontWeight: 'bold',
      textAlign: 'center',
    },
    frenchText: {
      fontSize: 18,
      color: theme.textColor29,
      fontWeight: 'bold',
    },
    subText: {
      fontSize: 16,
      color: theme.textColor29,
      marginVertical: 10,
      marginBottom: 20,
      textAlign: 'center',
    },
    wordButton: {
      flexDirection: 'row',
      alignItems: 'center',
      marginVertical: 8,
      padding: 15,
      borderRadius: 8,
    },

    wordText: {
      marginLeft: 10,
      fontSize: 16,
      color: theme.black,
    },
    activeText: {
      fontWeight: 'bold',
      color: theme.textColor29,
    },
  });
};

export default useStyles;
