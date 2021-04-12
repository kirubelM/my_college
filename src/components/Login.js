import React from 'react';
import App from '../App'
import { GoogleLogin } from 'react-google-login';
// refresh token
import Logout from '../components/Logout'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';                                                                                         
import { refreshTokenSetup } from '../utils/refreshToken';
import { Switch, Route, Redirect, useHistory } from 'react-router-dom'
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";

const clientId =
  '794363678933-27lpqhp3rr8mui0nqllau2kfncuf8bdk.apps.googleusercontent.com';


function Login() {
  const history = useHistory();

  const onSuccess = (res) => {
    console.log('Login Success: currentUser:', res.profileObj);
    alert(
      `Logged in successfully welcome ${res.profileObj.name} 👋. `
    );
    refreshTokenSetup(res);
  
        history.push('/')

  };

  const onFailure = (res) => {
    console.log('Login failed: res:', res);
    alert(
      `Failed to login. Try Again!😢`
    );
  };


  return (
    <div >
       <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h5" >
            My College App
          </Typography>
          <Button onClick={Logout} color="inherit">Log out</Button>
        </Toolbar>
      </AppBar>
      <button onClick={() => history.push('/App') } >Go to home</button>
      <GoogleLogin
        clientId={clientId}
        buttonText=" Login "
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