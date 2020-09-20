import React from 'react';
import Orbital from '../assets/orbital.svg';
import './Loading.scss';

export default function Loading() {

  return <div className="loading">
    <img className="loading-spinner" alt="spinning orbital" src={Orbital} />
    Loading...
  </div>;
}
