/**
 * @author ling
 * @email helloworld3q3q@gmail.com
 * @create date 2017-07-06 05:49:01
 * @modify date 2017-07-06 05:49:01
 * @desc [description]
*/
import { CINEMAS_LIST } from './types';
import { initFetch } from '../middleware/index-api';
import { nearcinemas } from '../middleware/apis';

export const cinemasList = (data) => {
	return {
		type: CINEMAS_LIST,
		data
	}
}

export const initCinemas = () => {
	return initFetch(cinemasList)(nearcinemas);
}