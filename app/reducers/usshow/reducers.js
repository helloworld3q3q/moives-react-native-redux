import { USSHOW_LIST, HOTSHOW_LIST, HOTSHOW_FETCH } from '../../actions/types';

export const usShow = (state = {}, action) => {
	switch (action.type) {
		case USSHOW_LIST:
			return Object.assign(
			{} , state , {
				data : action
			});
		default:
		return state;
	}
}