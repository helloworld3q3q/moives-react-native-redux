/**
 * @author ling
 * @email helloworld3q3q@gmail.com
 * @create date 2017-05-16 08:34:36
 * @modify date 2017-05-16 08:34:36
 * @desc [description]
*/
import { fetchLoading, initHotshow, navigator } from '../actions/hotshow-action';

export function initFetch(action) {
	return (url) => {
		return (dispatch) => {fetch(url).then(res => res.json())
			.then(json => {
				dispatch(action(json));
				dispatch(fetchLoading(false));
			}).catch(msg => console.log('usshowList-err  '+ msg));
		}
	}
}