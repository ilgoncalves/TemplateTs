import { StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 12,
    backgroundColor: '#FFF'
  },
  welcomeTitle: {
    fontFamily: 'Roboto',
    fontSize: RFValue(24),
    fontWeight: '600',
    textAlign: 'center',
    color: '#8AC394'
  },
  welcomeImage: {
    marginVertical: 32
  }
});

export default styles;