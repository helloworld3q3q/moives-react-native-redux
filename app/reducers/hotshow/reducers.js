/**
 * @author ling
 * @email helloworld3q3q@gmail.com
 * @create date 2017-05-12 04:56:34
 * @modify date 2017-05-12 04:56:34
 * @desc [description]
*/
import { INDEX_BANNER, HOTSHOW_LIST } from '../../actions/types';

export const item = (state = {}, action) => {
	switch (action.type) {
		case INDEX_LIST:
			break;
		default:
			break;
	}
}

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
