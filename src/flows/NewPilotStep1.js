import React, { useState } from 'react';

export default function NewPilotStep1(props) {
  const [speciesId, setSpeciesId] = useState(0);

  function handleChange(e) {
    setSpeciesId(e.target.value);
    props.setSpecies(e.target.value);
  }

  return <div>
    <h4>Choose your species:</h4>
    <ul>{props.species.map(s =>
      <li key={s.id}><label htmlFor={s.name}>
        <input id={s.name} type="radio" name="species" value={s.id} onChange={handleChange} /> {s.name}
        </label></li>
    )}
    </ul>
    {speciesId !== 0 ? <button onClick={props.nextStep}>Next Step &gt;</button> : ''}
  </div>;
}
