import { TOGGLE_LOGIN_OR_REGISTER_DIALOG_OPEN, LOADING } from '../actions/ui';

const initialState = {
	showLoginOrRegisterDialog: false,
	loading: false
}

export const uiReducer = (state=initialState, action) => {

	if (action.type === TOGGLE_LOGIN_OR_REGISTER_DIALOG_OPEN) {
		return Object.assign({}, state, {
			showLoginOrRegisterDialog: action.open
		});
	} else if (action.type === LOADING) {
		return Object.assign({}, state, {
			loading: action.loading
		});
	}
	return state;
}