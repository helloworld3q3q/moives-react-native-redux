import React, { Component } from 'react';
import { Text } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addList } from '../actions/hotshow-action';

class HotShowList extends Component{
	render() {
        return (
            <Text>{JSON.stringify(this.props.hotshows)}</Text>
		);
    }
}

function mapStateToProps(state) {
    return {
        hotshows: state.hotshows
    }
}
// function macthDispatchToProps(dispatch) {
//     return bindActionCreators({hotshows: HotShowList}, dispatch);
// }

export default connect(mapStateToProps)(HotShowList);