import React from 'react';
import { useSelector } from 'react-redux';

export default function TestConsole() {
  const token = useSelector(s => s.token);
  return <div className="console">
    <div><b>Test Console</b></div>
    <ul><li>Token: {token}</li></ul>
  </div>;
}
