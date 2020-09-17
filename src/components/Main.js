import React from 'react';
import './Main.css';
import { useSelector } from 'react-redux';

import HomePage from '../pages/HomePage';
import NewPilotFlow from '../flows/NewPilotFlow';
import SplashPage from '../pages/SplashPage';

export default function Main(props) {
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


  return <main>
    {loggedIn ?
      hasPilot ? <HomePage /> : <NewPilotFlow />
      : <SplashPage />}
  </main>;
}
