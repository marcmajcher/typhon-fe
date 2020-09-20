import React, { useEffect, useState } from 'react';
import { useRoute } from '../hooks/useRoute';
import CardSpecies from './CardSpecies';

export default function NewPilotSelectStep(props) {
  const { step, field, label } = props.step;
  const { pilotInfo, previousStep, nextStep, setInfo } = props;

  const [choiceId, setChoiceId] = useState(0);
  const [data, setData] = useState([]);

  const route = `/data/${field}${field !== 'species' ? `/${pilotInfo.species.id}` : ''}`;
  const dataRoute = useRoute(route);

  const Card = CardSpecies;

  useEffect(() => {
    pilotInfo[field] && setChoiceId(parseInt(pilotInfo[field].id));
    dataRoute().then(res => setData(res));
  }, [field]); // eslint-disable-line react-hooks/exhaustive-deps

  function handleChange(e) {
    const id = parseInt(e.target.value);
    setChoiceId(id);
    setInfo({ field, id, name: data.find(e => e.id === id).name });
  }

  return <div className="center">
    <h3 className="label">{label}</h3>
    {data.map(e => <Card key={`${e.id}-${e.name}`} info={e}
      handleChange={handleChange} choiceId={choiceId} field={field} />)}
    <div>

      <button className={step === 0 ? 'hidden' : ''} onClick={previousStep}>&lt; Previous Step</button>{' '}
      <button className={choiceId === 0 ? 'hidden' : ''} onClick={() => { nextStep(); setChoiceId(0); }}>Next Step &gt;</button>
    </div>
  </div>;
}
