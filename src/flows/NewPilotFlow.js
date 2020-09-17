import React, { useState } from 'react';
import NewPilotStep1 from './NewPilotStep1';
import NewPilotStep2 from './NewPilotStep2';
import './NewPilotFlow.css';
import pilotData from '../data/pilotData';

export default function NewPilotFlow() {
  const [pilotInfo, setPilotInfo] = useState({});
  const [step, setStep] = useState(0);
  const [trail, setTrail] = useState([]);

  const steps = [
    <NewPilotStep1 species={Object.values(pilotData.species)}
      setSpecies={setSpecies} nextStep={nextStep} />,
    <NewPilotStep2 occupations={pilotData.species[pilotInfo.species].occupations.map(o => pilotData.occupations[o])}
      setOccupation={setOccupation} nextStep={nextStep} previousStep={previousStep} />,
  ];

  function setSpecies(speciesId) {
    setPilotInfo({ ...pilotInfo, speciesId });
    setTrail([pilotData.species[speciesId].name]);
  }

  function setOccupation(occupationId) {
    setPilotInfo({ ...pilotInfo, occupationId });
    setTrail([
      pilotData.species[pilotInfo.species].name,
      pilotData.occupation[pilotInfo.occupation].name,
    ]);
  }

  function nextStep() {
    setStep(Math.min(step + 1, steps.length - 1));
  }
  function previousStep() {
    setStep(Math.max(step - 1, 0));
  }

  return <div>
    <h2>Looks like you're new here. Let's get you a new pilot.</h2>

    <div><b>:: {trail.join(' > ')}</b></div>

    {steps[step]}
  </div >;
}
