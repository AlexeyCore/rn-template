import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({
  activityIndicator: {
    flex: 1,
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(192, 192, 192, 0.75)',
    zIndex: 1000
  }
});

export default styles;
