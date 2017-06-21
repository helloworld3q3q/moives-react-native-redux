import React, { Component } from 'react';
import { AppRegistry, NativeModules } from 'react-native';

import App from './app/app';

export default class xinbomei extends Component {
    render() {
      return(
        <App/>
      );
    }
    componentDidMount() {
        NativeModules.SplashScreen.hide();
    }

}


AppRegistry.registerComponent('xinbomei', () => xinbomei);
