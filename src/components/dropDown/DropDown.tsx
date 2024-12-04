import {
  View,
  Text,
  TouchableOpacity,
  StyleProp,
  ViewStyle,
  ScrollView,
  TextStyle,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import styles from './styles';
import Theme from '../../theme/Theme';

interface Role {
  label: string;
  value: string;
}

interface Props {
  title: string;
  error?: string;
  value: string;
  onChange: (value: string) => void;
  onBlur?: () => void;

  placeholderTextColor?: StyleProp<TextStyle>;
  textStyle?: StyleProp<TextStyle>;
  bgStyle?: StyleProp<ViewStyle>;
}

const DropDown = (props: Props) => {
  const [dropdownVisible, setDropdownVisible] = useState<boolean>(false);
  const roles: Role[] = [
    {label: 'Class 6', value: '1'},
    {label: 'Class 7', value: '2'},
    {label: 'Class 8', value: '3'},
    {label: 'Class 9', value: '4'},
    {label: 'Class 10', value: '5'},
  ];

  const selectedLabel =
    roles.find(role => role.value === props.value)?.label || 'Select';

  useEffect(() => {
    if (selectedLabel != 'Select') {
      props.onBlur?.();
    }
  }, [selectedLabel]);

  return (
    <View style={props.bgStyle}>
      <Text style={[styles.textSubTitle, props.textStyle]}>{props.title}</Text>
      <TouchableOpacity
        style={[
          styles.dropdownButton,
          props.bgStyle,
          !dropdownVisible && {borderRadius: Theme.responsiveSize.size8},
        ]}
        onPress={() => setDropdownVisible(!dropdownVisible)}>
        <Text
          style={[
            selectedLabel == 'Select'
              ? [styles.disableTextInput, props.placeholderTextColor]
              : [styles.textInput, props.placeholderTextColor],
          ]}>
          {selectedLabel}
        </Text>
      </TouchableOpacity>
      {dropdownVisible && (
        <ScrollView nestedScrollEnabled style={styles.dropdownList}>
          {roles.map(role => (
            <TouchableOpacity
              key={role.value}
              style={styles.dropdownItem}
              onPress={() => {
                props.onChange(role.value);
                setDropdownVisible(false);
              }}>
              <Text style={{color: Theme.colors.black}}>{role.label}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      )}
      {props.error ? <Text style={styles.textError}>{props.error}</Text> : null}
    </View>
  );
};

export default DropDown;
