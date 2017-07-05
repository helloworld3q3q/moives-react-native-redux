/**
 * @author ling
 * @email helloworld3q3q@gmail.com
 * @create date 2017-07-04 05:39:34
 * @modify date 2017-07-04 05:39:34
 * @desc [description]
*/
import React, { Component } from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';
import { size } from '../../util/style';
import { renderStars } from '../comm/renderstars';

class item extends Component{

	_renderCasts(ary) {
		let list = [];
		for(let i = 0, item; item = ary[i++];) {
			list.push(
				<View key={i} style={style.castitem}>
					<Image style={{width: 56.5, height: 80 }} resizeMode='stretch' 
					source={{uri: item.avatars.medium}}/>
					<Text style={{fontSize: 9}}>{item.name} </Text>
				</View>
			);
		}
		return list;
	}

	render() {
		let { subject, rank, box } = this.props.data;
		
		return (
			<View style={style.row}>
				<Image resizeMode='stretch' style={style.avatar} source={{uri:subject.images.large}}/>
				<View style={style.subject}>
					<View style={style.title}>
						<Text style={style.zhtitle}>{subject.title}</Text>
						<Text style={style.entitle}>{subject.original_title}</Text>
					</View>
					<View style={style.ratingbox}>
						<Text style={style.rating}>最高分:{subject.rating.max}</Text>
						<Text style={style.rating}>最低分:{subject.rating.min}</Text>
						<Text style={style.rating}>平均分:{subject.rating.min}</Text>
					</View>
					<Text>评星:<Text style={style.start}>{renderStars(subject.rating.stars)}</Text></Text>
					<Text style={{fontSize: 12}}>类型:{subject.genres.join(',')}</Text>
					<View style={style.castlist}>{this._renderCasts(subject.casts)}</View>
				</View>
			</View>
		);
	}
}

let style = StyleSheet.create({
	row: {
		width: size.width,
		marginBottom: 1.5,
		paddingHorizontal: 1,
		flexDirection: 'row',
		borderTopWidth: 1.2,
		borderTopColor: '#edeff0',
		paddingTop: 2,
	},
	avatar: {
		height: 171.2,
		width: 120
	},
	subject: {
		marginLeft: 2,
		flex: 1,
	},
	title: {
		flexDirection: 'row',
		flexWrap: 'wrap',
	},
	zhtitle: {
		fontSize: 16,
		color: '#0f0f0f',
	},
	entitle: {
		fontSize: 13,
		color: '#858585',
		marginLeft: 2,
		paddingTop: 2,
	},
	ratingbox: {
		paddingRight: 6,
		flexDirection: 'row',
		justifyContent: 'space-between'
	},
	rating: {
		fontSize: 13,
	},
	start: {
		fontSize: 18,
		color: 'rgb(230,69,51)'
	},
	castlist: {
		flex: 1,
		flexDirection: 'row',
		flexWrap: 'wrap'
	},
	castitem: {
		marginHorizontal: 2,
	}

});

module.exports = item;