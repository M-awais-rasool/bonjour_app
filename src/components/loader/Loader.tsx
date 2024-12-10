import React, {FC} from 'react';
import {ActivityIndicator, View} from 'react-native';
import useStyles from './styles';

interface LoaderProps {
  isLoading: boolean;
}

const Loader = (props: LoaderProps) => {
  const styles = useStyles();
  if (!props.isLoading) return null;
  return (
    <View style={styles.container}>
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#004aad" />
      </View>
    </View>
  );
};

export default Loader;
