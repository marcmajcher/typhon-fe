import React, { useState } from 'react';
import './Main.css';
import { useSelector } from 'react-redux';

import HomePage from '../pages/HomePage';
import NewPilotFlow from '../flows/NewPilotFlow';
import SplashPage from '../pages/SplashPage';
import TestConsole from './TestConsole';

export default function Main(props) {
  const [consoleHidden, setConsoleHidden] = useState(true);
  const loggedIn = !!useSelector((s) => s.userInfo);
  const hasPilot = !!useSelector(s => s.pilotInfo);

  // useEffect(() => {
  //   if (token) {
  //     const authHeaders = {
  //       headers: {
  //         Authorization: `Bearer ${token}`
  //       }
  //     };
  //     axios(`${endpoint}/users`, authHeaders).then(res => {
  //       setUserList(res.data);
  //     });
  //   }
  // }, [token]); // eslint-disable-line react-hooks/exhaustive-deps

  function toggleConsole() {
    console.log("alfkasdofihja");
    setConsoleHidden(!consoleHidden);
  };

  return <main>
    {loggedIn ?
      hasPilot ? <HomePage /> : <NewPilotFlow />
      : <SplashPage />}
    {consoleHidden ? '' : <TestConsole />}
    <span className="pi" onClick={toggleConsole}>π</span>
  </main>;
}
