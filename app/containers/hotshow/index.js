/**
 * @author ling
 * @email helloworld3q3q@gmail.com
 * @create date 2017-05-17 10:44:56
 * @modify date 2017-05-17 10:44:56
 * @desc [description]
*/
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { size } from '../../util/style';
import HotShowList from './hotshow-list';
import Loading from '../../compoments/comm/loading';
import { initHotshow } from '../../actions/hotshow-action';
import Wait from '../../compoments/comm/wait';

class hotshow extends Component {

	render() {
		return this.props.hotshows ? <HotShowList/> : <Wait/>;
	}
}
function mapStateToProps(state) {
    return {
       // fetchbool: state.fetchload.data,
		hotshows: state.hotshows.data
    }
}
// function macthDispatchToProps(dispatch) {
//     return bindActionCreators({
// 		initHotshowAction: initHotshow,
// 	}, dispatch);
// }
//export default connect(mapStateToProps, macthDispatchToProps)(hotshow);
export default connect(mapStateToProps)(hotshow);

//export default hotshow;
