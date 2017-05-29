import React, { Component } from 'react';
import { connect } from 'react-redux';
import { StyleSheet, Image, View, Text } from 'react-native';
import { addNavigationHelpers, TabNavigator  } from 'react-navigation';
import { bindActionCreators } from 'redux';
import { size } from '../util/style';
import usshow from '../containers/usshow/index';
import soonshow from '../containers/soonshow/index';
import nearcinemas from '../containers/nearcinemas/index';
import hotshow from '../containers/hotshow/index';
import Loading from '../compoments/comm/loading'
import { fetchLoading, initHotshow } from '../actions/hotshow-action';

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

// const AppWithNavigationState = ({dispatch, nav}) => (
// 	<AppNavigator navigation={
// 		addNavigationHelpers({dispatch, state:nav})
// 	} />
// );

class AppWithNavigationState extends Component{
	componentWillMount() {
		let _that = this;
		let time = setTimeout(function(){
			_that.props.initHotshowAction();
			clearTimeout(time);
		}, 1500);
	}

	shouldComponentUpdate(nextProps, nextState) {
		return this.props.fetchbool !== nextProps.fetchbool;
	}
	componentWillUpdate(nextProps, nextState) {
		return this.props.fetchbool !== nextProps.fetchbool;
	}
	render() {
		return(
			<View style={{flex: 1}}>
				{this.props.fetchbool ? <Loading/> : 
					<AppNavigator navigation={
						addNavigationHelpers({dispatch: this.props.dispatch, 
							state: this.props.nav})
					}/>
				}
			</View>
		)
		// return(
		// 	<AppNavigator navigation={
		// 			addNavigationHelpers({dispatch: this.props.dispatch, 
		// 				state: this.props.nav})
		// 		}/>
		// )
	}
}

function mapStateToProeps(state){
	return {
		fetchbool: state.fetchload.data,
		nav: state.nav,
	}
};
function macthDispatchToProps(dispatch) {
    return bindActionCreators({
		initHotshowAction: initHotshow,
	}, dispatch);
}

let style = StyleSheet.create({
	footImage: {
		width: 25,
		height: 25
	},
});


export default connect(mapStateToProeps, macthDispatchToProps)(AppWithNavigationState);