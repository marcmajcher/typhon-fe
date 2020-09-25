import React from 'react';

const jumps = ['The ScrapYard', 'Varchi Belt', 'Something Else, Probably'];

export default function HangarScreen() {

  function getMenuItem(text, fill = '-') {
    const columns = 33;
    const left = fill.repeat((columns - 4) / 2 - Math.floor(text.length / 2));
    const right = fill.repeat((columns - 4) / 2 - Math.ceil(text.length / 2));
    return `[ ${left} ${text.toUpperCase()} ${right} ]`;
  }

  return <div>
    <div className="jump-menu">
      <h2 className="glow">[ ------- AVAILABLE JUMPS ------- ]</h2>
      {jumps.map(jump => <h2>{getMenuItem(jump)}</h2>)}
    </div>
    <div className="jump-destination">
      <h2>The Scrapyard</h2>
      <p>Here's a description of the area. It sounds super cool and you totally want to go there and fight space pirates or whatever and bring back a bunch of stuff to sell, right?</p>
      <div>
        <button>JUMP</button>
      </div>
    </div>
  </div>;
}
