import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { checkToken, logOutUser, setUserInfo } from './actions';
import axios from 'axios';

import TopNav from './components/TopNav';
import Main from './components/Main';

export default function App() {
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
    <div className="App">
      <TopNav />
      <Main />
    </div>
  );
}

