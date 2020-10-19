import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Spinner from '../ui/Spinner/Spinner'

const ReduxASYNC = (WrappedComponent, reducerName, action) => {
    const App = () => {
        const { status, data, err } = useSelector(store => store[reducerName]);
        const dispatch = useDispatch();
        useEffect(() => {
            dispatch(action());
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

export default ReduxASYNC;