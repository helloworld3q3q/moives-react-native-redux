/**
 * @author ling
 * @email helloworld3q3q@gmail.com
 * @create date 2017-05-17 10:38:00
 * @modify date 2017-05-17 10:38:00
 * @desc [description]
*/
import { combineReducers } from 'redux';
import { HotShowList, Banner, fetchLoading } from './hotshow/reducers'
import { nav } from './navigators/index'

const allReducers = combineReducers({
	hotshows: HotShowList,
	banner: Banner,
	fetchload: fetchLoading,
	nav: nav,
});

export default allReducers;