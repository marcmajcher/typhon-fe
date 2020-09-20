import React, { useEffect, useState } from 'react';
import './Main.css';
import { useDispatch, useSelector } from 'react-redux';

import HomePage from '../pages/HomePage';
import NewPilotFlow from '../flows/NewPilotFlow';
import SplashPage from '../pages/SplashPage';
import TestConsole from './TestConsole';
import { useRoute } from '../hooks/useRoute';

import { setPilotInfo } from '../actions';

export default function Main(props) {
  const dispatch = useDispatch();
  const [consoleHidden, setConsoleHidden] = useState(true);
  const userInfo = useSelector(s => s.userInfo);
  const loggedIn = !!userInfo;
  const hasPilot = !!useSelector(s => s.pilotInfo);
  const getPilot = useRoute('/pilot');

  useEffect(() => {
    loggedIn && getPilot().then(res => dispatch(setPilotInfo(res)));
  }, [loggedIn]); // eslint-disable-line

  return <main>
    {loggedIn ?
      hasPilot ? <HomePage /> : <NewPilotFlow />
      : <SplashPage />}
    {consoleHidden ? '' : <TestConsole />}
    {userInfo && userInfo.role === 'admin' && <span className="pi" onClick={() => setConsoleHidden(!consoleHidden)}>π</span>}
  </main>;
}
