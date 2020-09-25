import React from 'react';
import getImage from '../lib/getImage';

export default function JumpDestination(props) {
  const { name, minLevel, maxLevel, description, id } = props.location;

  return id ? <div className="jump-destination">
    {getImage(id, 'destination-image')}
    <h2>{name}</h2>
    <p>{description}</p>
    <p>Levels {minLevel}-{maxLevel}</p>
    <div>
      <button>JUMP</button>
    </div>
  </div>
  : ''
}
