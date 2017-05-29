/**
 * @author ling
 * @email helloworld3q3q@gmail.com
 * @create date 2017-05-23 09:39:45
 * @modify date 2017-05-23 09:39:45
 * @desc [description]
*/
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { size } from '../../util/style';
import { StackNavigator } from 'react-navigation';

class foot extends Component{
	constructor() {
		super();
	}
	render() {
		return (
			<View style={style.foot}>
				<TouchableOpacity style={[style.footItem]}>
					<Image style={style.footImage} resizeMode='contain' source={require('../../icon/icon_hot.png')}/>
					<Text style={[style.footTxt, {backgroundColor: 'red'}]}>热映</Text>
				</TouchableOpacity>
				<TouchableOpacity style={style.footItem} 
					onPress={() => navigation.dispatch({ type: 'soonshow' })}
      			>
					<Image style={style.footImage} resizeMode='contain' source={require('../../icon/icon_soon_normal.png')}/>
					<Text style={style.footTxt}>近期</Text>
				</TouchableOpacity>
				<TouchableOpacity style={style.footItem}>
					<Image style={style.footImage} resizeMode='contain' source={require('../../icon/icon_us_normal.png')}/>
					<Text style={style.footTxt}>北美</Text>
				</TouchableOpacity>
				<TouchableOpacity style={style.footItem}>
					<Image style={style.footImage} resizeMode='contain' source={require('../../icon/icon_near_normal.png')}/>
					<Text style={style.footTxt}>附近</Text>
				</TouchableOpacity>
			</View>
		);
	}
}

let style = StyleSheet.create({
	foot: {
		height: 45,
		width: size.width,		
		position: 'absolute',
		bottom: -45,
		left: 0,
		flexDirection: 'row',
		justifyContent: 'space-between',
		backgroundColor: 'rgb(230,69,51)'
	},
	footItem: {
		flex: 1,
		alignItems: 'center',
	},
	active: {
		backgroundColor: '#ffffff',
	},
	footImage: {
		width: 26,
		height: 26
	},
	footTxt: {
		fontSize: 10,
		textAlign:'center',
		color: '#ffffff',
	}
});


module.exports = foot;