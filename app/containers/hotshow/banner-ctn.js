import React, { Component } from 'react';
import { Text, StyleSheet, View, Image } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Swiper from 'react-native-swiper';
import { addBanner } from '../../actions/hotshow-action';
import { size } from '../../util/style';

class BannerCtn extends Component {
    render() {
        let data = this.props.banner.data;
        return (
            <View>
            { data !== undefined ? 
                <Swiper height={200}>
                    {
                        data.map((item, i) => {
                                return ( <View key={i} style={{flex: 1}}>
                                    <Image style={{flex: 1}}  resizeMode='cover'
                                    source={{uri: item.images.large}}/>
                                    <Text style={style.title}> {item.title} </Text>
                                </View>)
                        })
                    }
                </Swiper> : <Text>loading</Text>
            }
            </View>
        );
    }
}

function mapStateToProps(state) {
    return {
        banner: state.banner
    }
}

let style = StyleSheet.create({
    title: {
        position: 'absolute',
        flex: 1,
        width: size.width,
        bottom: 0,
        color: '#222629',
        textAlign: 'right',
        backgroundColor: 'rgba(230, 230, 230, 0.3)',
    }
})

export default connect(mapStateToProps)(BannerCtn);