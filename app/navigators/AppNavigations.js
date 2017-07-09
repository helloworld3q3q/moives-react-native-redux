import React, { Component } from 'react';
import { connect } from 'react-redux';
import { StyleSheet, Image, View, Text } from 'react-native';
import { addNavigationHelpers, TabNavigator, StackNavigator  } from 'react-navigation';
import { bindActionCreators } from 'redux';
import { Navigator } from './AppNavigator';

const AppNavigations = ({ dispatch, nav }) => {
	return <Navigator navigation={addNavigationHelpers({ dispatch, state: nav })} />
}
  
const mapStateToProps = state => ({
  nav: state.nav,
});

module.exports = connect(mapStateToProps)(AppNavigations);