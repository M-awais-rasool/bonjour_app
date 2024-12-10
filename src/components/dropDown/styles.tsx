import {StyleSheet} from 'react-native';
import {useTheme} from '../../contextProvider/ContextProvider';

const useStyles = () => {
  const {theme} = useTheme();
  return StyleSheet.create({
    dropdownButton: {
      borderWidth: 1,
      borderTopLeftRadius: 8,
      borderTopRightRadius: 8,
      padding: 8,
      borderColor: theme.borderColor5,
      height: 45,
      justifyContent: 'center',
    },
    dropdownList: {
      backgroundColor: theme.white,
      borderWidth: 1,
      borderColor: theme.borderColor5,
      borderBottomLeftRadius: 8,
      borderBottomRightRadius: 8,
      marginTop: 8,
      position: 'absolute',
      top: 69,
      zIndex: 1,
      width: '100%',
      height: 75,
    },
    dropdownItem: {
      padding: 8,
      borderBottomWidth: 1,
      borderColor: theme.borderColor5,
      borderRadius: 8,
    },
    textSubTitle: {
      color: theme.black,
      fontSize: 16,
      fontWeight: '500',
      marginBlock: 3,
    },
    textInput: {
      color: theme.black,
      fontSize: 14,
      fontWeight: '500',
    },
    disableTextInput: {
      color: theme.textColor8,
      fontSize: 14,
      fontWeight: '500',
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
