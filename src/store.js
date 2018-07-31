import {createStore, combineReducers, applyMiddleware} from 'redux';
import {readingWorkshopReducer} from './reducers';
import { authReducer } from './reducers/auth';
import {reducer as formReducer} from 'redux-form';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { loadAuthToken } from './local-storage';
import { fetchUserData } from './actions';
import { refreshAuthToken } from './actions/auth';

const store = createStore(
	combineReducers({
		form: formReducer,
		readingWorkshop: readingWorkshopReducer,
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