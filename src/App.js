import React, { useEffect, useState } from 'react';
import { auth } from './firebase/utility';
import AuthPage from './pages/AuthPage';
import { useSelector, useDispatch } from 'react-redux';
import onAppStart from './store/actions/auth';
import Spinner from './ui/Spinner/Spinner';
import Routes from './Routes'

const App = () => {
  const [status, setStatus] = useState('loading');
  const [error, setError] = useState(null);
  const user = useSelector(({ user }) => user);
  const dispatch = useDispatch();

  const onFinised = () => setStatus('success');
  const onError = err => setError(err);

  let authSubscribe;
  useEffect(() => {
    authSubscribe = auth.onAuthStateChanged(user => dispatch(onAppStart(user, onFinised, onError)));
  }, [])



  return (
    <div className='__app'>
      {error ? <h1 className='__m-a __danger'>{error.message}</h1> : (status === 'loading' ? <Spinner /> : (user ? <Routes user={user} /> : <AuthPage />))}
    </div>
  )
}

export default App;