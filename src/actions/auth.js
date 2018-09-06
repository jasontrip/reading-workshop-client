import { SubmissionError } from 'redux-form';
import { BASE_URL } from '../config';
import { setUserData } from './user';
import { saveAuthToken, clearAuthToken } from '../localStorage';
import { toggleLoginOrRegisterDialogOpen, loading } from './ui';

export const AUTH_REQUEST = 'AUTH_REQUEST';
export const authRequest = () => ({
  type: AUTH_REQUEST,
});

export const AUTH_SUCCESS = 'AUTH_SUCCESS';
export const authSuccess = () => ({
  type: AUTH_SUCCESS,
});

export const loginOrRegisterUser = (endpoint, user) => (dispatch) => {
  dispatch(loading(true));
  const ambiguousLoginError = {
    username: 'Username or password incorrect',
  };
  return fetch(BASE_URL + endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  })
    .then((res) => {
      if (!res.ok) {
        throw ambiguousLoginError;
      }
      return res.json();
    })
    .then((res) => {
      if (!res.authToken) {
        throw res;
      }
      saveAuthToken(res.authToken);
      dispatch(setUserData(res.user));
      dispatch(toggleLoginOrRegisterDialogOpen(false));
      dispatch(loading(false));
    })
    .catch((err) => {
      throw new SubmissionError(err);
    });
};

export const refreshAuthToken = authToken => (dispatch) => {
  dispatch(loading(true));
  return fetch(`${BASE_URL}/auth/refresh`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${authToken}`,
    },
  })
    .then(res => res.json())
    .then(({ newAuthToken }) => {
      saveAuthToken(newAuthToken);
    })
    .catch(() => clearAuthToken(authToken))
    .finally(() => dispatch(loading(false)));
};
