import { STORE_COUNTRIES, FETCH_COUNTRIES_ERROR } from '../actionTypes';

const initialState = {
    status: 'initial',
    data: [],
}

const countries = (state = initialState, { type, payload }) => type === STORE_COUNTRIES || type === FETCH_COUNTRIES_ERROR ? payload : state;


export default countries;