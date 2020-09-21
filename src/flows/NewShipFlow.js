import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useRoute } from '../hooks/useRoute';
import CardNewShip from './CardNewShip'

export default function NewShipFlow() {
  const pilotInfo = useSelector(s => s.pilotInfo);
  const [choiceId, setChoiceId] = useState(0);
  const [shipInfo, setShipInfo] = useState([]);

  const route = `/data/ships/${pilotInfo.species}`;
  const shipRoute = useRoute(route);

  useEffect(() => {
    shipRoute().then(data => setShipInfo(data));
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  function handleChange() {

  }

  return <div>
    <h2 className="header">Looks like you need a new ship. I've got just the thing:</h2>

    {shipInfo.map(ship => <CardNewShip key={ship.id} ship={ship} handleChange={handleChange} choiceId={choiceId} />)}


  </div>;
}
