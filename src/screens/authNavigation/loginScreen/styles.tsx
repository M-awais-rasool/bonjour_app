import {StyleSheet} from 'react-native';
import Theme from '../../../theme/Theme';

const styles = StyleSheet.create({
  mainContainer: {
    height: '100%',
    width: '100%',
    backgroundColor: Theme.colors.white,
  },
  viewContainer: {
    flex: 1,
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
  viewCenter: {
    paddingHorizontal: 15,
    marginTop: 55,
    paddingBottom: 60,
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
  dontText: {
    fontSize: 13,
    color: Theme.colors.black,
    textAlign: 'center',
  },
  SignUpText: {
    fontSize: 13,
    color: Theme.colors.bgColor12,
    fontWeight: 'bold',
  },
});

export default styles;
