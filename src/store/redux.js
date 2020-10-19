import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
// import logger from 'redux-logger';
import countries from './reducers/countries';
import user from './reducers/user';

const reducers = combineReducers({ user, countries });

const store = createStore(reducers, applyMiddleware(thunk));

export default store;