import React from 'react';


export default function StatusInfo({pilotInfo, shipInfo}) {
  const { xpToLevel, nextLevel, credits} = {xpToLevel:100, nextLevel:2, credits: 0};//pilotInfo;
  const { fuel, maxFuel, hullPoints, maxHull, cargo, maxCargo } = shipInfo;

  return <ul>
    <li>{xpToLevel.toLocaleString()} XP to Level {nextLevel}</li>
    <li>Fuel Remaining: {fuel}/{maxFuel}</li>
    <li>Hull Points: {hullPoints}/{maxHull}</li>
    <li>{credits.toLocaleString()} Credits</li>
    <li>Cargo: {cargo}/{maxCargo}</li>
  </ul>
    ;
}
