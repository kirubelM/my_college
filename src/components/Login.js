import React from 'react';
import App from '../App'
import { GoogleLogin } from 'react-google-login';
// refresh token
import { refreshTokenSetup } from '../utils/refreshToken';
import { Switch, Route, Redirect } from 'react-router-dom'

const clientId =
  '794363678933-27lpqhp3rr8mui0nqllau2kfncuf8bdk.apps.googleusercontent.com';

function Login() {
  const onSuccess = (res) => {
    console.log('Login Success: currentUser:', res.profileObj);
    alert(
      `Logged in successfully welcome ${res.profileObj.name} 👋. `
    );
    <App/>

    refreshTokenSetup(res);

  };

  const onFailure = (res) => {
    console.log('Login failed: res:', res);
    alert(
      `Failed to login. Try Again!😢`
    );
  };

  return (
    <div>
      <GoogleLogin
        clientId={clientId}
        buttonText="Login"
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={'single_host_origin'}
        style={{ marginTop: '100px' }}
        isSignedIn={true}
      />
    </div>
  );
}

export default Login;