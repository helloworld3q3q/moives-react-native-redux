/**
 * @author ling
 * @email helloworld3q3q@gmail.com
 * @create date 2017-07-06 05:58:30
 * @modify date 2017-07-06 05:58:30
 * @desc [description]
*/
import { CINEMAS_LIST } from '../../actions/types';

export const cinemas = (state = {}, action) => {
	switch (action.type) {
		case CINEMAS_LIST:
			return Object.assign(
			{} , state , {
				data : action.data
			});
		default:
		return state;
	}
}