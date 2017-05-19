import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addBanner } from '../../actions/hotshow-action';
import Loading from '../../compoments/comm/loading';

class HotShowList extends Component {
   
    componentWillReceiveProps(nextProps) {
        let { hotshows, bannerAction  } = nextProps;
        let subs = hotshows.data.subjects;
        
        bannerAction(subs);
    }
    
	render() {
        let { hotshows } = this.props;
        return (
            <View>
                <Text>{JSON.stringify(hotshows)}</Text>
            </View>
		);
    }
}

function mapStateToProps(state) {
    return {
        hotshows: state.hotshows
    }
}
function macthDispatchToProps(dispatch) {
    return bindActionCreators({bannerAction: addBanner}, dispatch);
}

export default connect(mapStateToProps, macthDispatchToProps)(HotShowList);