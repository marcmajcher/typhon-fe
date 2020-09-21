import React, { useEffect, useState } from 'react';
import './Main.scss';
import { useDispatch, useSelector } from 'react-redux';

import HomePage from '../pages/HomePage';
import NewPilotFlow from '../flows/NewPilotFlow';
import SplashPage from '../pages/SplashPage';
import TestConsole from './TestConsole';
import { useRoute } from '../hooks/useRoute';

import { setPilotInfo, setShipInfo } from '../actions';
import NewShipFlow from '../flows/NewShipFlow';

export default function Main(props) {
  const dispatch = useDispatch();
  const [consoleHidden, setConsoleHidden] = useState(true);
  const userInfo = useSelector(s => s.userInfo);
  const pilotInfo = useSelector(s => s.pilotInfo);
  const shipInfo = useSelector(s => s.shipInfo);
  const getInfo = useRoute('/user/info');

  const loggedIn = !!userInfo;
  const hasPilot = !!pilotInfo;
  const hasShip = !!shipInfo;

  useEffect(() => {
    loggedIn && getInfo().then(res => {
      console.log("GETTIN IN", res)
      res.pilot && dispatch(setPilotInfo(res.pilot));
      res.ship && dispatch(setShipInfo(res.ship));
    });
  }, [loggedIn, hasPilot, hasShip]); // eslint-disable-line react-hooks/exhaustive-deps

  return <main>
    {loggedIn ?
      hasPilot ?
        hasShip ? <HomePage />
          : <NewShipFlow />
        : <NewPilotFlow />
      : <SplashPage />}
    {consoleHidden ? '' : <TestConsole />}
    {userInfo && userInfo.role === 'admin' && <span className="pi" onClick={() => setConsoleHidden(!consoleHidden)}>π</span>}
  </main>;
}
