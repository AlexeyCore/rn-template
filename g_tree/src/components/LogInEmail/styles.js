import { StyleSheet } from 'react-native';
import colors from '../../globals/colors';

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    zIndex: 200,
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    height: '55%',
    backgroundColor: '#fff',
    width: '100%',
    paddingLeft: 20
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.singupGrey,
    margin: 10,
    marginTop: 20
  },
  inputTopText: {
    fontSize: 14,
    fontWeight: '500',
    color: colors.singupGrey,
    margin: 3
  },
  inputView: {
    alignItems: 'center',
    borderLeftWidth: 3,
    borderLeftColor: colors.singupGrey,
    margin: 5,
    backgroundColor: 'transparent',
    width: '90%',
    paddingLeft: 5
  },
  input: {
    height: 30,
  },
  line: {
    width: '95%',
    borderWidth: 0.3,
    borderColor: colors.singupGrey,
    marginTop: 40
  },
  submitButton: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '20%',
    width: '90%',
    margin: 5
  },
  submitButtonText: {
    color: colors.signupRed,
    fontSize: 18,
    fontWeight: '500'
  }
});

export default styles;

