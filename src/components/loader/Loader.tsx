import React, {FC} from 'react';
import {ActivityIndicator, View} from 'react-native';
import {Overlay} from 'react-native-elements';
import {useTheme} from '../../contextProvider/ContextProvider';
import useStyles from './styles';

interface LoaderProps {
  isLoading: boolean;
}

const Loader: FC<LoaderProps> = props => {
  const styles = useStyles();
  const {theme} = useTheme();
  return (
    <Overlay isVisible={props.isLoading} onBackdropPress={console.log}>
      <View style={styles.viewLoader}>
        <ActivityIndicator size="large" color={theme.appColor} />
      </View>
    </Overlay>
  );
};

export default Loader;
