import { BASE_URL } from '../config';
import { SubmissionError } from 'redux-form';
import { setUserData, toggleLoginOrRegisterDialogOpen } from './';
import { saveAuthToken, clearAuthToken } from '../local-storage';

export const AUTH_REQUEST = 'AUTH_REQUEST';
export const authRequest = () => ({
    type: AUTH_REQUEST
});

export const AUTH_SUCCESS = 'AUTH_SUCCESS';
export const authSuccess = () => ({
    type: AUTH_SUCCESS
});

export const loginOrRegisterUser = (endpoint, user) => dispatch => {
    dispatch(authRequest());
    const ambiguousLoginError = {
        username: 'Username or password incorrect'
    };
    return fetch(BASE_URL + endpoint, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
        body: JSON.stringify(user)
    })
    .then(res => {
        if (!res.ok) {
            throw ambiguousLoginError;
        }
        return res.json();
    })
    .then(res => {
        if (!res.authToken) {
            throw res;
        }
        saveAuthToken(res.authToken);
        dispatch(setUserData(res.user));
        dispatch(toggleLoginOrRegisterDialogOpen(false));
        dispatch(authSuccess());
    })
    .catch(err => {
        console.log(err);
        throw new SubmissionError(err);
    });
};

export const refreshAuthToken = (authToken) => (dispatch) => {
    dispatch(authRequest());
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
        })
        .finally(() => {
            dispatch(authSuccess());
        });
};