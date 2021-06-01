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
  const shipInfo = useSelector(s => s.shipInfo);
  const [mainNavIndex, setMainNavIndex] = useState(0);

  const Screen = mainMenuItems[mainNavIndex].screen;

  function setMainMenuItem(index) {
    setMainNavIndex(index);
  }

  return <div className="container-fluid page-home">
    <h1 className="welcome glow">Welcome to Typhon Station, {pilotInfo.name}!</h1>

    <div className="left-nav">
      <StatusInfo pilotInfo={pilotInfo} shipInfo={shipInfo} />
      <GameNav index={mainNavIndex} menuItems={mainMenuItems.map(item => item.name)}
        handleClick={setMainMenuItem} />
    </div>
    <div className="main-area">
      <Screen />
    </div>
  </div>;
}
