import { StyleSheet } from 'react-native';
import colors from '../../globals/colors';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-end',
    alignItems: 'center',
    height: '25%'
  },
  signUpButton: {
    flex: 1,
    backgroundColor: colors.signupRed,
    justifyContent: 'center',
    alignItems: 'center',
    width: '90%',
    marginBottom: 10
  },
  logInButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '90%'
  },
  signUpButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold'
  },
  logInButtonText: {
    color: '#fff',
    fontSize: 13,
    fontWeight: 'bold'
  },
  bottom: {
    flex: 0.6
  }
});

export default styles;
