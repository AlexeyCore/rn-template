import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Animated, TextInput } from 'react-native';
import { connect } from 'react-redux';

import styles from './styles';
import { Creators } from '../../redux/reducers/loginModals';

@connect(
  state => ({
    signUpEmailIsOpen: state.loginModals.signUpEmailIsOpen,
  }),
  dispatch => ({
    changeSignUpEmail: payload => dispatch(Creators.changeSignUpEmail(payload)),
    changeSignUpProfile: payload => dispatch(Creators.changeSignUpProfile(payload)),
    changeSignUpOptions: payload => dispatch(Creators.changeSignUpOptions(payload))
  })
)
export default class SignUpEmail extends Component {
  static propTypes = {
    signUpEmailIsOpen: React.PropTypes.bool,
    changeSignUpEmail: React.PropTypes.func.isRequired,
    changeSignUpProfile: React.PropTypes.func.isRequired,
    changeSignUpOptions: React.PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);
    this.state = {
      isOpen: this.props.signUpEmailIsOpen,
      positionX: new Animated.Value(0)
    };
  }

  showBlock = () =>
    Animated.timing(
      this.state.positionX,
      {
        toValue: 1,
        useNativeDriver: true
      }
    ).start();

  hideBlock = () =>
    Animated.timing(
      this.state.positionX,
      {
        toValue: 0,
        useNativeDriver: true
      }
    ).start();

  componentWillReceiveProps = (newProps) => {
    if (newProps !== this.props) {
      this.showBlock();
    } return null;
  }

  onPressNextHandler = () => {
    this.props.changeSignUpProfile(true);
    this.props.changeSignUpEmail(false);
    this.hideBlock();
  };

  onPressBackHandler = () => {
    this.props.changeSignUpEmail(false);
    this.props.changeSignUpOptions(true);
    this.hideBlock();
  };

  render() {
    const { positionX } = this.state;
    const translateX = positionX.interpolate({
      inputRange: [0, 1],
      outputRange: [500, 0]
    });
    return (
      <Animated.View style={[styles.container, { transform: [{ translateX }] }]}>
        <Text style={styles.headerText}>
          SIGN UP
        </Text>
        <View style={styles.tabLine}>
          <View style={styles.leftTab} />
          <View style={styles.rightTab} />
        </View>
        <Text style={styles.inputTopText}>
          Email Address
        </Text>
        <View style={styles.inputView}>
          <TextInput
            style={styles.input}
            placeholder="Enter Your Email"
            placeholderTextColor="#c9c9c9"
            editable={true}
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
            editable={true}
          />
        </View>
        <View style={styles.line} />
        <View style={styles.buttonsView}>
          <TouchableOpacity
            style={[styles.button, { alignItems: 'flex-start' }]}
            onPress={() => this.onPressBackHandler()}
          >
            <Text
              style={styles.buttonText}
            >Back
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, { alignItems: 'flex-end' }]}
            onPress={() => this.onPressNextHandler()}
          >
            <Text
              style={styles.buttonText}
            >Next
            </Text>
          </TouchableOpacity>
        </View>
      </Animated.View>
    );
  }
}

SignUpEmail.defaultProps = {
  signUpEmailIsOpen: false
};
