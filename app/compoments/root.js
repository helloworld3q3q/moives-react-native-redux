import React, { Component } from 'react';
import { Text, View, ScrollView, StyleSheet }  from 'react-native';

import Search from './comm/search';
import { size } from '../util/style'

class root extends Component {

	constructor(props) {
        super(props);
    }

	render() {
		return(
			<View style={style.wrap}>
				<Search/>
				<ScrollView>
					
				</ScrollView>
			</View>
		);
	}
}
const style = StyleSheet.create({
	wrap: {
		backgroundColor: '#f5f5f5',
		height: size.height,
		width: size.width
	}
});

module.exports = root;