// **** Place Bid ****

import Button from '@material-ui/core/Button';
import React from 'react';

import ReactDOM from 'react-dom';
import axios from 'axios';
import Typography from '@material-ui/core/Typography';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import { ValidatorForm, TextValidator} from 'react-material-ui-form-validator';


export default class PlaceBid extends React.Component {
    state = {
        formData: {
            amount: '',
            days: '',
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
            "amount":this.state.amount,
      	    "days":this.state.days
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
             			title="Place Bid"
           		    />
                            <br />
                            <TextValidator
                    	        label="Amount"
                    		onChange={this.handleChange}
                    		name="amount"
                    		value={formData.amount}
                    		validators={['required', 'isNumber']}
                    		errorMessages={['this field is required', 'enter a valid amount']}
                	     />
                	     <br /><br />
                            <TextValidator
                    	        label="Number of Days"
                    		onChange={this.handleChange}
                    		name="days"
                    		value={formData.days}
                    		validators={['required', 'isNumber']}
                    		errorMessages={['this field is required', 'enter a valid value']}
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
