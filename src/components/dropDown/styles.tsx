import {StyleSheet} from 'react-native';
import Theme from '../../theme/Theme';

const styles = StyleSheet.create({
  dropdownButton: {
    borderWidth: 1,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    padding: 8,
    borderColor: Theme.colors.borderColor5,
    height: 45,
    justifyContent: 'center',
  },
  dropdownList: {
    backgroundColor: Theme.colors.white,
    borderWidth: 1,
    borderColor: Theme.colors.borderColor5,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
    marginTop: 8,
    position: 'absolute',
    top: 55,
    zIndex: 1,
    width: '100%',
    height: 100,
  },
  dropdownItem: {
    padding: 8,
    borderBottomWidth: 1,
    borderColor: Theme.colors.borderColor5,
    borderRadius: 8,
  },
  textSubTitle: {
    color: Theme.colors.textColor11,
    fontSize: 11,
    fontWeight: '500',
    marginBlock: 3,
  },
  textInput: {
    color: Theme.colors.textColor6,
    fontSize: 13,
    fontWeight: '500',
  },
  disableTextInput: {
    color: Theme.colors.textColor8,
    fontSize: 13,
    fontWeight: '500',
  },
  textError: {
    color: Theme.colors.textColor5,
    marginTop: 2,
    fontSize: 11,
    fontWeight: '400',
  },
});

export default styles;
