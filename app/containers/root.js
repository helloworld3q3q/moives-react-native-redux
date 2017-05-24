/**
 * @author ling
 * @email helloworld3q3q@gmail.com
 * @create date 2017-05-17 10:36:57
 * @modify date 2017-05-17 10:36:57
 * @desc [description]
*/
import React, { Component } from 'react';
import { Text, View, ScrollView, StyleSheet }  from 'react-native';
import { size } from '../util/style';
import HotShow from './hotshow/index';

class root extends Component {

	constructor(props) {
        super(props);
    }

	render() {
		return(
			<View style={style.wrap}>
				<HotShow/>
			</View>
		);
	}
}
const style = StyleSheet.create({
	wrap: {
		paddingBottom: 45,
		backgroundColor: '#f5f5f5',
		height: size.height ,
		width: size.width,
	}
});

module.exports = root;