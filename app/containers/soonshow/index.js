/**
 * @author ling
 * @email helloworld3q3q@gmail.com
 * @create date 2017-05-27 02:49:24
 * @modify date 2017-05-27 02:49:24
 * @desc [description]
*/
import React, { Component } from 'react';
import { View, ScrollView, Text }  from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { initSoonShow } from '../../actions/soonshow-action';
import { size } from '../../util/style';
import Wait from '../../compoments/comm/wait';

class soonshow extends Component{
	componentDidMount() {
		this.props.initSoonShowAction();
	}

	render() {
		return(
			<Text>soon</Text>
		);
	}
}


function mapStateToProps(state) {
	return {
		nav: state.nav,
		soonshow: state.soonShow.data
    }
}
function macthDispatchToProps(dispatch) {
    return bindActionCreators({
		initSoonShowAction: initSoonShow
	}, dispatch);
}
export default connect(mapStateToProps, macthDispatchToProps)(soonshow);