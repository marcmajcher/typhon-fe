import React from 'react';
import getImage from '../lib/getImage';
import './CardNewShip.scss';

export default function CardNewShip(props) {

  const { ship, handleChange, choiceId } = props;
  console.log(ship);
  return <div className="card default-card container ship-card">
    <input className="card-radio" type="radio" id={ship.name} name="ship" value="ship.id"
      onChange={handleChange} checked={choiceId === ship.id} />
    <label htmlFor={ship.name} className="row">

      <div className="eight columns ship-name">
        <h3>{ship.name}</h3>
        <p className="ship-origin"> {getImage(ship.species)}{ship.origin}</p>
      </div>
      <div className="two columns ship-info attack ">
        <h5>Attack</h5>
        {getImage(ship.attack)}
        <p>{ship.attack}</p>
      </div>
      <div className="two columns ship-info defense">
        <h5>Defense</h5>
        {getImage(ship.defense)}
        <p>{ship.defense}</p>
      </div>
    </label>
  </div>;
}


