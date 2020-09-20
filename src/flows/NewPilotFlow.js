import React, { useState } from 'react';
import NewStep from './NewPilotSelectStep';
import NewPilotConfirm from './NewPilotConfirm';
import './NewPilotFlow.scss';
import { useRoute } from '../hooks/useRoute';
import { setPilotInfo as dispatchPilotInfo } from '../actions';
import { useDispatch } from 'react-redux';
import useFlick from '../hooks/useFlick';

export default function NewPilotFlow() {
  const flick = useFlick();
  const [pilotInfo, setPilotInfo] = useState({});
  const [step, setStep] = useState(0);
  const [done, setDone] = useState(false);
  const dispatch = useDispatch();
  const createPilot = useRoute('/pilot', 'post');

  const steps = [
    { field: 'species', label: 'Choose a Species' },
    { field: 'occupation', label: 'Select an Occupation' },
    { field: 'gender', label: 'Choose a Gender' },
    { field: 'lineage', label: 'What is your Lineage?' },
    { field: 'appearance', label: 'Choose your Appearance' },
    { field: 'keepsake', label: 'Pick a personal Keepsake' },
  ];

  const trail = steps
    .filter(e => pilotInfo.hasOwnProperty(e.field))
    .map(e => pilotInfo[e.field].name)
    .join('::');

  function setInfo(data) {
    setPilotInfo({ ...pilotInfo, [data.field]: { id: data.id, name: data.name } });
  }

  function nextStep() {
    setStep(Math.min(step + 1, steps.length - 1));
  }

  function previousStep() {
    const newPilotInfo = { ...pilotInfo };
    delete newPilotInfo[steps[step].field];
    setPilotInfo(newPilotInfo);
    setStep(Math.max(step - 1, 0));
  }

  function finish(name) {
    const sendInfo = Object.keys(pilotInfo).reduce((a, c) => { a[c] = pilotInfo[c].id; return a; }, {});
    sendInfo.name = name;
    createPilot(sendInfo).then(res => dispatch(dispatchPilotInfo(res)));
  }

  return flick && <div>
    {done ?
      <NewPilotConfirm pilotInfo={pilotInfo} steps={steps}
        goBack={() => setDone(false)} finish={finish} /> :
      <>
        <h2 className="trail">PILOT::{trail || '[NONE]'}</h2>
        <h2 className="header">Looks like you're new here, friend. Let's find you a pilot.</h2>
        
        <NewStep step={{ step, ...steps[step] }} pilotInfo={pilotInfo}
          nextStep={step < steps.length - 1 ? nextStep : () => setDone(true)}
          previousStep={previousStep} setInfo={setInfo} />
      </>}
  </div>;

}
