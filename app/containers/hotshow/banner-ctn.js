import React, { Component } from 'react';
import { Text, StyleSheet, View, Image } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Swiper from 'react-native-swiper';
import { addBanner } from '../../actions/hotshow-action';
import { size } from '../../util/style';

class BannerCtn extends Component {
    constructor(props) {
        super(props);
        this.state={
            visibleSwiper: false
        }
    }

    render() {
        let data = this.props.banner.data;
        return (
            <View style={{height: 200}}>
            { this.state.visibleSwiper  ? 
                <Swiper height={200} autoplay={true} >
                    {
                        data.map((item, i) => {
                                return ( <View key={i} style={{flex: 1, height:200}}>
                                    <Image style={{flex: 1}}  resizeMode='cover'
                                    source={{uri: item.images.large}}/>
                                    <Text style={style.title}> {item.title} </Text>
                                </View>)
                        })
                    }
                </Swiper>: <Text>LOADING</Text>
            }
            </View>
        );
    }

    componentDidMount() {
        let time = setTimeout(() => {
            this.setState({
                visibleSwiper: true
            });
            clearTimeout(time);
        }, 200);
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
        width: size.width,
        bottom: 0,
        color: '#ffffff',
        textAlign: 'right',
        backgroundColor: 'rgba(230,69,51,0.25)'
    }
})

export default connect(mapStateToProps)(BannerCtn);