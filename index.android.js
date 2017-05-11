import React, { Component } from 'react';
import { AppRegistry } from 'react-native';

import App from './app/app';

export default class xinbomei extends Component {
    render() {
      return(
        <App/>
      );
    }
}


AppRegistry.registerComponent('xinbomei', () => xinbomei);
