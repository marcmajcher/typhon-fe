import React from 'react';
// import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
// import { useRoute } from '../hooks/useRoute';
import './TestConsole.css';

export default function TestConsole() {
  const loggedIn = useSelector(s => s.loggedIn);
  const pilotInfo = useSelector(s => s.pilotInfo);
  // const userInfo = useSelector(s => s.userInfo);
  const shipInfo = useSelector(s => s.shipInfo);
  // const infoRoute = useRoute('/user/info');
  // const locRoute = useRoute('/loc');

  // const [data, setData] = useState({});
  // useEffect(() => {
    // locRoute().then(info => setData(info));
  // }, []); // eslint-disable-line react-hooks/exhaustive-deps
  // }, []); // eslint-disable-line react-hooks/exhaustive-deps

  function show(obj, label = 'Data') {
    return <li><pre>{label}: {JSON.stringify(obj, null, '\t')}</pre></li>;
  }
  return <div className="console">
    <div className="console-header"><b>Test Console</b></div>
    <ul>
      <li>Logged in: {loggedIn.toString()}</li>
      {/* {show(data)} */}
      {show(pilotInfo)}
      {show(shipInfo)}
    </ul>
  </div>;
}
