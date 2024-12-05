import {View, Text} from 'react-native';
import React from 'react';
import ToggleButton from '../../components/toggleBtn/ToggleBtn';
import useStyles from './styles';
import {useTheme} from '../../contextProvider/ContextProvider';

const MenuScreen = () => {
  const styles = useStyles();
  const {toggleTheme} = useTheme();

  return (
    <View style={styles.container}>
      <ToggleButton onPress={toggleTheme} />
    </View>
  );
};

export default MenuScreen;
