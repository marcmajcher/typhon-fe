import React from 'react';

export default function GameNav(props) {
  function getMenuItem(text, fill = '-') {
    const columns = 24;
    const left = fill.repeat((columns - 4) / 2 - Math.floor(text.length / 2));
    const right = fill.repeat((columns - 4) / 2 - Math.ceil(text.length / 2));
    return `[ ${left} ${text.toUpperCase()} ${right} ]`;
  }

  return <div className="menu">
    {props.menuItems.map((item, index) =>
      <h2 key={item + index} className={index === props.index ? 'selected' : ''}
        onClick={() => props.handleClick(index)}>
        {getMenuItem(item, ( (index !== props.index) )? '-' : '>')}
      </h2>)}
  </div>;
}
