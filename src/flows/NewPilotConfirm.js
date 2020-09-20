import React, { useState } from 'react';

export default function NewPilotConfirm(props) {
  const [name, setName] = useState('');

  return <div>
    <h3>What's your name, pilot?</h3>
    <input type="text" name="pilot-name" value={name} onChange={e => setName(e.target.value)} />
    <ul>
      {props.steps.map(e =>
        <li key={e.field}>{e.field.toUpperCase()}: {props.pilotInfo[e.field].name}</li>
      )}
    </ul>
    <button onClick={props.goBack}>Go Back</button> 
    {name && <button onClick={() => props.finish(name)}>Looks Great!</button>}
  </div>;
}
