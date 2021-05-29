import React from 'react';


export default function StatusInfo({ info }) {
  const { xpToLevel, nextLevel, fuel, maxFuel, hullPoints, maxHull, credits, cargo, maxCargo } = info;

  return <ul>
    <li>{xpToLevel.toLocaleString()} XP to Level {nextLevel}</li>
    <li>Fuel Remaining: {fuel}/{maxFuel}</li>
    <li>Hull Points: {hullPoints}/{maxHull}</li>
    <li>{credits.toLocaleString()} Credits</li>
    <li>Cargo: {cargo}/{maxCargo}</li>
  </ul>;
}
