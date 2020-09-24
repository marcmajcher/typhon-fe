import React from 'react';
import { useSelector } from 'react-redux';
import './HomePage.scss';

function getMenuItem(text) {
  const columns = 24;
  const left = '-'.repeat((columns - 4) / 2 - Math.floor(text.length/2));
  const right = '-'.repeat((columns - 4) / 2 - Math.ceil(text.length/2));
  return `[ ${left} ${text.toUpperCase()} ${right} ]`;
}

export default function HomePage() {
  const pilotInfo = useSelector(s => s.pilotInfo);

  return <div className="container-fluid page-home">
    <h1 className="welcome glow">Welcome to Typhon Station, {pilotInfo.name}!</h1>

    <div className="row">

      <div className="column leftcol">
        <ul>
          <li>4,123,456 XP to Level 90</li>
          <li>Fuel Remaining: 100</li>
          <li>Hull Points: 4/17</li>
          <li>12345 Credits</li>
          <li>Cargo: 14/100</li>
        </ul>

        <h2 className="selected">{getMenuItem('main')}</h2>
        <h2>{getMenuItem('pilot')}</h2>
        <h2>{getMenuItem('ship')}</h2>
        <h2>{getMenuItem('cargo')}</h2>
        <h2>{getMenuItem('jobs')}</h2>
      </div>

      <div className="column midcol">
      <h2>{getMenuItem('weapons')}</h2>
      <h2>{getMenuItem('defense')}</h2>
      <h2>{getMenuItem('accessories')}</h2>
      <h2>{getMenuItem('skillware')}</h2>
      <h2>{getMenuItem('shipyard')}</h2>
      <h2>{getMenuItem('shärrzhäsh')}</h2>

      <h2>{getMenuItem('bar')}</h2>
      <h2>{getMenuItem('jobs')}</h2>
      <h2>{getMenuItem('news')}</h2>
      <h2>{getMenuItem('rankings')}</h2>

      </div>

      <div className="column maincol">
        <h2>[ ---- AVAILABLE JUMPS ---- ]</h2>
        <h2>[ The Scrapyard ]</h2>
        <h2>[ Varchi Belt ]</h2>
      </div>

      <div>
        <h2>Jump description and <button>GO</button> button</h2>
      </div>

    </div>

  </div>;
}
