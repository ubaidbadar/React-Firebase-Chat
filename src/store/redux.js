import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
// import logger from 'redux-logger';
import countries from './reducers/countries';

const reducers = combineReducers({countries});

const store = createStore(reducers, applyMiddleware(thunk));

export default store;