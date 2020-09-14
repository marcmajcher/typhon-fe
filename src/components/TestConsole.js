import React from 'react';
import { useSelector } from 'react-redux';

export default function TestConsole() {
  // const token = useSelector(s => s.token);
  const userInfo = useSelector(s => s.userInfo);

  return <div className="console">
    <div><b>Test Console</b></div>
    <ul>
      {/* < li>Token: {token}</li> */}
      <li>UserInfo: {JSON.stringify(userInfo)}</li>
    </ul>
  </div>;
}
