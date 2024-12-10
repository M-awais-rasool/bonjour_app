import {StyleSheet} from 'react-native';
import {useTheme} from '../../contextProvider/ContextProvider';

const useStyles = () => {
  const {theme} = useTheme();

  return StyleSheet.create({
    Container: {
      width: '48%',
      height: 200,
      backgroundColor: theme.textColor29,
      marginTop:10,
      alignItems:'center',
      justifyContent:'center',
      borderRadius:20,
    },
    text:{
      fontSize:18,
      color:theme.white,
      fontWeight:'400',
      letterSpacing:0.8,
      marginTop:25
    }
  });
};

export default useStyles;
