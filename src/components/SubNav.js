import React from 'react';

function getMenuItem(text) {
  const columns = 24;
  const left = '-'.repeat((columns - 4) / 2 - Math.floor(text.length / 2));
  const right = '-'.repeat((columns - 4) / 2 - Math.ceil(text.length / 2));
  return `[ ${left} ${text.toUpperCase()} ${right} ]`;
}


export default function SubNav() {
  return <div className="column midcol">
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
    ;
}
