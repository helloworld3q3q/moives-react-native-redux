/**
 * @author ling
 * @email helloworld3q3q@gmail.com
 * @create date 2017-05-17 10:44:56
 * @modify date 2017-05-17 10:44:56
 * @desc [description]
*/
import React, { Component } from 'react';
import { View, ScrollView }  from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { size } from '../../util/style';
import HotShowList from './hotshow-list';
import Loading from '../../compoments/comm/loading'
import { fetchLoading, initHotshow } from '../../actions/hotshow-action';

class hotshow extends Component {

	componentWillMount() {
		let _that = this;
		let time = setTimeout(function(){
			_that.props.initHotshowAction();
			clearTimeout(time);
		}, 1500);
	}
	render() {
		// return (<View >
		// 		{this.props.fetchbool ? <Loading/> : 
		// 			(<ScrollView onScroll={(e) => this._scrollEnd(e)}>
		// 				<Banner/>
		// 				<HotShowList/> 
		// 			</ScrollView>)
		// 		}
		// 	</View>);
		return (<View >
				{this.props.fetchbool ? <Loading/> : <HotShowList/> }
			</View>);
	}
}
function mapStateToProps(state) {
    return {
        fetchbool: state.fetchload.data,
		hotshows: state.hotshows.data
    }
}
function macthDispatchToProps(dispatch) {
    return bindActionCreators({
		initHotshowAction: initHotshow,
	}, dispatch);
}
export default connect(mapStateToProps, macthDispatchToProps)(hotshow);
