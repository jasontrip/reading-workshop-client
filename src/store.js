import {createStore} from 'redux';
import {readingWorkshopReducer} from './reducers';

export default createStore(
	readingWorkshopReducer,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);