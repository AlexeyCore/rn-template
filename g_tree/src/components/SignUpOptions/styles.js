import { StyleSheet } from 'react-native';
import colors from '../../globals/colors';

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    zIndex: 100,
    justifyContent: 'flex-end',
    alignItems: 'center',
    height: '35%',
    backgroundColor: '#fff',
    width: '100%'
  },
  facebookButton: {
    flex: 1,
    backgroundColor: colors.facebookBlue,
    justifyContent: 'center',
    alignItems: 'center',
    width: '90%',
    margin: '5%'
  },
  emailButton: {
    flex: 0.9,
    justifyContent: 'center',
    alignItems: 'center',
    width: '90%',
    borderWidth: 2,
    borderColor: colors.signupRed,
  },
  facebookButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold'
  },
  emailButtonText: {
    color: colors.signupRed,
    fontSize: 16,
    fontWeight: 'bold'
  },
  bottom: {
    flex: 1.3
  }
});

export default styles;

