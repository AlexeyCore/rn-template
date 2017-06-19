import React, { Component } from 'react';
import { View, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';

import globalStyles from '../../globals/styles';
import styles from './styles';

@connect(
  state => ({
    isLoading: state.main.isLoading
  })
)
export default class LoadingOverlay extends Component {
  static propTypes = {
    isLoading: React.PropTypes.bool
  };

  static defaultProps = {
    isLoading: false
  };

  render() {
    if (!this.props.isLoading) return null;
    return (
      <View style={styles.activityIndicator}>
        <ActivityIndicator
          style={globalStyles.centering}
        />
      </View>
    );
  }
}
