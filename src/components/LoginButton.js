import React from 'react';
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import { useSelector, useDispatch } from 'react-redux';
import { logOutUser } from '../actions';
import { useLogin } from '../hooks/useLogin';

export default function LoginButton() {
  const handleLogin = useLogin();
  const dispatch = useDispatch();

  const appId = useSelector((s) => s.appId);
  const loggedIn = useSelector((s) => s.loggedIn);

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
          onFailure={(res) => console.error('Login Error:', res)}
          cookiePolicy={'single_host_origin'}
          render={renderProps => (
            <button onClick={renderProps.onClick}>Login with Google</button>
          )}
        />}
    </div>
  );
}
