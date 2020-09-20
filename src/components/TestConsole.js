import React, { useEffect, useState } from 'react';
import {useRoute} from '../hooks/useRoute';
import './TestConsole.css';

export default function TestConsole() {
  // const userInfo = useSelector(s => s.userInfo);
  // const loggedIn = useSelector(s => s.loggedIn);

  const [species, setSpecies] = useState([]);
  const [occupations, setOccupations] = useState([]);

  const speciesRoute = useRoute('/data/species');
  const occRoute = useRoute('/data/occupation/1');

  useEffect(() => {
    speciesRoute(s => setSpecies(s));
    occRoute(o => setOccupations(o));
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return <div className="console">
    <div className="console-header"><b>Test Console</b></div>
    <ul>
      {/* <li>LoggedIn: {loggedIn}</li>
      <li>Token: {token}</li>
      <li>UserInfo: {JSON.stringify(userInfo)}</li> */}
      <li><pre>Species: {JSON.stringify(species, null, '\t')}</pre></li>
      <li><pre>Occupations: {JSON.stringify(occupations, null, '\t')}</pre></li>
    </ul>
  </div>;
}
