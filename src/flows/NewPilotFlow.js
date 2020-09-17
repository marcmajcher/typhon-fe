import React, { useState } from 'react';
import NewPilotStep1 from './NewPilotStep1';
import NewPilotStep2 from './NewPilotStep2';
import './NewPilotFlow.css';
import data from '../data/pilotData';

export default function NewPilotFlow() {
  const [pilotInfo, setPilotInfo] = useState({});
  const [step, setStep] = useState(0);

  const fields = ['species', 'occupation', 'gender', 'lineage', 'appearance', 'keepsake'];
  const trail = fields.filter(e => pilotInfo.hasOwnProperty(e)).map(e => data.getById(e, pilotInfo[e]).name).join(' > ');
  const steps = [
    <NewPilotStep1 species={data.species} setSpecies={species => setField('species', species)} nextStep={nextStep} />,
    <NewPilotStep2 occupations={data.bySpecies('occupation',pilotInfo.species)}
      setOccupation={occ => setField('occupation', occ)} nextStep={nextStep} previousStep={previousStep} />,
  ];

  function setField(field, value) {
    setPilotInfo({ ...pilotInfo, [field]: value });
  }

  function nextStep() {
    setStep(Math.min(step + 1, steps.length - 1));
  }

  function previousStep() {
    const newPilotInfo = { ...pilotInfo };
    delete newPilotInfo[fields[step]];
    setPilotInfo(newPilotInfo);
    setStep(Math.max(step - 1, 0));
  }


  return <div>
    <h2>Looks like you're new here. Let's get you a new pilot.</h2>

    <div><b>:: {trail}</b></div>

    {steps[step]}
  </div >;
}
