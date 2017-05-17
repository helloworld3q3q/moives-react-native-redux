/**
 * @author ling
 * @email helloworld3q3q@gmail.com
 * @create date 2017-05-17 10:37:37
 * @modify date 2017-05-17 10:37:37
 * @desc [description]
*/
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
		zIndex:9,
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