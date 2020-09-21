import React from 'react';
import { useSelector } from 'react-redux';
// import { useRoute } from '../hooks/useRoute';
import './TestConsole.css';

export default function TestConsole() {
  const loggedIn = useSelector(s => s.loggedIn);
  const pilotInfo = useSelector(s => s.pilotInfo);
  const userInfo = useSelector(s => s.userInfo);
  const shipInfo = useSelector(s => s.shipInfo);
  // const infoRoute = useRoute('/user/info');

  // const [data, setData] = useState({});
  // useEffect(() => {
  //   infoRoute().then(info => setData(info));
  // }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return <div className="console">
    <div className="console-header"><b>Test Console</b></div>
    <ul>
      <li>Logged in: {loggedIn.toString()}</li>
      {/* <li><pre>Info: {JSON.stringify(data, null, '\t')}</pre></li> */}
      <li><pre>UserInfo: {JSON.stringify(userInfo, null, '\t')}</pre></li>
      <li><pre>PilotInfo: {JSON.stringify(pilotInfo, null, '\t')}</pre></li>
      <li><pre>ShipInfo: {JSON.stringify(shipInfo, null, '\t')}</pre></li>
    </ul>
  </div>;
}
