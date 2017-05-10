import { createStore } from 'redux';
import { Provider } from 'react-redux';
import React, { Component } from 'react';

import Index from './compoments/index';
import allReducers from './reducers/allReducers';

const store = createStore(allReducers);

export default class App extends Component {
	render() {
		return(
			<Provider state={ store }>
				<Index/>
			</Provider>
		);
	}
}