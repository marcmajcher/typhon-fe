import React from 'react';
import { useSelector } from 'react-redux';
import LoginButton from './LoginButton';
import './TopNav.css';

export default function TopNav() {
  const userInfo = useSelector(s => s.userInfo);

  return <nav className="top-nav">
    {/* <img class="logo-img" src="defense-satellite-green.png" alt="Typhon Station" /> */}
    <h1 class="title">TYPHON STATION</h1>
    {userInfo ?
        <img className="user-image" src={userInfo.imageUrl} alt="user" />
      : ''}
      <LoginButton />
  </nav>;
}
