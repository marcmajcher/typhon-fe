import React, { useState } from 'react';
import GameNav from '../components/GameNav';



const subMenuItems = [
  { name: 'concourse', screen: null, subMenu: false },
  { name: 'weapons', screen: null, subMenu: true },
  { name: 'defense', screen: null, subMenu: true },
  { name: 'accessories', screen: null, subMenu: true },
  { name: 'skillware', screen: null, subMenu: true },
  { name: 'shipyard', screen: null, subMenu: true },
  { name: 'shärrzhäsh', screen: null, subMenu: true },
  { name: 'cantina', screen: null, subMenu: true },
  { name: 'jobs', screen: null, subMenu: true },
  { name: 'news', screen: null, subMenu: true },
  { name: 'rankings', screen: null, subMenu: true },
];

export default function StationScreen() {
  const [subMenuIndex, setSubMenuIndex] = useState(0);

  function setSubMenuItem(index) {
    setSubMenuIndex(index);
  }

  return <div className="column station-nav">
    <GameNav index={subMenuIndex} menuItems={subMenuItems.map(item => item.name)}
      handleClick={setSubMenuItem} />
  </div>;
}

