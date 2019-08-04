// **** Service Provider Login ****

import { ValidatorForm, TextValidator} from 'react-material-ui-form-validator';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import img1 from './img1.jpg';
import {Link, Redirect} from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import React from 'react';

const buttonStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
  },
  input: {
    display: 'none',
  },
}));

  const useStyles = makeStyles({
    card: {
      maxWidth: 350,
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
    root: {
      flexGrow: 1,
    },
  });

export default class SPLogin extends React.Component {

    state = {
        formData: {
            username: '',
            password: '',
        },
        hasError: false,
        submitted: false,
        redirect: false,
    }


    handleChange = (event) => {
        const { formData } = this.state;
        formData[event.target.name] = event.target.value;
        this.setState({ formData });
    }

    handleSubmit = () => {
      this.setState({ redirect: true });

      /*var apiURL=".........";

      axios.get(apiURL, {
        params: {
          username: this.state.username,
          password: this.state.password
        }
      }).then (
        function (response) {
          console.log(response);
          if(response.status == 200) {
            alert('Posted')
            this.setState({ submitted: true })
            console.log("Posted Successfully");
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
      );*/
  /*axios.post(apiURL, data).then (
      	    function (response) {
                console.log(response);
                if(response.status == 200) {
                  alert('Posted')
                  console.log("Posted Successfully");
                  path="/" //add path name for customer/ service provider profile
                  browserHistory.push(path) // should cause redirection to
                }
                else {
                    alert('invalid');
                    console.log("invalid");
                }
            }
        ).catch (
          function (error) {
            console.log(error);
          }
        );*/
        //Link to...........
    }


    render() {
        const { formData, submitted, redirect } = this.state;
        if(redirect){
          return <Redirect to={{
                pathname: '/customer/dashboard',
                state: { username: formData.username,
                         password: formData.password,
                },
            }} />;
        }
        return (
          <MuiThemeProvider>
          <div style={{flexGrow:1}}>
            <AppBar position="static" color="default">
              <Toolbar>
              <img src={img1} alt='logo' height="60" width="90" align="left"/>

              &nbsp;&nbsp;&nbsp;&nbsp;
                <Typography variant="h5" color="Primary" display="inline">
                  <b>Uberization Of Trucks</b>
                </Typography>

              </Toolbar>
            </AppBar>
          </div>
          <br /><br /><br /><br />
          <center>
          <Card style={{maxWidth: 250}} raised='true'>
            <CardContent>
            <Typography style={{marginBottom: 12}} color="Primary">
            <h3><b>Login</b></h3>
            </Typography>
            <br />
            <Typography>
            <ValidatorForm
                ref="form"
                onSubmit={this.handleSubmit}
            >
                <div>
        	    <MuiThemeProvider>
          	        <div>
                    <TextValidator
                    	  label="Username"
                    		onChange={this.handleChange}
                    		name="username"
                    		value={formData.username}
                    		validators={['required']}
                    		errorMessages={['this field is required']}
                	   />
                	    <br /><br />
                            <TextValidator
                    	        label="Password"
                    		onChange={this.handleChange}
                    		name="password"
				                type="password"
                    		value={formData.password}
                    		validators={['required']}
                    		errorMessages={['this field is required']}
                	     />
                	     <br /><br />
                	    <Button
                        variant="contained"
                    		type="submit"
                        color="primary"
                    		disabled={submitted}
                        raised
                	    >
                    	    {
                        	(submitted && 'Submitted!')
                        	|| (!submitted && 'Submit')
                    	    }
                	    </Button>
                        </div>
                    </MuiThemeProvider>
                </div>
            </ValidatorForm>
            </Typography>
            <br />
            </CardContent>
          </Card>
          </center>
          </MuiThemeProvider>
        );
    }
}
