import React, { useEffect } from 'react';
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { logInUser, logOutUser, setUserInfo } from '../actions';

export default function LoginButton() {
  const dispatch = useDispatch();
  const appId = useSelector((s) => s.appId);
  const endpoint = useSelector((s) => s.endpoint);
  const loggedIn = useSelector((s) => s.loggedIn);
  const token = useSelector((s) => s.token);

  useEffect(() => {
    if (token) {
      axios
        .post(`${endpoint}/users/verify`, { token })
        .then((response) => dispatch(setUserInfo(response.data)))
        .catch(() => dispatch(logOutUser()));
    }
  }, [token]); // eslint-disable-line react-hooks/exhaustive-deps

  function handleLogin(info) {
    console.log('handleLogin info:',info)
    axios
      .post(`${endpoint}/users/auth`, {
        id_token: info.tokenObj.id_token,
        userData: info.profileObj,
      })
      .then((res) => dispatch(logInUser(info.profileObj, res.data.token)))
      .catch((err) => console.error(err));
  }

  return (
    <div className="button-login">
      {loggedIn ?
        <GoogleLogout
          clientId={appId}
          buttonText="Logout"
          onLogoutSuccess={() => dispatch(logOutUser())}
          render={renderProps => (
            <button onClick={renderProps.onClick}>Logout</button>
          )}
        ></GoogleLogout> :
        <GoogleLogin
          clientId={appId}
          onSuccess={(res) => handleLogin(res)}
          onFailure={(res) => console.error(`Login Error: ${res}`)}
          cookiePolicy={'single_host_origin'}
          render={renderProps => (
            <button onClick={renderProps.onClick}>Login with Google</button>
          )}
        />}
    </div>
  );
}
