import React, { useState } from 'react';
import NewStep from './NewPilotSelectStep';
import NewPilotConfirm from './NewPilotConfirm';
import './NewPilotFlow.css';
import data from '../data/pilotData';

export default function NewPilotFlow() {
  const [pilotInfo, setPilotInfo] = useState({});
  const [step, setStep] = useState(0);
  const [done, setDone] = useState(false);

  const steps = [
    { infoField: 'species', dataField: 'species', label: 'Choose a Species' },
    { infoField: 'occupation', dataField: 'occupations', label: 'Select an Occupation' },
    { infoField: 'gender', dataField: 'genders', label: 'Choose a Gender' },
    { infoField: 'lineage', dataField: 'lineages', label: 'What is your Lineage?' },
    { infoField: 'appearance', dataField: 'appearances', label: 'Choose your Appearance' },
    { infoField: 'keepsake', dataField: 'keepsakes', label: 'Pick a personal Keepsake' },
  ];

  const trail = steps
    .filter(e => pilotInfo.hasOwnProperty(e.infoField))
    .map(e => data.getById(e.dataField, pilotInfo[e.infoField]).name)
    .join(' :: ');

  function setInfo(field, value) {
    setPilotInfo({ ...pilotInfo, [field]: value });
  }

  function nextStep() {
    setStep(Math.min(step + 1, steps.length - 1));
  }

  function previousStep() {
    const newPilotInfo = { ...pilotInfo };
    delete newPilotInfo[steps[step].infoField];
    setPilotInfo(newPilotInfo);
    setStep(Math.max(step - 1, 0));
  }

  function finish() {
    console.log("sending data to server")
  }

  return <div>
    {done ? <NewPilotConfirm pilotInfo={pilotInfo} pilotData={data} steps={steps} 
      goBack={() => setDone(false)} finish={finish} /> :
      <>
        <h2>Looks like you're new here. Let's get you a new pilot.</h2>
        <div><b>:: {trail}</b></div>
        <NewStep step={{ step, ...steps[step] }} data={data} pilotInfo={pilotInfo}
          nextStep={step < steps.length - 1 ? nextStep : () => setDone(true)} previousStep={previousStep} setInfo={setInfo} />
      </>}
  </div>;

}