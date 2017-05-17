/**
 * @author ling
 * @email helloworld3q3q@gmail.com
 * @create date 2017-05-16 08:34:36
 * @modify date 2017-05-16 08:34:36
 * @desc [description]
*/
const hotshow = 'https://api.douban.com/v2/movie/in_theaters';

export function hotshowList(action) {
	return (dispatch) => {
		fetch(hotshow).then(res => res.json())
		.then(json => {
			dispatch(action.call(this, json));
		})
		.catch(msg => console.log('hotshowList-err  '+ msg));
	}
}