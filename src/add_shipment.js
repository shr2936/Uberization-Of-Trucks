// **** Add Shipment ****

import Button from '@material-ui/core/Button';
import React from 'react';

import ReactDOM from 'react-dom';
import axios from 'axios';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import { ValidatorForm, TextValidator} from 'react-material-ui-form-validator';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import img1 from './img1.jpg';
import {Link, Redirect} from 'react-router-dom';

export default class AddShipment extends React.Component {
    state = {
        formData: {
            source: '',
            dest: '',
            typeOfCargo: '',
            weight: '',
            //: '',
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
        this.setState({ redirect: true });
        this.setState({ submitted: true });
        var apiURL=".........";
    	var data={
            "source":this.state.source,
      	    "dest":this.state.dest,
      	    "typeOfCargo":this.state.typeOfCargo,
      	    "weight":this.state.weight,
    	}
    	axios.post(apiURL, data).then (
      	    function (response) {
                console.log(response);
                if(response.status == 200) {
                    alert('Posted')
                    console.log("Posted Successfully");
                    this.setState({ redirect: true });
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
                  <b>/* Customer Name */</b>
                </Typography>

              </Toolbar>
            </AppBar>
          </div>
          <br /><br /><br />
          <center>
          <Card style={{maxWidth: 500}} raised='true'>
            <CardContent>
            <Typography style={{marginBottom: 12}} color="Primary">
            <h3><b>Add Shipment</b></h3>
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
                    	  label="Source"
                    		onChange={this.handleChange}
                    		name="source"
                    		value={formData.source}
                    		validators={['required']}
                    		errorMessages={['this field is required']}
                	    />
                	    <br /><br />
                            <TextValidator
                    	        label="Destination"
                    		onChange={this.handleChange}
                    		name="dest"
                    		value={formData.dest}
                    		validators={['required']}
                    		errorMessages={['this field is required']}
                	     />
                	     <br /><br/>
                            <TextValidator
                    	        label="Type of Cargo"
                    		onChange = { this.handleChange }
                    		name="typeOfCargo"
                    		value={ formData.typeOfCargo }
                    		validators={ ['required'] }
                                // *** Verify from backend list ***
                    		errorMessages={ ['this field is required'] }
                	     />
                	     <br /><br />
                            <TextValidator
                    	        label="Weight"
                    		onChange={this.handleChange}
                    		name="weight"
                    		value={formData.weight}
                    		validators={['required', 'isNumber']}
                    		errorMessages={['this field is required', 'enter valid value']}
                	     />
                	     <br /><br />
                	    <Button
                    		variant="contained"
                    		type="submit"
                    		disabled={submitted}
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
            </CardContent>
            </Card>
            </center>
            </MuiThemeProvider>
        );
    }
}


const style = {
 margin: 15,
};
