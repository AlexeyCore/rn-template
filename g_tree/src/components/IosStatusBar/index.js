import React from 'react';
import { View, Platform } from 'react-native';
import styles from './styles';

const IosStatusBar = () => {
  if (Platform.OS !== 'ios') return null;
  return (<View style={styles.statusBar} />);
};

export default IosStatusBar;
