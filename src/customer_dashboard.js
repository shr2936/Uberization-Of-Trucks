// **** Customer Dashboard ****

import { ValidatorForm, TextValidator} from 'react-material-ui-form-validator';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import img1 from './img1.jpg';
import {Link, Redirect} from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import React from 'react';
import axios from 'axios';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';

export default class CustomerDashboard extends React.Component {

  constructor(props){
    super(props);
  }
    render() {
      const x=this.props.location.state;
      var apiURL="";
      var data={
        username: '',
        password: '',
      };
      axios.get(apiURL, {
        params: {
          username: x.username,
          password: x.password
        }
      }).then (
        function (response) {
          console.log(response);
          if(response.status == 200) {
            var data=response.data;
          }
          else {
            alert('invalid');
            this.setState({ hasError: true })
            console.log("invalid");
          }
        }
      )
      .catch (
        function (error) {
          console.log(error);
        }
      );
        return (


          //Print customer name from response data

          <MuiThemeProvider>
          <div style={{flexGrow:1}}>
            <AppBar position="static" color="default">
              <Toolbar>
              <img src={img1} alt='logo' height="60" width="90" align="left"/>

              &nbsp;&nbsp;&nbsp;&nbsp;
                <Typography variant="h5" color="Primary" display="inline">
                  <b>/* Customer Name */</b>
                </Typography>

              </Toolbar>
            </AppBar>
          </div>
          <br /><br /><br /><br />
          <center>
          <Card style={{maxWidth: 300}} raised='true'>
            <CardContent>
            <br /><br />
            <Typography style={{marginBottom: 12}} color="Primary">
            <Button component={Link} variant="contained" color="primary" raised to={{
                  pathname: '/customer/add_shipment',
                  state: { username: data.username,
                           password: data.password,
                  },
              }}>
              Add Shipment
            </Button>
            </Typography>
            <br />
            <Typography>
            <Button component={Link} variant="contained" color="primary" raised to={{
                  pathname: "/customer/track_shipment",
                  state: { username: data.username,
                           password: data.password,
                  },
              }}>
              Track Shipment
            </Button>
            </Typography>
            <br />
            <Typography>
            <Button component={Link} variant="contained" color="primary" raised to={{
                  pathname: "/customer/view_bids",
                  state: { username: data.username,
                           password: data.password,
                  },
              }}>
              View Bids
            </Button>
            </Typography>
            <br />
            <Typography>
            <Button component={Link} variant="contained" color="primary" raised to={{
                  pathname: "/customer/customer_profile",
                  state: { username: data.username,
                           password: data.password,
                  },
              }}>
              Profile
            </Button>
            </Typography>
            <br /><br />
            </CardContent>
          </Card>
          </center>
          </MuiThemeProvider>
        );
    }
}
