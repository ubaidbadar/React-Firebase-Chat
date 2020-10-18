import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Spinner from '../ui/Spinner/Spinner'

const WrapComponent = (WrappedComponent, key, action = null) => {
    const App = () => {
        const { status, data, err } = useSelector(store => store[key]);
        const dispatch = useDispatch();

        useEffect(() => {
            action && dispatch(action());
        }, [dispatch])

        switch (status) {
            case 'initial':
                return <Spinner />
            case 'success':
                return <WrappedComponent data={data} />
            default:
                return <h1 className='__m-a __danger'>{err.message}</h1>
        }
    }
    return App;
}

export default WrapComponent;