import {
  AUTH_REQUEST, authRequest, AUTH_SUCCESS, authSuccess,
} from '../auth';

describe('authRequest', () => {
  it('Should return the action', () => {
    const action = authRequest();
    expect(action.type).toEqual(AUTH_REQUEST);
  });
});

describe('authSuccess', () => {
  it('Should return the action', () => {
    const action = authSuccess();
    expect(action.type).toEqual(AUTH_SUCCESS);
  });
});