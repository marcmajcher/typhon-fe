import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useRoute } from '../hooks/useRoute';
import './TestConsole.css';

export default function TestConsole() {
  const pilotInfo = useSelector(s => s.pilotInfo);
  const loggedIn = useSelector(s => s.loggedIn);

  const [species, setSpecies] = useState([]);
  const [ships, setShips] = useState([])
  const speciesRoute = useRoute('/data/species');
  const genderRoute = useRoute('/data/ships/1');

  useEffect(() => {
    speciesRoute().then(s => setSpecies(s));
    genderRoute().then(g => setShips(g))
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return <div className="console">
    <div className="console-header"><b>Test Console</b></div>
    <ul>
      <li>Logged in: {loggedIn.toString()}</li>
      <li><pre>PilotInfo: {JSON.stringify(pilotInfo, null, '\t')}</pre></li>
      <li><pre>Species: {JSON.stringify(species, null, '\t')}</pre></li>
      <li><pre>Ships: {JSON.stringify(ships, null, '\t')}</pre></li>
    </ul>
  </div>;
}
