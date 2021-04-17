import React from 'react';
import { GoogleLogout } from 'react-google-login';

const clientId =
  '794363678933-27lpqhp3rr8mui0nqllau2kfncuf8bdk.apps.googleusercontent.com';

function Logout() {
  const onSuccess = () => {
    console.log('Logout made successfully');
    alert('Logout made successfully ✌');
  };

  return (
    <div>
      <GoogleLogout
        clientId={clientId}
        buttonText="Logout"
        onLogoutSuccess={onSuccess}
      ></GoogleLogout>
    </div>
  );
}

export default Logout;