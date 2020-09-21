import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRoute } from '../hooks/useRoute';
import CardNewShip from './CardNewShip';
import { setShipInfo } from '../actions';

export default function NewShipFlow() {
  const dispatch = useDispatch();
  const pilotInfo = useSelector(s => s.pilotInfo);
  const [choiceId, setChoiceId] = useState(0);
  const [shipInfo, setShipData] = useState([]);

  const shipDataRoute = useRoute(`/data/ships/${pilotInfo.species}`);
  const newShipRoute = useRoute('/ship', 'post');

  useEffect(() => {
    shipDataRoute().then(data => setShipData(data));
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  function handleChange(e) {
    setChoiceId(parseInt(e.target.value));
  }

  function setPlayerShipInfo() {
    newShipRoute({ shipId: choiceId }).then(res => dispatch(setShipInfo(res)));
  }

  return <div className="center">
    <h2 className="header">Looks like you need a new ship!{' '}
      <button onClick={setPlayerShipInfo} className={choiceId === 0 ? 'hidden' : ''}>GET IT!</button></h2>
    {shipInfo.map(ship => <CardNewShip key={ship.id} ship={ship} handleChange={handleChange} choiceId={choiceId} />)}
  </div>;
}
