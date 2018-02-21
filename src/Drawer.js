import React,{Component} from 'react';
import Divider from 'material-ui/Divider';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import FlatButton from 'material-ui/FlatButton';
import Avatar from 'material-ui/Avatar';
import Dialog from 'material-ui/Dialog';
import {Card, CardActions, CardHeader, CardMedia, CardTitle} from 'material-ui/Card';
import {Route} from 'react-router-dom';
import {DiscoverySettings} from './DrawerComponents.js';
import {Notifications} from './DrawerComponents.js';
import {ShowMeOnTinder} from './DrawerComponents.js';
import {Language} from './DrawerComponents.js';
import { Home } from './HomePage.js';
import {ContactUs} from './DrawerComponents.js';
import {Account} from './DrawerComponents.js';
import {Legal} from './DrawerComponents.js';
import {EditProfile} from './DrawerComponents.js';
 
  const styles = {
  title: {
    cursor: 'pointer',
  }
  };


    var imgUrl = "/tinder_logo.png";
    var name = "Nihal";
    var place = "Pune";

export class SettingsDrawer extends Component {

  constructor(props) {
    super(props);
    this.state = {open: false};
  }

  handleToggle = () => this.setState({open: !this.state.open});

  handleClose = () => this.setState({open: false});

  logout = () =>{
    //logout function
  }

  state = {
    open: false,
  };

  handleDialogOpen = () => {
    this.setState({open: true});
  };

  handleDialogClose = () => {
    this.setState({open: false});
  };

  render() {
     const actions = [
      <FlatButton
        label="CONTINUE"
        primary={true}
        onClick={this.handleClose}
      />,
      <FlatButton
        label="NO THANKS"
        primary={true}
        keyboardFocused={true}
        onClick={this.handleClose}
      />,
    ];
    return (
      <div>
      <div>
      <AppBar
          title={<span style={styles.title}>Profile</span>}
          onTitleClick={this.handleToggle}
          iconElementLeft={<IconButton><Avatar  
                         src={imgUrl} />
          </IconButton>}
          onLeftIconButtonClick={this.handleToggle}
          iconElementRight={<FlatButton label="Logout" />}
       />
       </div> <br />  <br />  <br />  <br />
       <div style={{
      width: '25%',
      margin: '0 auto',
      border: '2px solid #F44336',
      }}>
      <Card>
                  <CardHeader
                    title={name}
                    subtitle={place}
                    avatar={imgUrl}
                  />
                  <CardMedia
                    overlay={<CardTitle title={name} />} >
                    <img src={imgUrl} alt="" />
                  </CardMedia>
                  <CardActions align="center">
                    <FlatButton onClick={this.handleDialogOpen} backgroundColor="#F44336" hoverColor="#E91E63" icon={<i className="material-icons">undo</i>} />                    
                    <FlatButton backgroundColor="#F44336" hoverColor="#E91E63" icon={<i className="material-icons">clear</i>} />
                    <FlatButton backgroundColor="#F44336" hoverColor="#E91E63" icon={<i className="material-icons">favorite</i>} /> 
                    <FlatButton onClick={this.handleDialogOpen} backgroundColor="#F44336" hoverColor="#E91E63" icon={<i className="material-icons">grade</i>} />
                    <Dialog
                          title="Get Tinder Plus"
                          actions={actions}
                          modal={false}
                          
                          onRequestClose={this.handleDialogClose}
                    >
                    Subscribe to the paid version to avail benefits!!!.
                    </Dialog>

                  </CardActions>
       </Card>
       </div>

        <Drawer
          docked={false}
          width={400}
          open={this.state.open}
          onRequestChange={(open) => this.setState({open})}
        >
          <MenuItem><a href="/discoverySettings">Discovery Settings</a></MenuItem>
          <Route exact path="/discoverySettings" component={DiscoverySettings} /> 
           <Divider />
          <MenuItem><a href="/showmeontinder">Show me on Tinder</a></MenuItem>
          <Route exact path="/showmeontinder" component={ShowMeOnTinder} /> 
           <Divider />
          <MenuItem><a href="/notifications">Notifications</a></MenuItem>
          <Route exact path="/notifications" component={Notifications} /> 
           <Divider />
          <MenuItem><a href="/language">Language</a></MenuItem>
          <Route exact path="/language" component={Language} /> 
           <Divider />

          <MenuItem><a href="/contactus">Contact us</a></MenuItem>
          <Route exact path="/contactus" component={ContactUs} /> 
           <Divider />
           
          <MenuItem><a href="/account">Account</a></MenuItem>
          <Route exact path="/account" component={Account} /> 
           <Divider />

          <MenuItem><a href="/Legal">Legal</a></MenuItem>
          <Route exact path="/legal" component={Legal} /> 
           <Divider />

          <MenuItem><a href="/deleteaccount">Delete Account</a></MenuItem>
          <Route exact path="/" component={Home} /> 
           <Divider />

          <MenuItem><a href="/editprofile">Edit Profile</a></MenuItem>
          <Route exact path="/editprofile" component={EditProfile} /> 
           <Divider />
        </Drawer>
      </div>
    );
  }
}