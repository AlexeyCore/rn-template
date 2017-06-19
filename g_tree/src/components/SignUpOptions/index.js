import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Animated } from 'react-native';
import { connect } from 'react-redux';

import styles from './styles';
import { Creators } from '../../redux/reducers/loginModals';

@connect(
  state => ({
    signUpOptionsIsOpen: state.loginModals.signUpOptionsIsOpen,
    logIn: state.loginModals.logIn
  }),
  dispatch => ({
    changeSignUpEmail: payload => dispatch(Creators.changeSignUpEmail(payload)),
    changeLogInEmail: payload => dispatch(Creators.changeLogInEmail(payload)),
    changeSignUpOptions: payload => dispatch(Creators.changeSignUpOptions(payload))
  })
)
export default class SignUpOptions extends Component {
  static propTypes = {
    signUpOptionsIsOpen: React.PropTypes.bool,
    changeSignUpEmail: React.PropTypes.func.isRequired,
    changeSignUpOptions: React.PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);
    this.state = {
      isOpen: this.props.signUpOptionsIsOpen,
      logIn: this.props.logIn,
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
      this.setState({ logIn: newProps.logIn });
    } return null;
  }

  onPressEmailHandler = () => {
    if (!this.state.logIn) {
      this.props.changeSignUpOptions(false);
      this.props.changeSignUpEmail(true);
      this.hideBlock();
    } else {
      this.props.changeSignUpOptions(false);
      this.props.changeLogInEmail(true);
      this.hideBlock();
    }
  };

  render() {
    const { positionY, logIn } = this.state;
    const translateY = positionY.interpolate({
      inputRange: [0, 1],
      outputRange: [500, 0]
    });
    const preText = logIn ? 'Log in' : 'Sign up';
    return (
      <Animated.View style={[styles.container, { transform: [{ translateY }] }]}>
        <TouchableOpacity
          style={styles.facebookButton}
        >
          <Text
            style={styles.facebookButtonText}
          >{preText} with Facebook
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.emailButton}
          onPress={() => this.onPressEmailHandler()}
        >
          <Text
            style={styles.emailButtonText}
          >{preText} with Email
          </Text>
        </TouchableOpacity>
        <View style={styles.bottom} />
      </Animated.View>
    );
  }
}

SignUpOptions.defaultProps = {
  signUpOptionsIsOpen: false
};
