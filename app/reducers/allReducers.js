import { combineReducers } from 'redux';
import UserReducer from './reducers-users';

const allReducers = combineReducers({
	users: UserReducer
});

export default allReducers;