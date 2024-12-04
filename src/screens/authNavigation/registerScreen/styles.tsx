import {StyleSheet} from 'react-native';
import Theme from '../../../theme/Theme';

const styles = StyleSheet.create({
  mainContainer: {
    height: '100%',
    width: '100%',
    backgroundColor: Theme.colors.white,
  },
  padding: {
    paddingHorizontal: 10,
  },
  imageMain: {
    alignSelf: 'center',
    height: 80,
    width: 80,
    marginVertical: 30,
    marginTop: 80,
  },
  textTitle: {
    color: Theme.colors.textColor11,
    fontSize: 25,
    fontWeight: 'bold',
    paddingHorizontal: 10,
  },
  marginV8: {
    marginVertical: 8,
  },
  marginV5: {
    marginVertical: 5,
  },
  viewButton: {
    marginVertical: 15,
    marginHorizontal: 15,
  },
  flexRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textError: {
    color: Theme.colors.textColor5,
    fontSize: 11,
    fontWeight: '400',
  },
});

export default styles;
