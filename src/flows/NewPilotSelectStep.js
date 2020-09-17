import React, { useState } from 'react';

export default function NewPilotSelectStep(props) {
  const [choiceId, setChoiceId] = useState(0);

  const { step, infoField, dataField, label } = props.step;
  const { data, pilotInfo, previousStep, nextStep, setInfo } = props;

  function handleChange(e) {
    setChoiceId(e.target.value);
    setInfo(infoField, e.target.value);
  }

  const choices = dataField === 'species' ? data.species : data.bySpecies(dataField, pilotInfo.species);

  return <div>
    <h4>{label}</h4>
    <ul>
      {choices.map(e => <li key={`${e.id}-${e.name}`}>
        <label htmlFor={e.name}>
          <input id={e.name} type="radio" name={infoField} value={e.id} onChange={handleChange} />
          {' '}{e.name}
        </label>
      </li>)}
    </ul>
    <div>
      {step !== 0 ? <button onClick={previousStep}>&lt; Previous Step</button> : ''}
      {choiceId !== 0 ? <button onClick={nextStep}>Next Step &gt;</button> : ''}
    </div>
  </div>;
}
