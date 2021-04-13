import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AddData from './AddData';
import Login from './components/Login';
function RouteConfig(props) {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          
          <Route exact path="/adddata" component={AddData} />
         
        </Switch>
      </Router>
    </div>
  );
}
export default RouteConfig;