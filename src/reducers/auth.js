import {
  AUTH_REQUEST,
  AUTH_SUCCESS,
} from '../actions/auth';

const initialState = {
  loading: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTH_REQUEST:
      return Object.assign({}, state, { loading: true });
    case AUTH_SUCCESS:
      return Object.assign({}, state, { loading: false });
    default:
      return state;
  }
};

export default authReducer;
