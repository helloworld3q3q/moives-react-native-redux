/**
 * @author ling
 * @email helloworld3q3q@gmail.com
 * @create date 2017-05-27 02:49:24
 * @modify date 2017-05-27 02:49:24
 * @desc [description]
*/
import React, { Component } from 'react';
import { View } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { size } from '../../util/style';
import { initUsShow } from '../../actions/usshow-action';
import UsList from './us-list';
import Wait from '../../compoments/comm/wait';
import { navigation } from '../../actions/hotshow-action';

class usshow extends Component{
	componentWillMount() {
		this.props.initUsShowAction();
		this.props.navigationAction(this.props.navigation);
	}

	render() {
		return  this.props.usshow ? <UsList/> : <Wait/>;
	}
}

function mapStateToProps(state) {
	return {
		nav: state.nav,
		usshow: state.usshow.data
    }
}
function macthDispatchToProps(dispatch) {
    return bindActionCreators({
		initUsShowAction: initUsShow,
		navigationAction: navigation,
	}, dispatch);
}

export default connect(mapStateToProps, macthDispatchToProps)(usshow);