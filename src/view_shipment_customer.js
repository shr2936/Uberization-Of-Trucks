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


export default class ViewShipmentCustomer extends React.Component {
    state = {
        formData: {
            source: '',
            dest: '',
            typeOfCargo: '',
            weight: '',
            //: '',
        },
        submitted: false,
    }

    handleChange = (event) => {
        const { formData } = this.state;
        formData[event.target.name] = event.target.value;
        this.setState({ formData });
    }

    handleSubmit = () => {
        alert('reached');
        this.setState({ submitted: true })
        var apiURL=".........";
    	var data={
            "source":this.state.source,
      	    "dest":this.state.dest,
      	    "typeOfCargo":this.state.typeOfCargo,
      	    "weight":this.state.weight,
      	    //"password":this.state.password
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
        //Link to...........
    }

    render() {
        const { formData, submitted } = this.state;
        return (
            <center>
            <ValidatorForm
                ref="form"
                onSubmit={this.handleSubmit}
            >
                <div>
        	    <MuiThemeProvider>
          	        <div>
		            <AppBar
             			title="Add Shipment"
           		    />
                            <br />
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
                    		onChange={this.handleChange}
                    		name="typeOfCargo"
                    		value={formData.typeOfCargo}
                    		validators={['required']}
                                // *** Verify from backend list ***
                    		errorMessages={['this field is required']}
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
            </center>
        );
    }
}


const style = {
 margin: 15,
};
