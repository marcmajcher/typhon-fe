import React from 'react';
import { useSelector } from 'react-redux';

export default function HomePage() {
  const userInfo = useSelector(s => s.userInfo);

  return <div>    
    <h1>Welcome to Typhon Station, {userInfo.firstName}!</h1>
  </div>;
}
