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
  tabLine: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  },
  leftTab: {
    flex: 1,
    borderWidth: 1.5,
    borderColor: colors.signupRed,
    height: 0
  },
  rightTab: {
    flex: 1,
    borderWidth: 0.6,
    borderColor: colors.singupGrey,
    height: 0,
    marginRight: 20
  },
  inputTopText: {
    fontSize: 14,
    fontWeight: '500',
    color: colors.singupGrey,
    margin: 3
  },
  inputView: {
    flex: 1,
    alignItems: 'center',
    borderLeftWidth: 3,
    borderLeftColor: colors.singupGrey,
    margin: 5,
    backgroundColor: 'transparent',
    width: '90%',
    paddingLeft: 5
  },
  input: {
    flex: 1,
  },
  line: {
    width: '95%',
    borderWidth: 0.3,
    borderColor: colors.singupGrey,
    marginTop: 40,
    marginBottom: 3
  },
  buttonsView: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    width: '90%'
  },
  button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // height: '20%',
    marginTop: 5,
    marginLeft: 10
  },
  buttonText: {
    color: colors.signupRed,
    fontSize: 18,
    fontWeight: '500'
  }
});

export default styles;

