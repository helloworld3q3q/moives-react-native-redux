import { createStore } from 'redux';
import { Provider } from 'react-redux';
import React, { Component } from 'react';

import Index from './compoments/index';
import allReducers from './reducers/allReducers';

const store = createStore(allReducers);

class App extends Component {
	constructor(props) {
        super(props);
    }

	render() {
		return <Index/>
	}
}

module.exports = App;