import React from 'react';
import './Main.css';

export default function Main(props) {

  // useEffect(() => {
  //   if (token) {
  //     const authHeaders = {
  //       headers: {
  //         Authorization: `Bearer ${token}`
  //       }
  //     };
  //     axios(`${endpoint}/users`, authHeaders).then(res => {
  //       setUserList(res.data);
  //     });
  //   }
  // }, [token]); // eslint-disable-line react-hooks/exhaustive-deps

  return <main>
    {props.children}
  </main>;
}
