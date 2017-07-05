import React, { Component } from 'react';
import { Image }  from 'react-native';
import { size } from '../../util/style';

class Wait extends Component{
	render() {
		return (<Image style={{width: size.width, height: size.height-50}} resizeMode='stretch'
				source={require('../../icon/wait.jpg')}/>
		);
	}
}

module.exports = Wait;