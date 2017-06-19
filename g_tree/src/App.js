import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { Navigation } from 'react-native-navigation';
import store from './redux/store';
import registerScreens from './navigation';

registerScreens(store, Provider);

const navigatorStyle = {
  tabBarHidden: true,
  navBarHidden: true,
  drawUnderNavBar: true,
  drawUnderTabBar: true
};

Navigation.startSingleScreenApp({
  screen:
    {
      screen: 'Login',
      navigatorStyle,
    }
});


