import React from 'react';

import ReactDOM from 'react-dom';

import './index.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './home';
import RegisterCustomer from './register';
import CustomerLogin from './login';
import Customer from './customer';
import CustomerDashboard from './customer_dashboard';
import TrackShipment from './track_shipment';
import AddShipment from './add_shipment';
import CustomerProfile from './customer_profile';
import ViewBids from './view_bids';
import ServiceProvider from './service_provider';
import SPLogin from './login_sp';
import RegisterSP from './register_sp';
import * as serviceWorker from './serviceWorker';

ReactDOM.render((
  <Router>
    <Route exact path="/home" component={Home} />
    <Route exact path="/customer/signup" component={RegisterCustomer} />
    <Route exact path="/customer" component={Customer} />
    <Route exact path="/customer/login" component={CustomerLogin} />
    <Route exact path="/customer/dashboard" component={CustomerDashboard} />
    <Route exact path="/customer/add_shipment" component={AddShipment} />
    <Route exact path="/customer/track_shipment" component={TrackShipment} />
    <Route exact path="/customer/profile" component={CustomerProfile} />
    <Route exact path="/service_provider" component={ServiceProvider} />
    <Route exact path="/service_provider/login" component={SPLogin} />
    <Route exact path="/service_provider/signup" component={RegisterSP} />
  </Router>),
   document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change

// unregister() to register() below. Note this comes with some pitfalls.

// Learn more about service workers: https:
//bit.ly/CRA-PWA
serviceWorker.unregister();
