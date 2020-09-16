import React from 'react';
import { useSelector } from 'react-redux';
import LoginButton from './LoginButton';
import './TopNav.css';

export default function TopNav() {
  const userInfo = useSelector(s => s.userInfo);

  return <nav className="top-nav">
    <h1>Typhon Station</h1>
    {userInfo ?
        <img className="user-image" src={userInfo.imageUrl} alt="user" />
      : ''}
      <LoginButton />
  </nav>;
}
