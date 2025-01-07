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
import {useTheme} from '../../contextProvider/ContextProvider';
import useStyles from './styles';

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
  dropdownList?: StyleProp<ViewStyle>;
}

const DropDown = (props: Props) => {
  const styles = useStyles();
  const {theme} = useTheme();
  const [dropdownVisible, setDropdownVisible] = useState<boolean>(false);
  const roles: Role[] = [
    {label: 'Male', value: 'Male'},
    {label: 'Female', value: 'Female'},
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
          !dropdownVisible && {borderRadius: 8},
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
        <ScrollView nestedScrollEnabled style={[styles.dropdownList,props.dropdownList]}>
          {roles.map(role => (
            <TouchableOpacity
              key={role.value}
              style={styles.dropdownItem}
              onPress={() => {
                props.onChange(role.value);
                setDropdownVisible(false);
              }}>
              <Text style={{color: theme.black}}>{role.label}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      )}
      {props.error ? <Text style={styles.textError}>{props.error}</Text> : null}
    </View>
  );
};

export default DropDown;
