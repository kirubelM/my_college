import React from 'react';
import { useGoogleLogout } from 'react-google-login';

const clientId =
  '794363678933-27lpqhp3rr8mui0nqllau2kfncuf8bdk.apps.googleusercontent.com';

function LogoutHooks() {
  const onLogoutSuccess = (res) => {
    console.log('Logged out Success');
    alert('Logged out Successfully ✌');
  };

  const onFailure = () => {
    console.log('Handle failure cases');
  };

  const { signOut } = useGoogleLogout({
    clientId,
    onLogoutSuccess,
    onFailure,
  });

  return (
    <button onClick={signOut} className="button">
      <img src="icons/google.svg" alt="google login" className="icon"></img>

      <span className="buttonText">Sign out</span>
    </button>
  );
}

export default LogoutHooks;