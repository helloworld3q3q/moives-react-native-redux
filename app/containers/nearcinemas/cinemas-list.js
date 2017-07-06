import React, { Component } from 'react';
import { Text, View, ListView, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import Item from '../../compoments/cinemas/item';

class CinemasList extends Component {
	
	componentWillMount() {
		let ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });

		let data = this.props.cinemas.data;
        this.setState({
            dataSource: ds.cloneWithRows(data),
        });
	}

	render() {
		return(
			<ListView  dataSource={this.state.dataSource} 
			renderRow={(rowData) => <Item data={rowData}/>}/>
		);
	}
}

function mapStateToProps(state) {
	return {
		cinemas: state.cinemas.data
	}
}

module.exports = connect(mapStateToProps)(CinemasList);