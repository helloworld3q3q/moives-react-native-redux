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
import { fetchLoading, initUsShow } from '../../actions/hotshow-action';

class usshow extends Component{
	render() {
		return(
			<Text>usshow</Text>
		);
	}

	componentDidMount() {
		this.props.initUsShowAction();
	}
}

function mapStateToProps(state) {
	return {
		usshow: state.usshow.data
    }
}
function macthDispatchToProps(dispatch) {
    return bindActionCreators({
		fetchLoading: fetchLoading,
		initUsShowAction: initUsShow
	}, dispatch);
}

export default connect(mapStateToProps, macthDispatchToProps)(usshow);
//export default usshow