import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useRoute } from '../hooks/useRoute';
import CardNewShip from './CardNewShip';

export default function NewShipFlow() {
  const pilotInfo = useSelector(s => s.pilotInfo);
  const [choiceId, setChoiceId] = useState(0);
  const [shipInfo, setShipInfo] = useState([]);

  const route = `/data/ships/${pilotInfo.species}`;
  const shipRoute = useRoute(route);

  useEffect(() => {
    shipRoute().then(data => setShipInfo(data));
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  function handleChange(e) {
    setChoiceId(parseInt(e.target.value));
  }

  return <div className="center">
    <h2 className="header">Looks like you need a new ship! <button className={choiceId === 0 ? 'hidden' : ''}>GET IT!</button></h2>
    {shipInfo.map(ship => <CardNewShip key={ship.id} ship={ship} handleChange={handleChange} choiceId={choiceId} />)}
  </div>;
}
