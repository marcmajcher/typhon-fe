import React from 'react';
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { logInUser, logOutUser } from '../actions';

export default function LoginButton() {
  const dispatch = useDispatch();
  const appId = useSelector((s) => s.appId);
  const endpoint = useSelector((s) => s.endpoint);
  const loggedIn = useSelector((s) => s.loggedIn);

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
