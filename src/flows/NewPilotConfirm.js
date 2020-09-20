import React from 'react';

export default function NewPilotConfirm(props) {
  return <div>
    <h3>How does this look?</h3>
    <ul>
      {props.steps.map(e =>
        <li key={e.field}>{e.field.toUpperCase()}: {props.pilotInfo[e.field].name}</li>
      )}
    </ul>
    <button onClick={props.goBack}>Go Back</button> <button onClick={props.finish}>Looks Great!</button>
  </div>;
}
