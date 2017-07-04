/**
 * @author ling
 * @email helloworld3q3q@gmail.com
 * @create date 2017-05-16 08:34:36
 * @modify date 2017-05-16 08:34:36
 * @desc [description]
*/


// const hotshow = 'http://192.168.0.103:8080/weixin/hotshow.json';
// const sonshow = 'http://192.168.0.103:8080/weixin/sonshow.json';
// const usshow = 'http://192.168.0.103:8080/weixin/usshow.json';
// const nearcinemas = 'http://192.168.0.103:8080/weixin/nearcinemas.json';

import { initHotshow, fetchLoading } from '../actions/hotshow-action';

export function initFetch(action) {
	return (url) => {
		return (dispatch) => {fetch(url).then(res => res.json())
			.then(json => {
				dispatch(action(json));
				//dispatch(fetchLoading(false));
			}).catch(msg => console.log('usshowList-err  '+ msg));
		}
	}
}