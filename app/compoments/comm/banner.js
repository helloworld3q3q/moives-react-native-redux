/**
 * @author ling
 * @email helloworld3q3q@gmail.com
 * @create date 2017-05-17 10:37:29
 * @modify date 2017-05-17 10:37:29
 * @desc [description]
*/
import React, { Component } from 'react';
import { View,Text ,StyleSheet }  from 'react-native';
import Swiper from 'react-native-swiper';
import BannerCtn from '../../containers/banner-ctn';


class banner extends Component {
  
  render() {
    return <BannerCtn/>;
  }
}

module.exports = banner;