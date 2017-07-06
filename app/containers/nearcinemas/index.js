/**
 * @author ling
 * @email helloworld3q3q@gmail.com
 * @create date 2017-05-27 02:49:24
 * @modify date 2017-05-27 02:49:24
 * @desc [description]
*/
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { size } from '../../util/style';
import Wait from '../../compoments/comm/wait';
import initCinemas from '../../actions/cinemas-action';

class nearcinemas extends Component {
	componentWillMount() {
		this.props.initCinemasAction();
	}

	render() {
		console.log(this.props.cinemas);
		return(
			<Text>near</Text>
		);
	}
}

function mapStatToProps(state) {
	return {
		cinemas: state.cinemas
	}
}

function matchDispatchToProps() {
	return bindActionCreators({
		initCinemasAction: initCinemas
	});
}

module.exports = connect(mapStatToProps, matchDispatchToProps)(nearcinemas);