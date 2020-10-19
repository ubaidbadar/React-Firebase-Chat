import React from 'react';
import './AuthPage.scss';
import WrapComponent from '../hoc/WrapComponent';
import { getCountries } from '../store/actions/countries';
import PhoneNumber from '../components/Auth/PhoneNumber';
import logo from '../assets/logo.png';

const AuthPage = props => {
    return (
        <div className='__card __m-a __AuthPage'>
            <img alt='' src={logo} className='__m-a __mt-1 __block __logo' />
            <PhoneNumber countries={props.data} />
        </div>
    )
}

export default WrapComponent(AuthPage, 'countries', getCountries);