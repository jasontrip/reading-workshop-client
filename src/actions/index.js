import { BASE_URL } from '../config';

export const ADD_STUDENT = 'ADD_STUDENT';
export const addStudent = (firstName, lastName) => ({
	type: ADD_STUDENT,
	firstName,
	lastName
});

export const REMOVE_STUDENT = 'REMOVE_STUDENT';
export const removeStudent = id => ({
	type: REMOVE_STUDENT,
	id
});

export const fetchUser = () => dispatch => {
	fetch(BASE_URL + '/users').then(res => {
		if (!res.ok) {
			return Promise.reject(res.statusText);
		}
		// console.log(res);
		return res.json();
	}).then(user => {
		// console.log(user);
	});
}

export const TOGGLE_LOGIN_OR_REGISTER_DIALOG_OPEN = 'TOGGLE_LOGIN_OR_REGISTER_DIALOG_OPEN';
export const toggleLoginOrRegisterDialogOpen = open => ({
	type: TOGGLE_LOGIN_OR_REGISTER_DIALOG_OPEN,
	open
});

export const logInUser = (username, password) => dispatch => {
	fetch(BASE_URL + '/auth/login',
		{ 
		  method: 'POST',
		  body: JSON.stringify( { username, password }),
		  headers:{ 'Content-Type': 'application/json' },
		}
	)
	.then(res => res.json())
	.then(data => dispatch(fetchLoginSuccess(data.user)));
};

export const FETCH_LOGIN_SUCCESS = 'FETCH_LOGIN_SUCCESS';
export const fetchLoginSuccess = (user) => ({
	type: FETCH_LOGIN_SUCCESS,
	user
});

export const LOG_OUT = 'LOG_OUT';
export const logOut = () => ({
	type: LOG_OUT
});