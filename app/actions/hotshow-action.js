/**
 * @author ling
 * @email helloworld3q3q@gmail.com
 * @create date 2017-05-12 04:56:43
 * @modify date 2017-05-12 04:56:43
 * @desc [description]
*/
import { HOTSHOW_BANNER, HOTSHOW_LIST, HOTSHOW_FETCH, ADDMORE } from './types';
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


//导航 action
export const hotshowNav = (nav) => {
	return {
		type: 'hotshow',
		nav
	}
}

export const soonshowNav = (nav) => {
	return {
		type: nav.routeName,
		nav
	}
}
export const navigator = (nav, type) => {
	return {
		type: nav.routeName,
		nav
	}
}

// export const navigator = {
// 	soonshowNav : (nav) => {
// 		return {
// 			type: 'soonshow',
// 			nav
// 		}
// 	},
// 	hotshowNav: (nav) => {
// 		return {
// 			type: 'hotshow',
// 			nav
// 		}
// 	},
// 	usshow: (nav) => {
// 		return {
// 			type: 'usshow',
// 			nav
// 		}
// 	},
// 	nearcinemas: (nav) => {
// 		return {
// 			type: 'nearcinemas',
// 			nav
// 		}
// 	}
// }