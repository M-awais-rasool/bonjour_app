import React, {FC} from 'react';
import {ActivityIndicator, View} from 'react-native';
import styles from './styles';
import Theme from '../../theme/Theme';
import {Overlay} from 'react-native-elements';

interface LoaderProps {
  isLoading: boolean;
}

const Loader: FC<LoaderProps> = props => {
  return (
    <Overlay isVisible={props.isLoading} onBackdropPress={console.log}>
      <View style={styles.viewLoader}>
        <ActivityIndicator size="large" color={Theme.colors.appColor} />
      </View>
    </Overlay>
  );
};

export default Loader;
