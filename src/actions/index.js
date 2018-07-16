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
		console.log(res);
		return res.json();
	}).then(user => {
		console.log(user);
	});
}