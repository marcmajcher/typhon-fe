import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
import './TestConsole.css';

export default function TestConsole() {
  const token = useSelector(s => s.token);
  // const userInfo = useSelector(s => s.userInfo);
  // const loggedIn = useSelector(s => s.loggedIn);
  const endpoint = useSelector(s => s.endpoint);

  const [species, setSpecies] = useState([]);
  const [occupations, setOccupations] = useState([]);

  function getUrl(route, cb) {
    if (token) {
      const authHeaders = { headers: { Authorization: `Bearer ${token}` } };
      axios(`${endpoint}${route}`, authHeaders).then(res => cb(res.data));
    }
  }

  useEffect(() => {
    getUrl('/data/species', s => setSpecies(s));
    getUrl('/data/occupation/1', o => setOccupations(o));
  }, [token]); // eslint-disable-line react-hooks/exhaustive-deps

  return <div className="console">
    <div className="console-header"><b>Test Console</b></div>
    <ul>
      {/* <li>LoggedIn: {loggedIn}</li>
      <li>Token: {token}</li>
      <li>UserInfo: {JSON.stringify(userInfo)}</li> */}
      <li>Species: {JSON.stringify(species)}</li>
      <li>Occupations: {JSON.stringify(occupations)}</li>
    </ul>
  </div>;
}
