// **** Customer Profile ****
/*
import Button from '@material-ui/core/Button';
import React from 'react';

import ReactDOM from 'react-dom';
import axios from 'axios';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import { ValidatorForm, TextValidator} from 'react-material-ui-form-validator';

class CustomerProfile extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      customer_name: "",
      email: "",
      age: "",
    };
    this.handleSubmit=this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    var apiURL="http://dummy.restapiexample.com/api/v1/create";
    var data={
      "name":this.state.name,
      "salary":this.state.salary,
      "age":this.state.age
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
    return (
      <center>
      <div>
        <MuiThemeProvider>
          <div>
          <AppBar
             title="Employee Details"
           />
           <TextField
             hintText="Enter Name"
             floatingLabelText="Name"
             onChange = {(event,newValue) => this.setState({name:newValue})}
             />
           <br/>
             <TextField
               hintText="Enter salary"
               floatingLabelText="Salary"
               onChange = {(event,newValue) => this.setState({salary:newValue})}
               />
             <br/>
             <TextField
               hintText="Enter age"
               floatingLabelText="Age"
               onChange = {(event,newValue) => this.setState({age:newValue})}
               />
             <br/>
             <RaisedButton label="Submit" primary={true} style={style} onClick={(event) => this.handleSubmit(event)}/>
         </div>
         </MuiThemeProvider>
      </div>
      </center>
    );
  }

}
*/


import React from 'react';

export default class CustomerProfile extends React.Component {
  render(){
    return(
      <div>
      CustomerProfile
      </div>
    );
  }
}
