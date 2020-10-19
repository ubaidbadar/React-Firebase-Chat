import { STORE_COUNTRIES, FETCH_COUNTRIES_ERROR } from '../actionTypes';
import axios from 'axios';

const storeCountries = payload => ({ type: STORE_COUNTRIES, payload: payload });
const fetchCountriesError = payload => ({ type: FETCH_COUNTRIES_ERROR, payload: payload })

export const getCountries = () => dispatch => {
    axios.get('https://restcountries.eu/rest/v2/all')
        .then(({ data }) => data.filter(({ callingCodes }) => callingCodes[0].length > 1 && callingCodes[0].length < 3))
        .then(countries => dispatch(storeCountries({ status: 'success', data: countries })))
        .catch(err => dispatch(fetchCountriesError({ status: 'failure', err })))
}