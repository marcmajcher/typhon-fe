import React from 'react';

export default function NewPilotConfirm(props) {
  return <div>
    <h3>How does this look?</h3>
    <ul>
      {props.steps.map(e =>
        <li key={e.infoField}>{e.infoField.toUpperCase()}: {props.pilotData.getById(e.dataField, props.pilotInfo[e.infoField]).name}</li>
      )}
    </ul>
    <button onClick={props.goBack}>Go Back</button> <button onClick={props.finish}>Looks Great!</button>
  </div>;
}
