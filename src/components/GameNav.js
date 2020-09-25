import React from 'react';
import menuMaker from '../lib/getMenuItem';

export default function GameNav(props) {
  const getMenuItem = menuMaker(30);

  return <div className="menu">
    {props.menuItems.map((item, index) =>
      <h2 key={item + index} className={index === props.index ? 'selected' : ''}
        onClick={() => props.handleClick(index)}>
        {getMenuItem(item, ( (index !== props.index) )? '-' : '>')}
      </h2>)}
  </div>;
}
