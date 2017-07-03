/**
 * @author ling
 * @email helloworld3q3q@gmail.com
 * @create date 2017-05-12 04:56:43
 * @modify date 2017-05-12 04:56:43
 * @desc [description]
*/
import { HOTSHOW_BANNER, HOTSHOW_LIST, HOTSHOW_FETCH, ADDMORE, USSHOW_LIST } from './types';
import { hotshowFetch, usFetch } from '../middleware/index-api';

//添加轮播
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
//添加list
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

//请求正在热映
export const usList = (data) => {
	return {
		type: USSHOW_LIST,
		data
	}
}
export const initUsShow = () => {
	return usFetch(usList);
}

//导航 action onpress
export const navigator = (nav, type) => {
	return {
		type: nav.routeName,
		nav
	}
}