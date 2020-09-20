import React from 'react';

export default function CardDefault(props) {
  const { info, choiceId, handleChange, field } = props;

  return <div className="card default-card">
    <input className="card-radio" type="radio" id={info.name} name={field} value={info.id}
      onChange={handleChange} checked={choiceId === info.id} />
    <label htmlFor={info.name}>
      <h3>{info.name}</h3>
    </label>
  </div>;
}
