import authReducer from '../auth';
import { authRequest, authSuccess } from '../../actions/auth';

describe('authRequest', () => {
  it('Should mark loading true', () => {
    let state = { loading: false };
    state = authReducer(state, authRequest());
    expect(state.loading).toEqual(true);
  });
});

describe('authSuccess', () => {
  it('Should mark loading false', () => {
    let state = { loading: true };
    state = authReducer(state, authSuccess());
    expect(state.loading).toEqual(false);
  });
});
