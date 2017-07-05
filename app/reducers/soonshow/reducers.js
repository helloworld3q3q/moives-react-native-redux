import { SOONSHOW_LIST } from '../../actions/types';

export const soonShow = (state = {}, action) => {
	switch (action.type) {
		case SOONSHOW_LIST:
			return Object.assign(
			{} , state , {
				data : action.data
			});
		default:
		return state;
	}
}