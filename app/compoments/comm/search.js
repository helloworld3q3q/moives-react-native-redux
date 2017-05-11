import React, { Component } from 'react'
import { Text,TouchableOpacity ,StyleSheet } from 'react-native';
import { size } from '../../util/style'

class search extends Component{
	render() {
		return (
			<TouchableOpacity style={style.btn}>
				<Text style={style.holder}>搜索全国最好用的家具品牌</Text>
			</TouchableOpacity>
		);
	}
}

const style = StyleSheet.create({
	btn: {
		position: 'absolute',
		backgroundColor: 'transparent',
		paddingHorizontal: 15,
		paddingVertical: 2,		
	},
	holder: {
		alignItems: 'center',
		width: size.width - 30,
		borderRadius: 2,
		fontSize: 16,
		paddingVertical: 8,
		paddingHorizontal: 4,
		color: '#666666',
		backgroundColor: '#f9f9f9',
	}
});

module.exports = search;