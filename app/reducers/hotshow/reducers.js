/**
 * @author ling
 * @email helloworld3q3q@gmail.com
 * @create date 2017-05-12 04:56:34
 * @modify date 2017-05-12 04:56:34
 * @desc [description]
*/
import { HOTSHOW_BANNER, HOTSHOW_LIST } from '../../actions/types';

export const HotShowList = (state = {}, action) => {
	switch (action.type) {
		case HOTSHOW_LIST:
			return Object.assign(
			{} , state , {
				data : action.data
			});
		default:
		return state;
	}
}

export const Banner = (state = {}, action) => {
	switch (action.type) {
		case HOTSHOW_BANNER:
			let subjects = action.data;
			let data = subjects.slice(0, 5);
			console.log(data);
			return Object.assign(
			{} , state , {
				data : data
			}); 
		default:
		return state;
	}
} 
