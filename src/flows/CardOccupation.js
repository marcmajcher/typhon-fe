import React from 'react';
import getImage from '../lib/getImage';

export default function CardOccupation(props) {
  const { info, choiceId, handleChange, field } = props;

  console.log(info);
  
  return <div className="species-card">
    <input className="card-radio" id={info.name} type="radio" name={field} value={info.id}
      onChange={handleChange} checked={choiceId === info.id} />
    <label htmlFor={info.name}>
      {getImage(info.name.toLowerCase())}
      <h3>{info.name}</h3>
      <p>
        {info.description}
      </p>
    </label>
  </div>;
}
