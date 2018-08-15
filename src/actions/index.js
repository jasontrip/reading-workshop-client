import { BASE_URL } from '../config';
import { loadAuthToken } from '../local-storage';

const delay = s => res => new Promise(resolve => setTimeout(() => resolve(res), s*1000));

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

export const fetchUserData = authToken => dispatch => {
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
		.then(delay(.5))
		.then((user) => {
			dispatch(setUserData(user));
			dispatch(userDataSucess())
		});
}

export const updateStudent = student => dispatch => {
	dispatch(updateStudentRequest());
	const authToken = loadAuthToken();

	return fetch(BASE_URL + '/students', {
		method: 'PUT',
		headers: {
			Authorization: `Bearer ${authToken}`,
			"Content-Type": "application/json; charset=utf-8",
		},
		body: JSON.stringify(student),
	})
		.then((res) => {
			if (!res.ok) {
				Promise.reject(res.statusText);
			}
			return res.json();
		})
		.then(delay(1.5))
		.then((student) => {
			dispatch(updateStudentSuccess(student));
		})
};

export const UPDATE_STUDENT_REQUEST = 'UPDATE_STUDENT_REQUEST';
export const updateStudentRequest = () => ({
	type: UPDATE_STUDENT_REQUEST,
});

export const UPDATE_STUDENT_SUCCESS = 'UPDATE_STUDENT_SUCCESS';
export const updateStudentSuccess = (student) => ({
	type: UPDATE_STUDENT_SUCCESS,
	student
});

export const DELETE_STUDENT = 'DELETE_STUDENT';
export const deleteStudent = id => ({
	type: DELETE_STUDENT,
	id
});








