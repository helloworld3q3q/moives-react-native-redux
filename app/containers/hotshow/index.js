/**
 * @author ling
 * @email helloworld3q3q@gmail.com
 * @create date 2017-05-17 10:44:56
 * @modify date 2017-05-17 10:44:56
 * @desc [description]
*/
import React, { Component } from 'react';
import { View } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { size } from '../../util/style';
import HotShowList from './hotshow-list';
import Loading from '../../compoments/comm/loading';
import { initHotshow } from '../../actions/hotshow-action';
import { initUsShow } from '../../actions/usshow-action';
import Wait from '../../compoments/comm/wait';

class hotshow extends Component {
	// componentDidMount() {
	// 	//this.props.initUsShowAction();
	// }

	render() {
		return ( 
		<View style={{height: size.height, width:size.width, paddingBottom: 70}}> 
			{this.props.hotshows ? <HotShowList/> : <Wait/>}
		</View>);
	}

}
function mapStateToProps(state) {
    return {
		hotshows: state.hotshows.data
    }
}
// function macthDispatchToProps(dispatch) {
//     return bindActionCreators({
// 		initHotshowAction: initHotshow,
// 		initUsShowAction: initUsShow,
// 	}, dispatch);
// }
// export default connect(mapStateToProps, macthDispatchToProps)(hotshow);
export default connect(mapStateToProps)(hotshow);

//export default hotshow;
