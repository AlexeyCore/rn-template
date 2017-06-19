import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Animated, TextInput } from 'react-native';
import { connect } from 'react-redux';

import styles from './styles';
import { Creators } from '../../redux/reducers/loginModals';

@connect(
  state => ({
    signUpProfileIsOpen: state.loginModals.signUpProfileIsOpen,
  }),
  dispatch => ({
    changeSignUpEmail: payload => dispatch(Creators.changeSignUpEmail(payload)),
    changeSignUpProfile: payload => dispatch(Creators.changeSignUpProfile(payload))
  })
)
export default class SignUpProfile extends Component {
  static propTypes = {
    signUpProfileIsOpen: React.PropTypes.bool,
    changeSignUpEmail: React.PropTypes.func.isRequired,
    changeSignUpProfile: React.PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);
    this.state = {
      isOpen: this.props.signUpProfileIsOpen,
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
  };

  onPressBackHandler = () => {
    this.props.changeSignUpEmail(true);
    this.props.changeSignUpProfile(false);
    this.hideBlock();
  };

  onPressSubmitHandler = () => {
    this.props.push({ screen: 'soundwise.Discover', title: 'screenTitle' });
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
          YOUR PROFILE
        </Text>
        <Text style={styles.description}>
          {'How you\'re shown to the Soundwise learning community'}
        </Text>
        <View style={styles.tabLine}>
          <View style={styles.leftTab} />
          <View style={styles.rightTab} />
        </View>
        <View style={styles.photoAndInputsBlock}>
          <TouchableOpacity style={styles.addPhotoButton}>
            <Text style={{ fontSize: 40, fontWeight: '200', color: '#a8a8a8' }} >
              {'+'}
            </Text>
            <Text style={{ fontSize: 10, color: '#a8a8a8' }} >
              {'Photo'}
            </Text>
          </TouchableOpacity>
          <View style={styles.inputsBlock}>
            <Text style={styles.inputTopText}>
              First Name
            </Text>
            <View style={styles.inputView}>
              <TextInput
                style={styles.input}
                placeholder="Enter Your First Name"
                placeholderTextColor="#c9c9c9"
                editable={true}
              />
            </View>
            <Text style={styles.inputTopText}>
              Last Name
            </Text>
            <View style={styles.inputView}>
              <TextInput
                style={styles.input}
                placeholder="Enter Your Last Name"
                placeholderTextColor="#c9c9c9"
                editable={true}
              />
            </View>
            <Text style={styles.inputTopText}>
              Username
            </Text>
            <View style={styles.inputView}>
              <TextInput
                style={styles.input}
                placeholder="Choose A Username"
                placeholderTextColor="#c9c9c9"
                editable={true}
              />
            </View>
          </View>
        </View>
        <View style={styles.bottomBlock}>
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
              onPress={() => this.onPressSubmitHandler()}
            >
              <Text
                style={styles.buttonText}
              >Submit
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Animated.View>
    );
  }
}

SignUpProfile.defaultProps = {
  signUpProfileIsOpen: false
};

