import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Animated, TextInput } from 'react-native';
import { connect } from 'react-redux';
import { Navigation } from 'react-native-navigation';

import styles from './styles';
import { Creators } from '../../redux/reducers/loginModals';

@connect(
  state => ({
    logInEmailIsOpen: state.loginModals.logInEmailIsOpen,
  }),
  dispatch => ({
    changeLogInEmail: payload => dispatch(Creators.changeLogInEmail(payload)),
    changeSignUpProfile: payload => dispatch(Creators.changeSignUpProfile(payload)),
    changeSignUpOptions: payload => dispatch(Creators.changeSignUpOptions(payload))
  })
)
export default class LogInEmail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: this.props.logInEmailIsOpen,
      positionY: new Animated.Value(0)
    };
  }

  showBlock = () =>
    Animated.timing(
      this.state.positionY,
      {
        toValue: 1,
        useNativeDriver: true
      }
    ).start();

  hideBlock = () =>
    Animated.timing(
      this.state.positionY,
      {
        toValue: 0,
        useNativeDriver: true
      }
    ).start();

  componentWillReceiveProps = (newProps) => {
    if (newProps !== this.props) {
      this.showBlock();
    } return null;
  };

  onPressSubmitHandler = () => {
    this.props.push({ screen: 'soundwise.Discover', title: 'screenTitle' });
  };

  render() {
    const { positionY } = this.state;
    const translateY = positionY.interpolate({
      inputRange: [0, 1],
      outputRange: [500, 0]
    });
    return (
      <Animated.View style={[styles.container, { transform: [{ translateY }] }]}>
        <Text style={styles.headerText}>
          LOG IN
        </Text>
        <Text style={styles.inputTopText}>
          Email Address
        </Text>
        <View style={styles.inputView}>
          <TextInput
            style={styles.input}
            placeholder="Enter Your Email"
            placeholderTextColor="#c9c9c9"
            editable = {true}
          />
        </View>
        <Text style={styles.inputTopText}>
          Password
        </Text>
        <View style={styles.inputView}>
          <TextInput
            style={styles.input}
            placeholder="Enter Your Password"
            placeholderTextColor="#c9c9c9"
            editable = {true}
          />
        </View>
        <View style={styles.line} />
        <TouchableOpacity
          style={styles.submitButton}
          onPress={() => this.onPressSubmitHandler()}
        >
          <Text
            style={styles.submitButtonText}
          >Submit
          </Text>
        </TouchableOpacity>
      </Animated.View>
    );
  }
}
