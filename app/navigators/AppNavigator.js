import React, { Component } from 'react';
import { connect } from 'react-redux';
import { StyleSheet, Image, View, Text } from 'react-native';
import { addNavigationHelpers, TabNavigator, StackNavigator  } from 'react-navigation';
import { bindActionCreators } from 'redux';
import { size } from '../util/style';
import usshow from '../containers/usshow/index';
import soonshow from '../containers/soonshow/index';
import nearcinemas from '../containers/nearcinemas/index';
import hotshow from '../containers/hotshow/index';
import { fetchLoading, initHotshow, navigator } from '../actions/hotshow-action';
import  DtlWebView  from '../containers/webview/dtl-webview';

//tab
export const AppNavigator = TabNavigator({
	Hotshow: {screen: hotshow, navigationOptions: {
		tabBarLabel: '热映',
		tabBarIcon: ({ tintColor, focused }) => (
			<Image resizeMode='contain'
				source={require('../icon/icon_hot.png')}
				style={[style.footImage, {tintColor: tintColor}]}
			/>
		)
	}},
	Usshow: {screen: usshow, navigationOptions: {
		tabBarLabel: '北美',
		tabBarIcon: ({ tintColor, focused }) => (
				<Image style={[style.footImage, {tintColor: tintColor}]} 
					resizeMode='contain' 
					source={require('../icon/icon_us_normal.png')}
				/>
		)
	}},
	Soonshow: {screen: soonshow, navigationOptions: {
		tabBarLabel: '近期',
		tabBarIcon: ({ tintColor, focused }) => (
				<Image style={[style.footImage, {tintColor: tintColor}]} 
					resizeMode='contain' 
					source={require('../icon/icon_soon_normal.png')}
				/>
		)}
	},
	Nearcinemas: {screen: nearcinemas, navigationOptions: {
		tabBarLabel: '影院',
		tabBarIcon: ({ tintColor, focused }) => (
				<Image style={[style.footImage, {tintColor: tintColor}]} 
					resizeMode='contain' 
					source={require('../icon/icon_near_normal.png')}
				/>
		)},
	}
}, {
	tabBarPosition: 'bottom',
	lazy: true,
	initialRouteName: 'Hotshow',
	tabBarOptions: {
		showIcon: true,
		pressOpacity: 0.8,
		style: {
			height: 45,
			backgroundColor: '#ffffff',
			zIndex: 0,
			position: 'relative'
    	},
    	labelStyle: {
        	fontSize: 11,
			paddingVertical: 0,
			marginTop: -4
    	},
		iconStyle: {
			marginTop: -3
		},
		tabStyle: {
			backgroundColor: 'rgb(230,69,51)',
		},
	}
});
//StackNavigator
export const Navigator = StackNavigator(
  {  
	Tab:{screen: AppNavigator},  
	Product:{screen: DtlWebView}  
  },  
  {  
    navigationOptions:{  
		header: null,
		headerBackTitle:null,  
		headerTintColor:'#333333',  
		showIcon:true,  
		swipeEnabled:false,  
		animationEnabled:false,
		initialRouteName: 'Hotshow'
	},  
    	mode:'card',
	}
);

let style = StyleSheet.create({
	footImage: {
		width: 25,
		height: 25
	},
});