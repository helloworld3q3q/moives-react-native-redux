/**
 * @author ling
 * @email helloworld3q3q@gmail.com
 * @create date 2017-05-16 08:34:36
 * @modify date 2017-05-16 08:34:36
 * @desc [description]
*/
//const hotshow = 'https://api.douban.com/v2/movie/in_theaters';
// const sonshow = 'https://api.douban.com/v2/movie/coming_soon';
// const usshow = 'https://api.douban.com/v2/movie/us_box';
// const nearcinemas = 'http://m.maoyan.com/cinemas.json';

const hotshow = 'http://192.168.0.103:8080/weixin/hotshow.json';
const sonshow = 'http://192.168.0.103:8080/weixin/sonshow.json';
const usshow = 'http://192.168.0.103:8080/weixin/usshow.json';
const nearcinemas = 'http://192.168.0.103:8080/weixin/nearcinemas.json';

import { initHotshow, fetchLoading } from '../actions/hotshow-action';

export function hotshowFetch(action) {
	return (dispatch) => {
		fetch(hotshow).then(res => res.json())
		.then(json => {
			dispatch(action(json));
			//dispatch(fetchLoading(false));
		}).catch(msg => console.log('hotshowList-err  '+ msg));
	}
}

export function usFetch(action) {
	return (dispatch) => {
		fetch(usshow).then(res => res.json())
		.then(json => {
			dispatch(action(json));
			console.log(json);
			//dispatch(fetchLoading(false));
		}).catch(msg => console.log('usshowList-err  '+ msg));
	}
}