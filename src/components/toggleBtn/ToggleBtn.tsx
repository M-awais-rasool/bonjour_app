import React, {useState} from 'react';
import {TouchableOpacity, Animated, StyleSheet, View, Text} from 'react-native';
import useStyles from './styles';

const AnimatedToggleButton = ({onPress}: any) => {
  const [isToggled, setIsToggled] = useState(false);
  const animatedValue = React.useRef(new Animated.Value(0)).current;
  const styles = useStyles();

  const handleToggle = () => {
    const newToggleState = !isToggled;
    setIsToggled(newToggleState);
    onPress()
    
    Animated.timing(animatedValue, {
      toValue: newToggleState ? 1 : 0,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  const translateX = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 30],
  });

  return (
    <View style={styles.flexRow}>
      <Text style={styles.ThemeText}>
        {!isToggled ? 'Dark theme on' : 'Light theme on'}
      </Text>
      <TouchableOpacity
        style={[
          styles.toggleContainer,
          {
            backgroundColor: isToggled ? 'black' : 'white',
          },
        ]}
        onPress={handleToggle}>
        <Animated.View
          style={[
            styles.toggleCircle,
            {
              transform: [{translateX}],
              backgroundColor: isToggled ? 'white' : 'black',
            },
          ]}
        />
      </TouchableOpacity>
    </View>
  );
};

export default AnimatedToggleButton;
