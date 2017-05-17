/**
 * @author ling
 * @email helloworld3q3q@gmail.com
 * @create date 2017-05-17 10:38:09
 * @modify date 2017-05-17 10:38:09
 * @desc [description]
*/
import { createStore, applyMiddleware, compose  } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk'
import React, { Component } from 'react';
import Root from './compoments/root';
import allReducers from './reducers/allReducers';
import { initHotshow } from './actions/hotshow-action';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const store = createStoreWithMiddleware(allReducers);


store.dispatch(initHotshow());

class App extends Component {

	constructor(props) {
        super(props);
    }

	render() {
		return (
			<Provider store={ store }>
				<Root/>
			</Provider>
		);
	}
}

module.exports = App;