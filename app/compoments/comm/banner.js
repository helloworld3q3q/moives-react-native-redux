import React, { Component } from 'react';
import { View,Text ,StyleSheet }  from 'react-native';
import Swiper from 'react-native-swiper';

class banner extends Component {
	render() {
    return(
			<Swiper style={styles.wrapper} showsButtons={true}>
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
  wrapper: {
    height: 210,
  },
  slide1: {
     height: 210,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB',
  },
  slide2: {
     height: 210,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5',
  },
  slide3: {
     height: 210,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9',
  },
  text: {
     height: 210,
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  }
})

module.exports = banner;