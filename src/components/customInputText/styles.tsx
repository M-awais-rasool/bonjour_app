import {StyleSheet} from 'react-native';
import {useTheme} from '../../contextProvider/ContextProvider';

const useStyles = () => {
  const {theme} = useTheme();
  return StyleSheet.create({
    textSubTitle: {
      color: theme.black,
      fontSize: 16,
      fontWeight: '500',
    },
    viewBgInputText: {
      flexDirection: 'row',
      alignItems: 'center',
      height: 45,
      marginTop: 3,
      backgroundColor: theme.white,
      borderColor: theme.borderColor5,
      borderWidth: 1,
      borderRadius: 8,
      paddingHorizontal: 12,
    },
    textInput: {
      color: theme.black,
      fontSize: 14,
      fontWeight: '500',
    },
    textInput1: {
      color: theme.black,
      fontSize: 13,
      fontWeight: '500',
      paddingVertical: 5,
    },
    imageIcon: {
      height: 17,
      width: 17,
      tintColor: theme.textColor3,
    },
    textError: {
      color: theme.textColor5,
      marginTop: 2,
      fontSize: 14,
      fontWeight: '400',
    },
  });
};

export default useStyles;
