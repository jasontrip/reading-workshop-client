import {
	AUTH_REQUEST,
	AUTH_SUCCESS
} from '../actions/auth';

const initialState = {
	loading: false
}

export const authReducer = (state = initialState, action) => {
	if (action.type === AUTH_REQUEST) {
		return Object.assign({}, state, {
			loading: true
		});
	} else if (action.type === AUTH_SUCCESS) {
		return Object.assign({}, state, {
			loading: false
		});
	}
	return state;
}