/**
 * @author ling
 * @email helloworld3q3q@gmail.com
 * @create date 2017-07-07 02:10:22
 * @modify date 2017-07-07 02:10:22
 * @desc [description]
*/
import React, { Component } from 'react';
import { WebView, TouchableOpacity, View, Image, StyleSheet } from 'react-native';
import { connect } from 'react-redux';

class DtlWebView extends Component {
	render() {
		console.log(this.props)
		return (
			<View style={{flex: 1}}>
				<View style={style.head}>
					<TouchableOpacity style={style.backButton} onPress={() => {
						this.props.navigation.goBack()
					}}>
						<Image style={style.backIcon} source={require('../../icon/icon_back.png')}/>
					</TouchableOpacity>
				</View>
				<WebView source={{uri: this.props.url}} />
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
		zIndex: 1,
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