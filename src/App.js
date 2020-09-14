import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { checkToken } from './actions';
import TopNav from './components/TopNav';
import TestConsole from './components/TestConsole';

export default function App() {

  // const endpoint = useSelector((s) => s.endpoint);
  // const gameState = useSelector((s) => s.gameState);
  // const loggedIn = !!useSelector((s) => s.userInfo);
  const token = useSelector((s) => s.token);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkToken());
  }, [token]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="App">
      <TopNav></TopNav>
      <TestConsole />
    </div>
  );
}

