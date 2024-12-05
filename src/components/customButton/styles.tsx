import {StyleSheet} from 'react-native';
import {useTheme} from '../../contextProvider/ContextProvider';

const useStyles = () => {
  const {theme} = useTheme();
  return StyleSheet.create({
    viewMain: {
      paddingHorizontal: 20,
      paddingVertical: 10,
      borderTopLeftRadius: 15,
      borderTopRightRadius: 15,
      backgroundColor: theme.bgColor2,
      shadowColor: theme.textColor29,
      shadowOffset: {
        width: 0,
        height: -5,
      },
      shadowOpacity: 0.29,
      shadowRadius: 4.65,
      elevation: 15,
    },
    bgStyle: {
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 20,
      backgroundColor: theme.textColor29,
      paddingVertical: 10,
      width:'80%',
      alignSelf:'center',
    },
    viewSvg: {
      height: 18,
      width: 18,
      marginRight: 5,
    },
    textStyle: {
      color: theme.white,
      fontSize: 15,
      fontWeight: '700',
    },
    image: {
      marginLeft: 10,
    },
  });
};

export default useStyles;
