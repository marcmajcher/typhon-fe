import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import '../styles/App.scss';
import { checkToken, logOutUser, setUserInfo } from '../actions';
import axios from 'axios';

import TopNav from './TopNav';
import Main from './Main';
import useFlick from '../hooks/useFlick';

export default function App() {
  const flick = useFlick(100);
  const endpoint = useSelector((s) => s.endpoint);
  const token = useSelector((s) => s.token);
  const dispatch = useDispatch();

  useEffect(() => {
    if (token) {
      axios
        .post(`${endpoint}/user/verify`, { token })
        .then((response) => dispatch(setUserInfo(response.data)))
        .catch(() => dispatch(logOutUser()));
    }
    else {
      dispatch(checkToken());
    }
  }, [token]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    flick && <div className="App scanlines">
      <TopNav />
      <Main />
    </div>
  );
}

