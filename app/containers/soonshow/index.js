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
import SoonList from './soon-list';
import { navigation } from '../../actions/hotshow-action';

class soonshow extends Component{
	componentWillMount() {
		this.props.initSoonShowAction();
		this.props.navigationAction(this.props.navigation);
	}

	render() {
		return  this.props.soonshow ? <SoonList/> : <Wait/> ;
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
		initSoonShowAction: initSoonShow,
		navigationAction: navigation
	}, dispatch);
}
export default connect(mapStateToProps, macthDispatchToProps)(soonshow);