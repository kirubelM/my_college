import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Login from './components/Login'
import Logout from './components/Logout'
import NavBar from './NavBar'

ReactDOM.render(
  <React.StrictMode>
    <App/>
    {/* <div className="App">
      <br></br>
      <Login />
      <br />
      <Logout />
    </div> */}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
