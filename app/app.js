/**
 * @author ling
 * @email helloworld3q3q@gmail.com
 * @create date 2017-05-17 10:38:09
 * @modify date 2017-05-17 10:38:09
 * @desc [description]
*/
import { createStore, applyMiddleware, compose  } from 'redux';
//import { View, TextPropertiesAndroid }  from 'react-native';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk'
import React, { Component } from 'react';
import Root from './containers/root';
import allReducers from './reducers/allReducers';
import { initHotshow, fetchLoading } from './actions/hotshow-action';
import AppWithNavigationState from './navigators/AppNavigator'
import { addNavigationHelpers, TabNavigator, StackNavigator  } from 'react-navigation';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const store = createStoreWithMiddleware(allReducers);
//初始化 进入等待
store.dispatch(fetchLoading(true));

class App extends Component {

	constructor(props) {
        super(props);
    }

	render() {
		return (
			<Provider store={ store }>
				<AppWithNavigationState />
			</Provider>
		);
	}
}

module.exports = App;