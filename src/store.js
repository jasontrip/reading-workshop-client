import {createStore, combineReducers} from 'redux';
import {readingWorkshopReducer} from './reducers';
import {reducer as formReducer} from 'redux-form';

export default createStore(
	combineReducers({
		form: formReducer,
		readingWorkshop: readingWorkshopReducer,
	}),
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);