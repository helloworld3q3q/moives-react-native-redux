/**
 * @author ling
 * @email helloworld3q3q@gmail.com
 * @create date 2017-05-12 04:56:43
 * @modify date 2017-05-12 04:56:43
 * @desc [description]
*/
import { INDEX_BANNER, INDEX_LIST } from 'types';

export const addBanner = (banner) => {
	return {
		types: INDEX_BANNER
	}
}

export const addList = (item) => {
	return {
		types: INDEX_LIST
	}
}

