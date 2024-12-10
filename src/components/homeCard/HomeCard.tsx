import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import useStyles from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';

interface Props {
  title: string;
  index: number;
  icon: string;
  width: any;
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
        {width: props.width },
      ]}>
      <Icon name={props.icon} size={40} color="#FFD700" />
      <Text style={styles.text}>{props.title}</Text>
    </TouchableOpacity>
  );
};

export default HomeCard;
