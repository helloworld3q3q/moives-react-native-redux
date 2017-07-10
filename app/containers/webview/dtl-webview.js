/**
 * @author ling
 * @email helloworld3q3q@gmail.com
 * @create date 2017-07-07 02:10:22
 * @modify date 2017-07-07 02:10:22
 * @desc [description]
*/
import React, { Component } from 'react';
import { WebView, TouchableOpacity, View, Image, StyleSheet, Animated } from 'react-native';
import Wait from '../../compoments/comm/wait';
import { connect } from 'react-redux';
import { size } from '../../util/style';


class DtlWebView extends Component {
	constructor(props) {
		super();
		this.state = {
			loading: true,
			loaded: new Animated.Value(size.height),
			loadigTop: 40
		}
	}

	render() {
		return (
			<View style={{flex: 1}}>
				<View style={style.head}>
					<TouchableOpacity style={style.backButton} onPress={() => {
						this.props.navigation.goBack()
					}}>
						<Image style={style.backIcon} source={require('../../icon/icon_back.png')}/>
					</TouchableOpacity>
				</View>
			
				<Animated.View style={{top:this.state.loadigTop, 
					height: this.state.loaded, position: 'absolute', zIndex: 1}}>
					<Wait/>
				</Animated.View>
				<WebView source={{uri: this.props.url}}
					onLoadEnd={()=> {
						Animated.timing(this.state.loaded, {
							toValue: 0,
							duration: 1500
						}).start();
						this.setState({
							loadigTop: 0
						});
					}}
				/>
			</View>
		)
	}
}


function mapStateToProps(state) {
	return {
		url: state.nav.webViewURL,
	}
}

let style = StyleSheet.create({
	head: {
		position: 'absolute',
		height: 44,
		width: 400,
		top: 0,
		backgroundColor: '#028ce6',
		zIndex: 2,
	},
	backButton: {
		width: 40,
		height: 44,
		paddingTop: 11,
		paddingLeft: 5
	},
	backIcon: {
		height: 22,
		width: 22,
	}
});

module.exports = connect(mapStateToProps)(DtlWebView);