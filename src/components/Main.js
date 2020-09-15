import React from 'react';
import { useSelector } from 'react-redux';
// import axios from 'axios';

export default function Main() {
  const token = useSelector(s => s.token);
  const userInfo = useSelector(s => s.userInfo);
  // const endpoint = useSelector(s => s.endpoint);
  const loggedIn = useSelector(s => s.loggedIn);
  // const [userList, setUserList] = useState([]);

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
    <h1>Main Page</h1>
    <ul>
      <li>LoggedIn: {loggedIn.toString()}</li>
      <li>Token: {token}</li>
      <li>UserInfo: {JSON.stringify(userInfo)}</li>
      {/* <li>Users: {JSON.stringify(userList)}</li> */}
    </ul>
  </main>;
}
