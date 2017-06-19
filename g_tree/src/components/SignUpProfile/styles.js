import { StyleSheet } from 'react-native';
import colors from '../../globals/colors';

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    zIndex: 200,
    height: '70%',
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
  description: {
    fontSize: 13,
    color: '#a8a8a8',
    marginLeft: 10
  },
  tabLine: {
    flex: 0.1,
    flexDirection: 'row',
    alignItems: 'center',
    height: 10
  },
  leftTab: {
    flex: 1,
    borderWidth: 0.6,
    borderColor: colors.singupGrey,
    height: 0
  },
  rightTab: {
    flex: 1,
    borderWidth: 1.5,
    borderColor: colors.signupRed,
    height: 0,
    marginRight: 20
  },
  inputTopText: {
    fontSize: 14,
    fontWeight: '500',
    color: colors.singupGrey,
    margin: 3,
    flex: 1
  },
  inputView: {
    alignItems: 'center',
    borderLeftWidth: 3,
    borderLeftColor: colors.singupGrey,
    margin: 5,
    backgroundColor: 'transparent',
    width: '90%',
    paddingLeft: 5,
    flex: 2
  },
  input: {
    height: 30,
  },
  line: {
    width: '95%',
    borderWidth: 0.4,
    borderColor: colors.singupGrey,
    marginTop: 30,
    marginBottom: 3
  },
  buttonsView: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    width: '90%',
    marginTop: 10
  },
  button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: '20%',
    marginTop: 5,
    marginLeft: 10
  },
  buttonText: {
    color: colors.signupRed,
    fontSize: 18,
    fontWeight: '500'
  },
  addPhotoButton: {
    flex: 0.6,
    height: '43%',
    borderRadius: 40,
    backgroundColor: '#d8d8d8',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center'
  },
  photoAndInputsBlock: {
    flex: 2,
    width: '100%',
    flexDirection: 'row'
  },
  inputsBlock: {
    flex: 1.7
  },
  bottomBlock: {
    flex: 1.2,
    width: '100%',
    alignSelf: 'flex-end',
    justifyContent: 'center'
  }
});

export default styles;

