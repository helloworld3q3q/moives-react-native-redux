import React, { Component } from 'react';
import { Text, View, ListView } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addBanner } from '../../actions/hotshow-action';
import Loading from '../../compoments/comm/loading';
import Item from '../../compoments/hotshow/item';

class HotShowList extends Component {

    componentWillMount() {
        //顶部轮播
        let { hotshows, bannerAction  } = this.props;
        let subs = hotshows.data.subjects;
        bannerAction(subs);
    }
    
    _renderList() {
        let { hotshows } = this.props;
        let ary = hotshows.data.subjects, subsAry = [];
        
        for(let i = 0, item; item = ary[i++];) {
            if(i < 11) {
                subsAry.push(
                    <Item key={i} rank={i} data={item}/>
                );
            }
        }
        return subsAry;
    }

	render() {
        return (
            <View style={{marginTop: 1, flexWrap:'wrap', flexDirection: 'row', justifyContent: 'space-between'}}>
                {this._renderList()}
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
    return bindActionCreators({ bannerAction: addBanner}, dispatch);
}

export default connect(mapStateToProps, macthDispatchToProps)(HotShowList);