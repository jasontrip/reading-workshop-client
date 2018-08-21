export const TOGGLE_LOGIN_OR_REGISTER_DIALOG_OPEN = 'TOGGLE_LOGIN_OR_REGISTER_DIALOG_OPEN';
export const toggleLoginOrRegisterDialogOpen = open => ({
	type: TOGGLE_LOGIN_OR_REGISTER_DIALOG_OPEN,
	open
});

export const LOADING = 'LOADING';
export const loading = loading => ({
	type: LOADING,
	loading
});