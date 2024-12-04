import {StyleSheet} from 'react-native';
import {Dimensions} from 'react-native';
import Theme from '../../theme/Theme';
const {height, width} = Dimensions.get('window');

const styles = StyleSheet.create({
  textStyleTitle: {
    fontSize: 14,
    marginVertical: 8,
    color: Theme.colors.black,
    textAlign: 'center',
  },
  viewLoader: {
    backgroundColor: Theme.colors.white,
    height: height / 4,
    width: width / 2,
    borderRadius: 20,
    rowGap:5
  },
  textStyle: {
    fontSize: 12,
    marginVertical: 8,
    color: Theme.colors.black,
    textAlign: 'center',
  },
});

export default styles;
