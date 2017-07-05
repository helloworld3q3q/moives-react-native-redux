/**
 * @author ling
 * @email helloworld3q3q@gmail.com
 * @create date 2017-07-03 09:54:27
 * @modify date 2017-07-03 09:54:27
 * @desc [description]
*/
import React, { Component } from 'react';
import { Text, View, ListView, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { size } from '../../util/style';
import Item from '../../compoments/usshow/item';

class UsList extends Component {
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
			<View style={{paddingBottom: 24}}>
				<Text style={style.title}>{ this.props.date }</Text>
				<ListView dataSource={this.state.dataSource}  
				renderRow={(rowData) => <Item data={rowData}/>}/>
			</View> 
		);
	}
}


function mapStateToProps(state) {
	return {
		date: state.usshow.data.date,
		subjects: state.usshow.data.subjects,
    }
}

let style = StyleSheet.create({
    title: {
		backgroundColor: 'rgb(230,69,51)',
		textAlign:'center',  
		color: '#ffffff',
		fontSize: 15
    }
});

export default connect(mapStateToProps)(UsList);