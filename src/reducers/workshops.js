import { EDIT_WORKSHOP } from '../actions/workshops';

const initialState = {
	loading: false,
	currentWorkshop: null
}

export const workshopsReducer = (state=initialState, action) => {
	
	if (action.type === EDIT_WORKSHOP) {
		return Object.assign({}, state, {
			currentWorkshop: action.workshop
		});
	}
	return state;
}
