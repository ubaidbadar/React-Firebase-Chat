import { STORE_COUNTRIES } from '../actionTypes';


const countries = (state = [], { type, payload }) => type === STORE_COUNTRIES ? payload : state;


export default countries;