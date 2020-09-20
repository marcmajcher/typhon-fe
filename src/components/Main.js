import React, { useState } from 'react';
import './Main.css';
import { useSelector } from 'react-redux';

import HomePage from '../pages/HomePage';
import NewPilotFlow from '../flows/NewPilotFlow';
import SplashPage from '../pages/SplashPage';
import TestConsole from './TestConsole';

export default function Main(props) {
  const [consoleHidden, setConsoleHidden] = useState(true);
  const userInfo = useSelector(s => s.userInfo);
  const loggedIn = !!userInfo;
  const hasPilot = !!useSelector(s => s.pilotInfo);

  return <main>
    {loggedIn ?
      hasPilot ? <HomePage /> : <NewPilotFlow />
      : <SplashPage />}
    {consoleHidden ? '' : <TestConsole />}
    {userInfo && userInfo.role === 'admin' && <span className="pi" onClick={() => setConsoleHidden(!consoleHidden)}>π</span>}
  </main>;
}
