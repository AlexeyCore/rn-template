import { Navigation } from 'react-native-navigation';
import Login from './Login';
import Discover from './Discover';

// Register all app screens
export default (store, Provider) => {
  Navigation.registerComponent('Login', () => Login, store, Provider);
  Navigation.registerComponent('Discover', () => Discover, store, Provider);
};
