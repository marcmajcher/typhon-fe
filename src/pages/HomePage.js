import React from 'react';
import { useSelector } from 'react-redux';

export default function HomePage() {
  const pilotInfo = useSelector(s=> s.pilotInfo);

  return <div>    
    <h1>Welcome to Typhon Station, {pilotInfo.name}!</h1>
  </div>;
}
