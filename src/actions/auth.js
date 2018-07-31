import { BASE_URL } from '../config';
import { SubmissionError } from 'redux-form';
import { setUserData, toggleLoginOrRegisterDialogOpen } from './';
import { saveAuthToken, clearAuthToken } from '../local-storage';

export const logInUser = (username, password) => dispatch => {
	return fetch(BASE_URL + '/auth/login',
		{ 
		  method: 'POST',
		  body: JSON.stringify( { username, password }),
		  headers:{ 'Content-Type': 'application/json' },
		}
	)
	.then(res => {
		if (!res.ok) {
			return Promise.reject(res.statusText);
		}
		return res.json();
	})
	.then(data => {
		saveAuthToken(data.authToken);
		dispatch(setUserData(data.user));
		dispatch(toggleLoginOrRegisterDialogOpen(false));
	})
	.catch(err => {
    throw new SubmissionError({
      email: 'Athentication failed.',
      _error: 'Login failed!'
    });
	});
};

export const refreshAuthToken = (authToken) => (dispatch) => {
    return fetch(`${BASE_URL}/auth/refresh`, {
        method: 'POST',
        headers: {
            // Provide our existing token as credentials to get a new one
            Authorization: `Bearer ${authToken}`
        }
    })
        .then(res => {
        	return res.json();
        })
        .then(({authToken}) => {
        	saveAuthToken(authToken);
        })
        .catch(err => {
            // We couldn't get a refresh token because our current credentials
            // are invalid or expired, or something else went wrong, so clear
            // them and sign us out
            // dispatch(authError(err));
            clearAuthToken(authToken);
        });
};