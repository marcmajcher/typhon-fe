import React from 'react';
import { useSelector } from 'react-redux';
import LoginButton from './LoginButton';
import './TopNav.scss';
import { useRoute } from '../hooks/useRoute';

export default function TopNav() {
  const userInfo = useSelector(s => s.userInfo);
  const clearMe = useRoute('/pilot/clearme');

  return <nav className="top-nav">
    <h1 className="title">TYPHON STATIONN</h1>
    {userInfo ?
      <img className="user-image" src={userInfo.imageUrl} alt="user" />
      : ''}
    <LoginButton />
    <span id="clearme" onClick={() => clearMe().then(res => console.info(res))}>.</span>
  </nav>;
}
