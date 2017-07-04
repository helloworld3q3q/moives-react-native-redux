import { HOTSHOW_BANNER, HOTSHOW_LIST, HOTSHOW_FETCH, ADDMORE, USSHOW_LIST } from './types';
import { initFetch } from '../middleware/index-api';
import { hotshow, sonshow, usshow, nearcinemas } from '../middleware/api';

//北美排行榜
export const usList = (data) => {
	return {
		type: USSHOW_LIST,
		data
	}
}
export const initUsShow = () => {
	return initFetch(usList)(usshow);
}