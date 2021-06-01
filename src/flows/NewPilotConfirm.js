import React, { useState } from 'react';

export default function NewPilotConfirm(props) {
  const [name, setName] = useState('');

  return <div className="pilot-confirm">
    <h3>What's your name, pilot?</h3>
    <input type="text" name="pilot-name" value={name} onChange={e => setName(e.target.value)} placeholder="Your name here" />
    <table>
      <tbody>
        {props.steps.map(e =>
          <tr key={e.field}>
            <td> {e.field.toUpperCase()}: </td>
            <td>{props.pilotInfo[e.field].name}</td>
          </tr>
        )}
      </tbody>
    </table>
    <button onClick={props.goBack}>Go Back</button>{' '}
    {<button className={name ? '' : 'hidden'} onClick={() => props.finish(name)}>Looks Great!</button>}
  </div>;
}
