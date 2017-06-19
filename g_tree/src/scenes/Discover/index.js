import React, { Component } from 'react';
import { View, TextInput } from 'react-native';

import styles from './styles';
import IosStatusBar from '../../components/IosStatusBar';

export default class Discover extends Component {
  static navigatorStyle = {
    tabBarHidden: true,
    navBarHidden: true,
    drawUnderNavBar: true,
    drawUnderTabBar: true
  };

  render() {
    return (
      <View style={styles.container}>
        <IosStatusBar />
        <View style={{ height: 20, width: '90%', borderWidth: 1, borderColor: 'grey' }} >
          <TextInput
            style={{ height: 20, width: '90%', padding: 5}}
            placeholder="Search"
            editable={true}
          />
        </View>
      </View>
    );
  }
}
