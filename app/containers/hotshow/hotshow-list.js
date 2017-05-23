import React, { Component } from 'react';
import { Text, View, ListView } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addBanner } from '../../actions/hotshow-action';
import Loading from '../../compoments/comm/loading';
import Item from '../../compoments/hotshow/item';
import Banner from './banner-ctn';

class HotShowList extends Component {
    constructor(props) {
        super(props);
        let { hotshows, bannerAction  } = this.props;
        let subs = hotshows.data.subjects;
        bannerAction(subs);
    }

    componentWillMount() {
        //顶部轮播
        // let { hotshows, bannerAction  } = this.props;
        // let subs = hotshows.data.subjects;
        // bannerAction(subs);
    }
    _renderList() {
        let { hotshows } = this.props;
        let ary = hotshows.data.subjects, subsAry = [], row=[];
        row.push(<Banner/>);
        for(let i = 0, item; item = ary[i++];) {
            //一行两个
            subsAry.push(
                <Item key={i} rank={i} data={item}/>
            );
            if(subsAry.length == 2) {
                row.push(subsAry);
                subsAry = [];
            }
        }
        return row;
    }
    _renderRow(data) {
        return(
            <View style={{marginTop: 1, flexWrap:'wrap', flexDirection: 'row', justifyContent: 'space-between'}}>{data}</View>
        );
    }
	render() {
        let ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });
        let data = this._renderList();
        
        this.state = {
            dataSource: ds.cloneWithRows(data),
        }
        //removeClippedSubviews 处理 banner 图片不显示
        return (
            <View>
                <ListView removeClippedSubviews={false} dataSource={this.state.dataSource}  renderRow={this._renderRow}/>
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