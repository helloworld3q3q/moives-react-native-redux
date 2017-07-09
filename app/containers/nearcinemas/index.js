/**
 * @author ling
 * @email helloworld3q3q@gmail.com
 * @create date 2017-05-27 02:49:24
 * @modify date 2017-05-27 02:49:24
 * @desc [description]
*/
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { View, ScrollView, Text }  from 'react-native';
import { connect } from 'react-redux';
import { size } from '../../util/style';
import Wait from '../../compoments/comm/wait';
import { initCinemas } from '../../actions/cinemas-action';
import { navigation } from '../../actions/hotshow-action';
import CinemasList from './cinemas-list';

class nearcinemas extends Component {
	componentWillMount() {
		this.props.initCinemasAction();
		this.props.navigationAction(this.props.navigation);
	}

	render() {
		return this.props.cinemas ? <CinemasList/>: <Wait/>;
	}
}

function mapStateToProps(state) {
	return {
		cinemas: state.cinemas.data
	}
}

function matchDispatchToProps(dispatch) {
	return bindActionCreators({
		initCinemasAction: initCinemas,
		navigationAction: navigation,
	}, dispatch);
}

module.exports = connect(mapStateToProps, matchDispatchToProps)(nearcinemas);