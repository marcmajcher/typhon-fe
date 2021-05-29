import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import GameNav from '../components/GameNav';
import StatusInfo from '../components/StatusInfo';

import HangarScreen from './HangarScreen';
import StationScreen from './StationScreen';
import PilotScreen from './PilotScreen';
import ShipScreen from './ShipScreen';
import CargoScreen from './CargoScreen';
import JobsScreen from './JobsScreen';

import './HomePage.scss';

const fakeInfo = {
  xpToLevel: 1234567,
  nextLevel: 90,
  fuel: 172,
  maxFuel: 400,
  hullPoints: 4,
  maxHull: 17,
  credits: 1234567890,
  cargo: 14,
  maxCargo: 100
};

const mainMenuItems = [
  { name: 'station', screen: StationScreen, subMenu: true },
  { name: 'hangar', screen: HangarScreen, subMenu: true },
  { name: 'pilot', screen: PilotScreen, subMenu: false },
  { name: 'ship', screen: ShipScreen, subMenu: false },
  { name: 'cargo', screen: CargoScreen, subMenu: false },
  { name: 'jobs', screen: JobsScreen, subMenu: false }
];

export default function HomePage() {
  const pilotInfo = useSelector(s => s.pilotInfo);
  const [statusInfo] = useState(fakeInfo);
  const [mainNavIndex, setMainNavIndex] = useState(0);

  const Screen = mainMenuItems[mainNavIndex].screen;

  function setMainMenuItem(index) {
    setMainNavIndex(index);
  }

  return <div className="container-fluid page-home">
    <h1 className="welcome glow">Welcome to Typhon Station, {pilotInfo.name}!</h1>

    <div className="left-nav">
      <StatusInfo info={statusInfo} />
      <GameNav index={mainNavIndex} menuItems={mainMenuItems.map(item => item.name)}
        handleClick={setMainMenuItem} />
    </div>
    <div className="main-area">
      <Screen />
    </div>
  </div>;
}
