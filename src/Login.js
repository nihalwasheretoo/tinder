import React,{Component} from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { Route } from 'react-router';
import {SettingsDrawer} from './Drawer.js';

import './styles.css';

export class LoginPage extends Component {

	login = () => {

       var username = document.getElementById('loginUserName').value;
       var password = document.getElementById('loginPassword').value;
       var showProfile =  <Route exact path="/profile" component={SettingsDrawer} /> ;


       console.log('loginUserName : ' +username);
       console.log('loginPassword : ' +password);

        var requestOptions = {
            "method": "POST",
            "headers": {
            "Content-Type": "application/json"
            }
  		};

   		var body = {
       		"provider": "username",
            "data": {
            "username": username,
            "password": password
            }
        };

        requestOptions.body = JSON.stringify(body);

        fetch("https://app.bleed71.hasura-app.io/APIEP_Login_Username", requestOptions).then(function(response) {
          var myStatus = response.status;
          console.log(myStatus);
          if(myStatus === 200){
            alert('Logged in...');
            return showProfile;
            }
          else{
            alert('Please enter correct credentials...');
          }
   		    return response.json();
   	    }).then(function(result) {
      		console.log(JSON.stringify(result));
        });
    }

  render() {
    return (
    <div className="loginStyles">
      <Form>
        <FormGroup>
          <Label>Username</Label>
          <Input id="loginUserName" placeholder="Enter username" />
        </FormGroup>
        <FormGroup>
          <Label>Password</Label>
          <Input type="password" id="loginPassword" placeholder="Enter password" />
        </FormGroup>
        <Button id="loginButton" onClick={this.login}>Login</Button>
      </Form>
    </div>
    );
  }
}