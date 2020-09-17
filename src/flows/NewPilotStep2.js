import React, { useState } from 'react';

export default function NewPilotStep2(props) {
  const [occupationId, setOccupationId] = useState(0);

  function handleChange(e) {
    setOccupationId(e.target.value);
      props.setOccupation(e.target.value);
  }

  return <div>
    <h4>Choose your species:</h4>
    <ul>{props.occupations.map(o =>
      <li key={o.id}><label htmlFor={o.name}>
        <input id={o.name} type="radio" name="occupation" value={o.id} onChange={handleChange} /> {o.name}
      </label></li>
    )}
    </ul>
    {occupationId !== 0 ? <div>
    <button onClick={props.previousStep}>&lt; Previous Step</button> <button onClick={props.nextStep}>Next Step &gt;</button>
     </div> : ''}
  </div>;
}
