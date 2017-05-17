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

class banner extends Component {
  
  renderItem() {
    
  }

	render() {
    return(
      <Swiper height={200} showsButtons={false} autoplay={true} loop={true}>
				<View style={styles.slide1}>
				<Text style={styles.text}>Hello Swiper</Text>
				</View>
				<View style={styles.slide2}>
				<Text style={styles.text}>Beautiful</Text>
				</View>
				<View style={styles.slide3}>
				  <Text style={styles.text}>And simple</Text>
				</View>
			</Swiper>
		);
	}
}
var styles = StyleSheet.create({
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB',
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5',
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9',
  },
  text: {
    height: 100,
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  }
})

module.exports = banner;