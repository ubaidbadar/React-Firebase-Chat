import { STORE_COUNTRIES, FETCH_COUNTRIES_ERROR } from '../actionTypes';
import axios from 'axios';

const storeCountries = payload => ({ type: STORE_COUNTRIES, payload: payload });
const fetchCountriesError = payload => ({ type: FETCH_COUNTRIES_ERROR, payload: payload })

export const getCountries = () => dispatch => {
    axios.get('https://restcountries.eu/rest/v2/all')
        .then(({ data }) => dispatch(storeCountries({ status: 'success', data })))
        .catch(err => dispatch(fetchCountriesError({ status: 'failure', err })))
}