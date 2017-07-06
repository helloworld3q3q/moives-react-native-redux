/**
 * @author ling
 * @email helloworld3q3q@gmail.com
 * @create date 2017-07-05 06:00:53
 * @modify date 2017-07-05 06:00:53
 * @desc [description]
*/
import React, { Component } from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';
import { size } from '../../util/style';

class item extends Component {

	_renderCasts(data) {
		let list = [];
		let newAry = data.directors.concat(data.casts);
		for(let i = 0, item; item = newAry[i++];) {
			if (item.avatars == null) continue;
			list.push(
				<View style={style.cast} key={i}>
					<Image style={style.avatars} 
					resizeMode='stretch' source={{uri: item.avatars.medium}}/>
					<Text style={style.name}>{item.name}</Text>
				</View>
			);
		}
		return list;
	}

	render() {
		let data = this.props.data;
		return (
			<View style={style.box}>
				<View style={{flexDirection: 'row'}}>
					<Image style={style.poster} resizeMode='stretch' 
					source={{uri: data.images.large}}/>
					<View style={style.msg}>
						<Text style={style.title}>{data.title}</Text>
						{
							data.title === data.original_title ? null : 
							<Text style={style.ortitle} numberOfLines={2}>{data.original_title}</Text>
						}
						<Text>年份:{data.year}</Text>
						<Text>类型:{data.genres.join(',')}</Text>
					</View>
				</View>
				<View style={style.casts}>
					{this._renderCasts(data)}
				</View>
			</View>
		);
	}
}

let style = StyleSheet.create({
	poster: {
		height: 161.2,
		width: 110
	},
	box: {
		borderBottomWidth: 0.5,
		borderColor: '#ea6f5a',
		padding: 4
	},
	casts: {
		paddingTop: 4,
		flexDirection: 'row',
		flexWrap: 'wrap',
		justifyContent: 'space-between'
	},
	title: {
		color: '#000000',
		fontSize: 16
	},
	ortitle: {
		fontSize: 12,
		flexWrap: 'nowrap'
	},
	cast: {
		marginHorizontal: 1,
	},
	avatars: {
		width: 75, 
		height: 100 
	},
	name: {
		fontSize: 10,
		textAlign: 'center'
	},
	msg: {
		paddingLeft: 10,
	}
});

module.exports = item;