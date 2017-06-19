import React, { Component } from 'react';
import { View } from 'react-native';

import styles from './styles';
import SignUp from '../../components/SignUp';
import SignUpOptions from '../../components/SignUpOptions';
import LogInEmail from '../../components/LogInEmail';
import SignUpEmail from '../../components/SignUpEmail';
import SignUpProfile from '../../components/SignUpProfile';

export default class Login extends Component {

  render() {
    return (
      <View style={[styles.container, { backgroundColor: 'blue' }]}>
        <SignUp />
        <SignUpOptions />
        <LogInEmail push={(route) => this.props.navigator.push(route)} />
        <SignUpEmail />
        <SignUpProfile push={(route) => this.props.navigator.push(route)} />
      </View>
    );
  }
}
