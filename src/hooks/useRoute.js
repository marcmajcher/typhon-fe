import { useSelector } from 'react-redux';
import axios from 'axios';

export function useRoute(route) {
  const token = useSelector(s => s.token);
  const endpoint = useSelector(s => s.endpoint);

  if (token) {
    return (cb) => axios(`${endpoint}${route}`, { headers: { Authorization: `Bearer ${token}` } }).then(res => cb(res.data));
  }
}
