import Button from '@material-ui/core/Button';
import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import { ValidatorForm, TextValidator} from 'react-material-ui-form-validator';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import img1 from './img1.jpg';
import {Link, Redirect} from 'react-router-dom';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';

export default class RegisterSP extends React.Component {
    state = {
        formData: {
            name: '',
            email: '',
            contact: '',
            username: '',
            password: '',
        },
        submitted: false,
        redirect: false,
    }

    handleChange = (event) => {
        const { formData } = this.state;
        formData[event.target.name] = event.target.value;
        this.setState({ formData });
    }

    handleSubmit = () => {
        alert('reached');
        this.setState({ submitted: true });
        this.setState({ redirect: true });
        var apiURL=".........";
    	var data={
            "name":this.state.name,
      	    "email":this.state.email,
      	    "contact":this.state.contact,
      	    "username":this.state.username,
      	    "password":this.state.password
    	}
    	axios.post(apiURL, data).then (
      	    function (response) {
                console.log(response);
                if(response.status == 200) {
                    alert('Posted')
                    console.log("Posted Successfully");
                }
                else {
                    alert('invalid');
                    console.log("invalid");
                }
            }
        )
        .catch (
        function (error) {
            console.log(error);
        }
        );

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
          <div style={{ flexGrow:1, }}>
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
          <Card style={{maxWidth: 500}} raised='true'>
            <CardContent>
            <Typography style={{marginBottom: 12}} color="Primary">
            <h3><b>SignUp</b></h3>
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
                    	        label="Name"
                    		onChange={this.handleChange}
                    		name="name"
                    		value={formData.name}
                    		validators={['required', 'isString']}
                    		errorMessages={['this field is required', 'name should be a string']}
                	     />
                	     <br /><br />
                            <TextValidator
                    	        label="Email"
                    		onChange={this.handleChange}
                    		name="email"
                    		value={formData.email}
                    		validators={['required', 'isEmail']}
                    		errorMessages={['this field is required', 'enter a valid email id']}
                	     />
                	     <br /><br/>
                            <TextValidator
                    	        label="Contact Number"
                    		onChange={this.handleChange}
                    		name="contact"
                    		value={formData.contact}
                    		validators={['required', 'matchRegexp:^[0-9]{10,10}$']}
                    		errorMessages={['this field is required', 'enter valid contact number']}
                	     />
                	     <br /><br />
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
                    		validators={['required', 'matchRegexp:^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})']}
                    		errorMessages={['this field is required', 'the password must contain each of these: special symbol, small & capital alphabets, digit and it must be of length 8 atleast']}
                	    />
                	    <br /><br />
                	    <Button
                    		variant="contained"
                    		type="submit"
                    		disabled={submitted}
                	    >
                    	    {
                        	(submitted && 'Submitted!')
                        	|| (!submitted && 'Register')
                    	    }
                	    </Button>
			        <br /><br />
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
