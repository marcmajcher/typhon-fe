import { useSelector } from 'react-redux';
import axios from 'axios';

export function useRoute(route, method = 'get') {
  const token = useSelector(s => s.token);
  const endpoint = useSelector(s => s.endpoint);

  if (token) {
    return (data) => new Promise(resolve => axios({
      method,
      data,
      url: `${endpoint}${route}`,
      headers: {
        Authorization: `Bearer ${token}`
      },
    })
      .then(res => resolve(res.data))
      .catch(err => console.error(`Error: ${err}`)));
  }
}
