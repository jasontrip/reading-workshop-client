import {createStore, combineReducers, applyMiddleware} from 'redux';
import { userReducer } from './reducers/user';
import { workshopsReducer } from './reducers/workshops';
import { authReducer } from './reducers/auth';
import { uiReducer } from './reducers/ui';
import {reducer as formReducer} from 'redux-form';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { loadAuthToken } from './localStorage';
import { fetchUserData } from './actions/user';
import { refreshAuthToken } from './actions/auth';

const store = createStore(
	combineReducers({
		form: formReducer,
		ui: uiReducer,
		user: userReducer,
		workshops: workshopsReducer,
		auth: authReducer,
	}),
	composeWithDevTools(applyMiddleware(thunk))
);

const authToken = loadAuthToken();
if (authToken) {
  store.dispatch(refreshAuthToken(authToken));
  store.dispatch(fetchUserData());
}

export default store;