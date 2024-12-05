import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {Overlay} from 'react-native-elements';
import {useTheme} from '../../contextProvider/ContextProvider';
import useStyles from './styles';

const DropPicker = (props: any) => {
  const styles = useStyles();
  const {theme} = useTheme();
  return (
    <Overlay isVisible={props.isLoading}>
      <View style={styles.viewLoader}>
        <View></View>
        <Text style={styles.textStyleTitle}>{props.title}</Text>
        <View
          style={{
            borderBottomWidth: 1,
            borderColor: '#E7E7E7',
          }}
        />
        <TouchableOpacity onPress={props.Camera}>
          <Text style={styles.textStyle}>{'Camera'}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={props.Image}>
          <Text style={styles.textStyle}>{'Gallery'}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={props.Close}>
          <Text style={styles.textStyle}>{'Close'}</Text>
        </TouchableOpacity>
      </View>
    </Overlay>
  );
};

export default DropPicker;
