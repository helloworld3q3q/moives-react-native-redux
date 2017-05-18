import React, { Component } from 'react';
import { Text } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addBanner } from '../actions/hotshow-action';

class BannerCtn extends Component {

    render() {
        return (
            <Text>{JSON.stringify(this.props.banner)}</Text>
		);
    }
}

function mapStateToProps(state) {
    return {
        banner: state.banner
    }
}

export default connect(mapStateToProps)(BannerCtn);