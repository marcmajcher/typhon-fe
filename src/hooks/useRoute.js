import { useSelector } from 'react-redux';
import axios from 'axios';

export function useRoute(route, method = 'get') {
  const token = useSelector(s => s.token);
  const endpoint = useSelector(s => s.endpoint);

  if (token) {
    return (cb, data) => axios({
      method,
      data,
      url: `${endpoint}${route}`,
      headers: {
        Authorization: `Bearer ${token}`
      },
    })
      .then(res => cb(res.data))
      .catch(err => console.log(`Error: ${err}`));
  }
}
