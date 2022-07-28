import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";


import { BrowserRouter , Redirect } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/css/animate.min.css";
import "../assets/sass/light-bootstrap-dashboard-react.scss?v=1.3.0";
import "../assets/css/demo.css";
import "../assets/css/pe-icon-7-stroke.css";

import UserLayout from "./User";

class Dashboard extends Component {

    constructor(props) {
        super(props);
      }

      render() {
        return(
                
    <BrowserRouter>
    <Switch>
        <Route path="/user" render={props => <UserLayout {...props} />} />
        <Redirect from="/" to="/user/dashboard" />
    </Switch>
</BrowserRouter>

        );
    
    }

}

export default Dashboard;
