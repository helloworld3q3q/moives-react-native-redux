import { SOONSHOW_LIST } from './types';
import { initFetch } from '../middleware/index-api';
import { sonshow } from '../middleware/apis';

//近期上映
export const soonList = (data) => {
	return {
		type: SOONSHOW_LIST,
		data
	}
}
export const initSoonShow = () => {
	return initFetch(soonList)(sonshow);
}