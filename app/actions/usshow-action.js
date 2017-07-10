import { USSHOW_LIST } from './types';
import { initFetch } from '../middleware/index-api';
import { usshow } from '../middleware/apis';

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