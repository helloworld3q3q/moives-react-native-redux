/**
 * @author ling
 * @email helloworld3q3q@gmail.com
 * @create date 2017-07-05 06:15:11
 * @modify date 2017-07-05 06:15:11
 * @desc [description]
*/
import { SOONSHOW_LIST } from '../../actions/types';

export const soonShow = (state = {}, action) => {
	switch (action.type) {
		case SOONSHOW_LIST:
			return Object.assign(
			{} , state , {
				data : action.data
			});
		default:
		return state;
	}
}