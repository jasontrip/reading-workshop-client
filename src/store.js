import {createStore} from 'redux';
import {readingWorkshopReducer} from './reducers';

export default createStore(readingWorkshopReducer);