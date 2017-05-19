/**
 * @author ling
 * @email helloworld3q3q@gmail.com
 * @create date 2017-05-16 08:34:36
 * @modify date 2017-05-16 08:34:36
 * @desc [description]
*/
//const hotshow = 'https://api.douban.com/v2/movie/in_theaters';
const hotshow = 'http://192.168.0.105:8080/weixin/hotshow.json';

import { initHotshow, fetchLoading } from '../actions/hotshow-action';

export function hotshowFetch(action) {
	return (dispatch) => {
		fetch(hotshow).then(res => res.json())
		.then(json => {
			dispatch(action(json));
			dispatch(fetchLoading(false));
		}).catch(msg => console.log('hotshowList-err  '+ msg));
	}
}