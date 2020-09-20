import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { logInUser } from '../actions';

export function useLogin() {
  const endpoint = useSelector((s) => s.endpoint);
  const dispatch = useDispatch();

  return (info) => axios
    .post(`${endpoint}/user/auth`, {
      id_token: info.tokenObj.id_token,
      userData: info.profileObj,
    })
    .then((res) => dispatch(logInUser(info.profileObj, res.data.token)))
    .catch((err) => console.error(err));
}
