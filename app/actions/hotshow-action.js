/**
 * @author ling
 * @email helloworld3q3q@gmail.com
 * @create date 2017-05-12 04:56:43
 * @modify date 2017-05-12 04:56:43
 * @desc [description]
*/
import { INDEX_BANNER, HOTSHOW_LIST } from './types';
import { hotshowList } from '../middleware/index-api';


export const addBanner = (banner) => {
	return {
		types: INDEX_BANNER
	}
}


export function addList(data) {
	return {
		type: HOTSHOW_LIST,
		data
	}
}

export const initHotshow = () => {
  return hotshowList(addList);
}