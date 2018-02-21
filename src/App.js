import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Home } from './HomePage.js';
import { LoginPage } from './Login.js';
import { SignUpPage } from './SignUp.js';
import {SwipeImage} from './NavBarSMC.js';
import {MatchImage} from './NavBarSMC.js';
import {ChatImage} from './NavBarSMC.js';
import {AfterLoginInitial} from './AfterLogin.js';
import {SettingsDrawer} from './Drawer.js';
import {DiscoverySettings} from './DrawerComponents.js';
import {ShowMeOnTinder} from './DrawerComponents.js';
import {Notifications} from './DrawerComponents.js';
import {Language} from './DrawerComponents.js';
import {ContactUs} from './DrawerComponents.js';
import {Account} from './DrawerComponents.js';
import {Legal} from './DrawerComponents.js';
import {EditProfile} from './DrawerComponents.js';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import './styles.css';

class App extends Component {
   
  render() {
    return (
      <BrowserRouter>
      <MuiThemeProvider>
        <div>
          <Switch>
          <Route exact path="/" component= {Home} />
          <Route exact path="/login" component= {LoginPage} />
          <Route exact path="/signup" component= {SignUpPage} />
          <Route exact path="/swipe" component={SwipeImage} />      
          <Route exact path="/match" component={MatchImage} />
          <Route exact path="/chat" component={ChatImage} />      
          <Route exact path="/drawer" component={SettingsDrawer} />      
          <Route exact path="/AfterLogin" component={AfterLoginInitial} /> 
          <Route exact path="/discoverySettings" component={DiscoverySettings} /> 
          <Route exact path="/showmeontinder" component={ShowMeOnTinder} /> 
          <Route exact path="/notifications" component={Notifications} /> 
          <Route exact path="/language" component={Language} /> 
          <Route exact path="/contactus" component={ContactUs} /> 
          <Route exact path="/account" component={Account} /> 
          <Route exact path="/legal" component={Legal} /> 
          <Route exact path="/deleteaccount" component={Home} />
          <Route exact path="/editprofile" component={EditProfile} />  
          </Switch>
        </div>
      </MuiThemeProvider>
      </BrowserRouter>
    );
  }
}

export default App;