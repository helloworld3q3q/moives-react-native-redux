import { createStore } from 'redux';
import { Provider } from 'react-redux';
import React, { Component } from 'react';

import Root from './compoments/root';
import allReducers from './reducers/allReducers';

const store = createStore(allReducers);

class App extends Component {
	constructor(props) {
        super(props);
    }

	render() {
		return <Root/>
	}
}

module.exports = App;