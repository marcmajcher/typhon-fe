import React, { useEffect, useState } from 'react';
import { useRoute } from '../hooks/useRoute';

export default function NewPilotSelectStep(props) {
  const { step, field, label } = props.step;
  const { pilotInfo, previousStep, nextStep, setInfo } = props;

  const [choiceId, setChoiceId] = useState(0);
  const [data, setData] = useState([]);

  const route = `/data/${field}${field !== 'species' ? `/${pilotInfo.species.id}` : ''}`;
  const dataRoute = useRoute(route);

  useEffect(() => {
    pilotInfo[field] && setChoiceId(parseInt(pilotInfo[field].id));
    dataRoute(res => setData(res));
  }, [field]); // eslint-disable-line react-hooks/exhaustive-deps

  function handleChange(e) {
    const id = parseInt(e.target.value);
    setChoiceId(id);
    setInfo({ field, id, name: data.find(e => e.id === id).name });
  }

  return <div>
    <h4>{label}</h4>
    <ul>
      {data.map(e => <li key={`${e.id}-${e.name}`}>
        <label htmlFor={e.name}>
          <input id={e.name} type="radio" name={field} value={e.id} onChange={handleChange} checked={choiceId === e.id} />
          {' '}{e.name}
        </label>
      </li>)}
    </ul>
    <div>
      {step !== 0 ? <button onClick={previousStep}>&lt; Previous Step</button> : ''}
      {choiceId !== 0 ? <button onClick={() => { nextStep(); setChoiceId(0); }}>Next Step &gt;</button> : ''}
    </div>
  </div>;
}
