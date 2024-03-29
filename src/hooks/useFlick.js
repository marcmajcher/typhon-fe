import { useEffect, useState } from 'react';

export default function useFlick(delay = 300) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const tid = setTimeout(() => setShow(true), delay);
    return () => { clearTimeout(tid); };
  }, []);  // eslint-disable-line react-hooks/exhaustive-deps

  return show;
}
