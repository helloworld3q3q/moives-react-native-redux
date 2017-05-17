/**
 * @author ling
 * @email helloworld3q3q@gmail.com
 * @create date 2017-05-17 10:38:00
 * @modify date 2017-05-17 10:38:00
 * @desc [description]
*/
import { combineReducers } from 'redux';
import { HotShowList } from './hotshow/reducers'

const allReducers = combineReducers({
	hotshows: HotShowList
});

export default allReducers;