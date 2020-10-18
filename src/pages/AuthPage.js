import React from 'react';
import './AuthPage.scss';
import WrapComponent from '../hoc/WrapComponent';
import { getCountries } from '../store/actions/countries'
import PhoneNumber from '../components/Auth/PhoneNumber';

const AuthPage = props => {
    return (
        <div className='__card __m-a __AuthPage'>
            <PhoneNumber />
            {/* <PhoneNumber /> */}
        </div>
    )
}

export default WrapComponent(AuthPage, 'countries', getCountries);