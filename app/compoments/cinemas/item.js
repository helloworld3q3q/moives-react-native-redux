/**
 * @author ling
 * @email helloworld3q3q@gmail.com
 * @create date 2017-07-06 10:23:36
 * @modify date 2017-07-06 10:23:36
 * @desc [description]
*/
import React, { Component } from 'react';
import { Text, View, Image, StyleSheet, NativeModules, TouchableHighlight } from 'react-native';
import { size } from '../../util/style';

class item extends Component{

	_renderCinemasList(data) {
		let ary = [];
		for (let i in data) {
			let item = data[i];
			ary.push(
				<View key={i} style={style.addrItem}>
					<TouchableHighlight onPress={()=> NativeModules.OpenMap.openMap(item.nm)} 
						underlayColor="#ff9e95">
						<View>
							<View style={style.row}>
								<Image resizeMode='contain' style={style.icon}  
									source={require('../../icon/icon_cinema.png')} />
								<Text style={style.name}>影院:{item.nm}</Text>
							</View>
							<View style={style.row}>
								<Image resizeMode='contain' style={style.icon}  
									source={require('../../icon/icon_addr.png')} />
								<Text style={style.addr}>地址:{item.addr}</Text>
							</View>
						</View>
					</TouchableHighlight>
				</View>
			);
		}
		return ary;
	}

	render() {
		let data = this.props.data;
		return (
			<View style={style.item}>
				<Text style={style.area}>{data[0].area}</Text>
				<View>
					{ this._renderCinemasList(data) }
				</View>
			</View>
		)
	}
}

let style = StyleSheet.create({
	item: {
		flex: 1,
		paddingHorizontal: 4,
		borderTopWidth: 5,
		borderColor: '#ececec',
		backgroundColor: '#fdfdfd'
	},
	row: {
		flexDirection: 'row',
		marginVertical: 1,
		paddingVertical: 4,
	},
	addrItem: {
		borderTopWidth: 0.8,
		borderColor: '#ffef7d',
	},
	area: {
		fontSize: 16,
		paddingVertical: 6
	},
	addr: {
		flex: 1,
		fontSize: 12,
	},
	name: {
		paddingTop: 1,
	},
	icon: {
		marginTop: 2,
		marginRight: 3,
		height: 18,
		width: 18,
	}
});

module.exports = item;