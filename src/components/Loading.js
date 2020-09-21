import React from 'react';
import './Loading.scss';

export default function Loading() {

  return <div className="loading">
    <img className="loading-spinner" alt="spinning orbital" src="/img/orbital.svg" />
  </div>;
}
