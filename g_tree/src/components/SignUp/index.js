import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';

import styles from './styles';
import { Creators } from '../../redux/reducers/loginModals';

@connect(
  state => ({}),
  dispatch => ({
    changeSignUpOptions: payload => dispatch(Creators.changeSignUpOptions(payload)),
    turnToLogIn: payload => dispatch(Creators.turnToLogIn(payload))
  })
)
export default class SignUp extends Component {

  onPressSignUpHandler = () => {
    this.props.changeSignUpOptions(true);
  };

  onPressLogInHandler = () => {
    this.props.turnToLogIn(true);
    this.props.changeSignUpOptions(true);
  };

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.signUpButton}
          onPress={() => this.onPressSignUpHandler()}
        >
          <Text
            style={styles.signUpButtonText}
          >Sign up
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.logInButton}
          onPress={() => this.onPressLogInHandler()}
        >
          <Text
            style={styles.logInButtonText}
          >Already have an account? Log in
          </Text>
        </TouchableOpacity>
        <View style={styles.bottom} />
      </View>
    );
  }
}
