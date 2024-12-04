import {StyleSheet} from 'react-native';
import Theme from '../../theme/Theme';

const styles = StyleSheet.create({
  // Common
  bgStyle: {
    height: 45,
    justifyContent: 'center',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: Theme.colors.borderColor2,
    backgroundColor: Theme.colors.bgColor5,
    paddingHorizontal: 15,
  },
  textStyle: {
    color: Theme.colors.textColor11,
    fontSize: 16,
  },

  // New input text
  textSubTitle: {
    color: Theme.colors.textColor11,
    fontSize: 11,
    fontWeight: '500',
  },
  viewBgInputText: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 45,
    marginTop: 3,
    backgroundColor: Theme.colors.bgColor10,
    borderColor: Theme.colors.borderColor5,
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 12,
  },
  textInput: {
    color: Theme.colors.textColor6,
    fontSize: 13,
    fontWeight: '500',
  },
  textInput1: {
    color: Theme.colors.textColor6,
    fontSize: 13,
    fontWeight: '500',
    paddingVertical: 5,
  },
  imageIcon: {
    height: 17,
    width: 17,
    tintColor: Theme.colors.textColor2,
  },
  textError: {
    color: Theme.colors.textColor5,
    marginTop: 2,
    fontSize: 11,
    fontWeight: '400',
  },
});

export default styles;
