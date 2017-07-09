/**
 * @author ling
 * @email helloworld3q3q@gmail.com
 * @create date 2017-05-19 08:38:19
 * @modify date 2017-05-19 08:38:19
 * @desc [description]
*/
import React, { Component } from 'react';
import { Text, View, Image, StyleSheet, TouchableOpacity  } from 'react-native';
import { size } from '../../util/style';

const width = size.width/2-0.2;

class item extends Component{
	render() {
		let data = this.props.data;
		return(
			<View style={style.box}>
				<TouchableOpacity onPress={()=> {
							this.props.navigation.dispatch({ 
								type: 'WebDetail', webViewURL: data.alt 
							});
						}}>
					<Image resizeMode='cover' style={style.avatar} source={{uri:data.images.large}}/>
				</TouchableOpacity>
				<View style={style.rank}>
					<Text style={style.rankTxt}>Top{this.props.rank}</Text>
				</View>
				<View style={style.msgbox}>
					<View style={style.msgrow}>
						<Text style={style.msgrowl}>{data.title}</Text>
						<Text style={style.msgrowr}>评分:{data.rating.average}</Text>
					</View>
					<View style={style.msgrow}>
						<Text style={style.msgrowl}>
						{data.genres.map((item, i)=> {
							if(i > 1) return;
							i == 1 ? null : item += ',';
							return item;
						})}
						</Text>
						<Text style={style.msgrowr}>观影人数:{data.collect_count}</Text>
					</View>
				</View>
			</View>
		);
	}
}

let style = StyleSheet.create({
	box: {
		width: width,
		paddingBottom: 1
	},
	avatar: {
		flex: 1,
		height: 260,
	},
	rank: {
		position: 'absolute',
		top: 0,
		left: 0,
        backgroundColor: 'rgba(255,164,51,0.6)',
        paddingVertical: 1,
        paddingHorizontal: 3,
		borderBottomRightRadius: 4
    },
	rankTxt: {
		fontSize: 12,
		color: '#ffffff'
	},
	msgbox: {
		position: 'absolute',
		bottom: 1,
		width: width,
		paddingHorizontal: 2,
		backgroundColor: 'rgba(230,69,51,0.5)',
	},
	msgrow: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	msgrowl: {
		fontSize: 12,
		color: '#ffffff'
	},
	msgrowr: {
		fontSize: 13,
		color: '#ffffff'
	}
});

module.exports = item;