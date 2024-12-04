import {StyleSheet} from 'react-native';
import Theme from '../../theme/Theme';

const styles = StyleSheet.create({
  viewMain: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    backgroundColor: Theme.colors.bgColor2,
    shadowColor: Theme.colors.bgColor1,
    shadowOffset: {
      width: 0,
      height: -5,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 15,
  },
  // Common
  bgStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    backgroundColor: Theme.colors.bgColor12,
    paddingVertical: 10,
  },
  viewSvg: {
    height: 18,
    width: 18,
    marginRight: 5,
  },
  textStyle: {
    color: Theme.colors.textColor1,
    fontSize: 14,
    fontWeight: '700',
    // fontFamily: Theme.fontFamily.fontInterMedium,
  },
  image: {
    marginLeft: 10,
  },
});

export default styles;
