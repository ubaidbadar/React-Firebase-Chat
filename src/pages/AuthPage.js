import React, { useEffect } from 'react';
import './AuthPage.scss';
import { useSelector, useDispatch } from 'react-redux';
import { getCountries } from '../store/actions/countries';
import Spinner from '../ui/Spinner';
import AuthComponent from '../components/Auth/AuthComponent';

const AuthPage = () => {
    const { status, data, err } = useSelector(({ countries }) => countries);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCountries());
    }, [dispatch])

    switch (status) {
        case 'initial':
            return <Spinner />
        case 'success':
            return <AuthComponent data={data} />
        default:
            return <h1 className='__m-a __danger'>{err.message}</h1>
    }
}

export default AuthPage;