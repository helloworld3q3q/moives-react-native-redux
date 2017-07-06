/**
 * @author ling
 * @email helloworld3q3q@gmail.com
 * @create date 2017-07-03 09:54:27
 * @modify date 2017-07-03 09:54:27
 * @desc [description]
*/
import React, { Component } from 'react';
import { View, ListView } from 'react-native';
import { connect } from 'react-redux';
import { size } from '../../util/style';
import Item from '../../compoments/soonshow/item';

class SoonList extends Component {
	componentWillMount() { 
		let ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });
        let data = this.props.subjects;
        this.setState({
            dataSource: ds.cloneWithRows(data),
        });
	}
	render() {
		return (
			<View>
				<ListView dataSource={this.state.dataSource}  
				renderRow={(rowData) => <Item data={rowData}/>}/>
			</View> 
		)
	}
}

function mapStateToProps(state) {
	return {
		subjects: state.soonShow.data.subjects,
    }
}

export default connect(mapStateToProps)(SoonList);