import React,{Component} from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import './styles.css'

export class SignUpPage extends Component {

    signup = () => {

        var username = document.getElementById('loginUserName').value;
        var password = document.getElementById('loginPassword').value;

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

        fetch("https://app.bleed71.hasura-app.io/APIEP_Signup_Username", requestOptions).then(function(response) {
            var myStatus = response.status;
            console.log(myStatus);
            if(myStatus === 200){
              alert('Registerd Successfully...');
            }
            else if(myStatus === 500){
              alert('User already exists... Please try another username...');
            }
            return response.json();
        }).then(function(result) {
            console.log(JSON.stringify(result));
        });
    }


  render() {
    return (
    <div className="signupStyles">
      <Form>
        <FormGroup>
          <Label for="exampleEmail">Username</Label>
          <Input type="text" id="loginUserName" placeholder="Enter username" />
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword">Password</Label>
          <Input type="password" id="loginPassword" placeholder="Enter password (min 6 characters) " />
        </FormGroup>
        <Button id="signupButton" onClick={this.signup}>Sign Up</Button>
      </Form>
    </div>
    );
  }
}