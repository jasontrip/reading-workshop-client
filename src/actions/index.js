import { BASE_URL } from '../config';
import { loadAuthToken } from '../local-storage';

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

export const TOGGLE_LOGIN_OR_REGISTER_DIALOG_OPEN = 'TOGGLE_LOGIN_OR_REGISTER_DIALOG_OPEN';
export const toggleLoginOrRegisterDialogOpen = open => ({
	type: TOGGLE_LOGIN_OR_REGISTER_DIALOG_OPEN,
	open
});


export const SET_USER_DATA = 'SET_USER_DATA';
export const setUserData = (user) => ({
	type: SET_USER_DATA,
	user
});

export const USER_DATA_REQUEST = 'USER_DATA_REQUEST';
export const userDataRequest = () => ({
	type: USER_DATA_REQUEST
});

export const USER_DATA_SUCCESS = 'USER_DATA_SUCCESS';
export const userDataSucess = () => ({
	type: USER_DATA_SUCCESS
});

export const CLEAR_USER_DATA = 'CLEAR_USER_DATA';
export const clearUserData = (error) => ({
	type: CLEAR_USER_DATA,
	error
});

export const LOGIN_FAIL = 'LOGIN_FAIL';
export const loginFail = (error) => ({
	type: LOGIN_FAIL,
	error
});

export const fetchUserData = (authToken) => dispatch => {
	dispatch(userDataRequest());
	const authToken = loadAuthToken();
	return fetch(BASE_URL + '/users', {
		method: 'GET',
		headers: {
			Authorization: `Bearer ${authToken}`
		}
	})
		.then((res) => {
			if (!res.ok) {
				return Promise.reject(res.statusText);
			}
			return res.json();
		})
		.then((user) => {
			dispatch(setUserData(user));
			return new Promise((resolve, reject) => {
      	setTimeout(resolve, 3000);
      });
		})
		.then(() => dispatch(userDataSucess()));
}