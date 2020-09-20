import React from 'react';
import getImage from '../lib/getImage';

export default function CardOccupation(props) {
  const { info, choiceId, handleChange, field } = props;


  return <div className="card occupation-card">
    <input className="card-radio" id={info.name} type="radio" name={field} value={info.id}
      onChange={handleChange} checked={choiceId === info.id} />
    <label htmlFor={info.name}>
      {getImage(info.attitude)}
      {getImage(info.interests)}
      {getImage(info.structure)}
      {getImage(info.tactics)}
      <h3>{info.name}</h3>
    </label>
      <p>{info.description}</p>
  </div>;
}
