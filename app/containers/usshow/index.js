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
import { size } from '../../util/style';
import { initUsShow } from '../../actions/usshow-action';
import UsList from './us-list';

class usshow extends Component{
	componentWillMount() {
		this.props.initUsShowAction();
	}

	shouldComponentUpdate(nextProps, nextState) {
		//防止滑动到其他页面 触发 render
		let nav = nextProps.nav;
		if (this.props.usshow === undefined) {
			return false;
		} else {
			return nav.index === 1;
		}
	}

	render() {
		return this.props.usshow ? <UsList /> : <Text>LOADING</Text>;
	}
}

function mapStateToProps(state) {
	return {
		state: state,
		nav: state.nav,
		usshow: state.usshow.data
    }
}
function macthDispatchToProps(dispatch) {
    return bindActionCreators({
		initUsShowAction: initUsShow
	}, dispatch);
}

export default connect(mapStateToProps, macthDispatchToProps)(usshow);