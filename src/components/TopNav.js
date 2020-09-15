import React from 'react';
import { useSelector } from 'react-redux';
import LoginButton from './LoginButton';

export default function TopNav() {
  const userInfo = useSelector(s => s.userInfo);

  return <div className="top-nav">
    <h1>Typhon Station</h1>
    <LoginButton />
    {userInfo ?
      <p>
        <img className="user-image" src={userInfo.imageUrl} alt="user" />
        Wassup, {userInfo.firstName}?
      </p>
      : <p> Please log in.</p>}
  </div>;
}
