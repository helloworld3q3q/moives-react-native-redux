/**
 * @author ling
 * @email helloworld3q3q@gmail.com
 * @create date 2017-05-17 10:44:56
 * @modify date 2017-05-17 10:44:56
 * @desc [description]
*/
import React, { Component } from 'react';
import { Text, View, ScrollView, StyleSheet }  from 'react-native';

import { size } from '../../util/style';
import HotShowList from '../../containers/hotshow-list';
import Banner from '../comm/banner';

class hotshow extends Component{
	render() {
		return (
			<ScrollView>
				<Banner/>
				<HotShowList/> 
			</ScrollView>
		);
	}
}

module.exports = hotshow;