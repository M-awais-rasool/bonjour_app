import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import useStyles from './styles';

interface Props {
  title: string;
  index: number;
  onPress: () => void;
}
const HomeCard = (props: Props) => {
  const styles = useStyles();
  return (
    <TouchableOpacity
      onPress={props.onPress}
      style={[
        styles.Container,
        props.index % 2 == 0 ? {marginRight: 5} : {marginLeft: 5},
      ]}>
      <Text style={styles.text}>{props.title}</Text>
    </TouchableOpacity>
  );
};

export default HomeCard;
