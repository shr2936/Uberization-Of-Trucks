// **** Customer ****

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import React from 'react';
//import ReactDOM from 'react-dom';
//import axios from 'axios';
import img1 from './img1.jpg';
import {Link} from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
//import RaisedButton from 'material-ui/RaisedButton';
//import TextField from 'material-ui/TextField';
//import { ValidatorForm, TextValidator} from 'react-material-ui-form-validator';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

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
      maxWidth: 300,
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

export default function Customer() {
    const classes = useStyles();
    const buttons = buttonStyles();
        return (
              <MuiThemeProvider>
              <div className={classes.root}>
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
              <Card className={classes.card} raised='true'>
                <CardContent>
                <Typography className={classes.pos} color="textSecondary">
                  <Button component={Link} variant="contained" color="primary" className={buttons.button} raised to="/customer/login">
                    Login
                  </Button>
                </Typography>
                <br />
                <Typography className={classes.pos} color="textSecondary">
                  <Button component={Link} variant="contained" color="primary" className={classes.button} raised to="/customer/signup">
                    SignUp
                  </Button>
                </Typography>
                </CardContent>
              </Card>
              </center>
              </MuiThemeProvider>
            );
        }
