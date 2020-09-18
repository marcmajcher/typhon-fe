import React from 'react';
import { useSelector } from 'react-redux';
import './TestConsole.css'

export default function TestConsole() {
  const token = useSelector(s => s.token);
  const userInfo = useSelector(s => s.userInfo);
  const loggedIn = useSelector(s => s.loggedIn);

  return <div className="console">
    <div className="console-header"><b>Test Console</b></div>
    <ul>
      <li>LoggedIn: {loggedIn}</li>
      <li>Token: {token}</li>
      <li>UserInfo: {JSON.stringify(userInfo)}</li>
    </ul>
  </div>;
}
