import React, { Component } from 'react'
import GoogleLogin from 'react-google-login'
import App from './App';
import './Todo.css';

export class Login extends Component {
    responseGoogle=(response)=>{
        console.log(response);
        console.log(response.profileObj);
    }
    render() {
        return (
            <div className="google_login">
                <GoogleLogin
                    clientId="794363678933-d8p55ogfbttjo9h9i1acssd4f2ssl4ko.apps.googleusercontent.com"
                    buttonText="Login"
                    onSuccess={<React.StrictMode>
                        <App/>
                      </React.StrictMode>}
                    onFailure={this.responseGoogle}
                    cookiePolicy={'single_host_origin'}
            />                
            </div>
        )
    }
}

export default Login


