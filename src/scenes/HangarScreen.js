import React, { useEffect, useState } from 'react';
import JumpDestination from '../components/JumpDestination';
import { useRoute } from '../hooks/useRoute';

export default function HangarScreen() {
  const [loaded, setLoaded] = useState(false);
  const [jumps, setJumps] = useState([]);
  const [location, setLocation] = useState({});
  const jumpRoute = useRoute('/loc');

  useEffect(() => {
    jumpRoute().then(res => {
      setJumps(res);
      setLoaded(true);
    });
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  function getMenuItem(text, fill = '-') {
    const columns = 33;
    const left = fill.repeat((columns - 4) / 2 - Math.floor(text.length / 2));
    const right = fill.repeat((columns - 4) / 2 - Math.ceil(text.length / 2));
    return `[ ${left} ${text.toUpperCase()} ${right} ]`;
  }

  return loaded && <div>
    <div className="menu jump-menu">
      <h2 className="glow">[ ------- AVAILABLE JUMPS ------ ]</h2>
      {jumps.map(jump => <h2 key={jump.id} className={jump.id === location.id ? 'selected' : ''}
        onClick={() => setLocation(jump)}>{getMenuItem(jump.name)}</h2>)}
    </div>
    <JumpDestination location={location} />
  </div>;
}
