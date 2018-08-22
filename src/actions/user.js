import { BASE_URL } from '../config';
import { loadAuthToken } from '../localStorage';
import { loading } from './ui';

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

export const SET_USER_DATA = 'SET_USER_DATA';
export const setUserData = (user) => ({
	type: SET_USER_DATA,
	user
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
	dispatch(loading(true));
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
			dispatch(userDataSucess())
			dispatch(loading(false));
		});
}

export const updateStudent = student => dispatch => {
	dispatch(loading(true));
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
		.then((student) => {
			dispatch(updateStudentSuccess(student));
			dispatch(loading(false));
		})
};

export const UPDATE_STUDENT_SUCCESS = 'UPDATE_STUDENT_SUCCESS';
export const updateStudentSuccess = (student) => ({
	type: UPDATE_STUDENT_SUCCESS,
	student
});

export const createStudent = student => dispatch => {
	dispatch(loading(true));
	const authToken = loadAuthToken();

	return fetch(BASE_URL + '/students', {
		method: 'POST',
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
		.then((student) => {
			dispatch(createStudentSuccess(student));
			dispatch(loading(false));
		})
};

export const CREATE_STUDENT_SUCCESS = 'CREATE_STUDENT_SUCCESS';
export const createStudentSuccess = (student) => ({
	type: CREATE_STUDENT_SUCCESS,
	student
});

export const deleteStudent = _id => dispatch => {
	dispatch(loading(true));
	const authToken = loadAuthToken();

	return fetch(BASE_URL + '/students', {
		method: 'DELETE',
		headers: {
			Authorization: `Bearer ${authToken}`,
			"Content-Type": "application/json; charset=utf-8",
		},
		body: JSON.stringify({ _id }),
	})
		.then((res) => {
			if (!res.ok) {
				Promise.reject(res.statusText);
			}
			dispatch(deleteStudentSuccess(_id));
			dispatch(loading(false));
		});

};

export const DELETE_STUDENT_SUCCESS = 'DELETE_STUDENT_SUCCESS';
export const deleteStudentSuccess = (_id) => ({
	type: DELETE_STUDENT_SUCCESS,
	_id
});

export const updateWorkshop = workshop => dispatch => {
	dispatch(loading(true));
	const authToken = loadAuthToken();

	return fetch(BASE_URL + '/workshops', {
		method: 'PUT',
		headers: {
			Authorization: `Bearer ${authToken}`,
			"Content-Type": "application/json; charset=utf-8",
		},
		body: JSON.stringify(workshop),
	})
		.then((res) => {
			if (!res.ok) {
				Promise.reject(res.statusText);
			}
			return res.json();
		})
		.then((workshop) => {
			dispatch(updateWorkshopSuccess(workshop));
			dispatch(loading(false));
		})
};

export const UPDATE_WORKSHOP_SUCCESS = 'UPDATE_WORKSHOP_SUCCESS';
export const updateWorkshopSuccess = (workshop) => ({
	type: UPDATE_WORKSHOP_SUCCESS,
	workshop
});

export const UPDATE_WORKSHOP_REQUEST = 'UPDATE_WORKSHOP_REQUEST';
export const updateWorkshopRequest = () => ({
	type: UPDATE_WORKSHOP_REQUEST,
});

export const createWorkshop = workshop => dispatch => {
	dispatch(loading(true));
	const authToken = loadAuthToken();

	return fetch(BASE_URL + '/workshops', {
		method: 'POST',
		headers: {
			Authorization: `Bearer ${authToken}`,
			"Content-Type": "application/json; charset=utf-8",
		},
		body: JSON.stringify(workshop),
	})
		.then((res) => {
			if (!res.ok) {
				Promise.reject(res.statusText);
			}
			return res.json();
		})
		.then((workshop) => {
			dispatch(createWorkshopSuccess(workshop));
			dispatch(loading(false));
		})
};

export const CREATE_WORKSHOP_SUCCESS = 'CREATE_WORKSHOP_SUCCESS';
export const createWorkshopSuccess = (workshop) => ({
	type: CREATE_WORKSHOP_SUCCESS,
	workshop
});

export const deleteWorkshop = _id => dispatch => {
	dispatch(loading(true));
	const authToken = loadAuthToken();

	return fetch(BASE_URL + '/workshops', {
		method: 'DELETE',
		headers: {
			Authorization: `Bearer ${authToken}`,
			"Content-Type": "application/json; charset=utf-8",
		},
		body: JSON.stringify({ _id }),
	})
		.then((res) => {
			if (!res.ok) {
				Promise.reject(res.statusText);
			}
			dispatch(deleteWorkshopSuccess(_id));
			dispatch(loading(false));
		});

};

export const DELETE_WORKSHOP_SUCCESS = 'DELETE_WORKSHOP_SUCCESS';
export const deleteWorkshopSuccess = (_id) => ({
	type: DELETE_WORKSHOP_SUCCESS,
	_id
});

