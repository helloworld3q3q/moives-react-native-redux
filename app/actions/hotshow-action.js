/**
 * @author ling
 * @email helloworld3q3q@gmail.com
 * @create date 2017-05-12 04:56:43
 * @modify date 2017-05-12 04:56:43
 * @desc [description]
*/
import { HOTSHOW_BANNER, HOTSHOW_LIST, HOTSHOW_FETCH } from './types';
import { hotshowFetch } from '../middleware/index-api';


export const addBanner = (data) => {
	return {
		type: HOTSHOW_BANNER,
		data
	}
}
//加载等待，true 显示 反之
export const fetchLoading = (bool) => {
	return {
		type: HOTSHOW_FETCH,
		bool
	}
}


export const addList = (data) => {
	return {
		type: HOTSHOW_LIST,
		data
	}
}
// 正在热映 初始请求
export const initHotshow = () => {
	return hotshowFetch(addList);
}