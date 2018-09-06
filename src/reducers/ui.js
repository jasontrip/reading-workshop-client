import { TOGGLE_LOGIN_OR_REGISTER_DIALOG_OPEN, LOADING } from '../actions/ui';

const initialState = {
  showLoginOrRegisterDialog: false,
  loading: false,
};

const uiReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_LOGIN_OR_REGISTER_DIALOG_OPEN:
      return Object.assign({}, state, {
        showLoginOrRegisterDialog: action.open,
      });
    case LOADING:
      return Object.assign({}, state, {
        loading: action.loading,
      });
    default:
      return state;
  }
};

export default uiReducer;
