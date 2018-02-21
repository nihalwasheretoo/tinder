import React,{Component} from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  DropdownToggle,
  DropdownMenu,
  DropdownItem, UncontrolledDropdown } from 'reactstrap';
  import Img from 'react-image';
  import { BrowserRouter as Route } from "react-router-dom";
  import {LoginPage} from './Login.js';
  import {SignUpPage} from './SignUp.js';
  import {SwipeImage} from './NavBarSMC.js';
  import {MatchImage} from './NavBarSMC.js';
  import {ChatImage} from './NavBarSMC.js';

export class Home extends Component {
  constructor(props) {
    super(props);
    
    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
      showSignUp: false,
      showLogin: false,
      dropdownOpen: false
    };
}
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
      dropdownOpen: !this.state.dropdownOpen

    });
  }

  render() {
        return(
          <div>
          <div className="navbarStyles">
             <Navbar color="faded" light expand="md">
             <NavbarBrand href="/">Tinder</NavbarBrand>
             <NavbarToggler onClick={this.toggle} />
             <Collapse isOpen={this.state.isOpen} navbar />

             <Nav className="ml-auto" navbar>
                  <NavItem>
                    <NavLink href="/swipe">SWIPE</NavLink>
                    <Route exact path="/swipe" component={SwipeImage} />      
                  </NavItem>
                  <NavItem>
                    <NavLink href="/match">MATCH</NavLink>
                    <Route exact path="/match" component={MatchImage} />      
                  </NavItem>
                  <NavItem>
                    <NavLink href="/chat">CHAT</NavLink>
                    <Route exact path="/chat" component={ChatImage} />      
                  </NavItem>
                  <NavItem>
                    <NavLink href="/login">LOGIN</NavLink>
                    <Route exact path="/login" component={LoginPage} /> 
                  </NavItem>
                  <NavItem>
                    <NavLink href="/signup">SIGN UP</NavLink>
                    <Route exact path="/signup" component={SignUpPage} />      
                  </NavItem>
        
              <UncontrolledDropdown nav inNavbar>
                 <DropdownToggle nav caret>
                  Options
              </DropdownToggle>
              <DropdownMenu >
                 <DropdownItem header>COMPANY</DropdownItem>
                            <DropdownItem>Jobs</DropdownItem>
                            <DropdownItem>Contact</DropdownItem>
                            <DropdownItem>Security</DropdownItem>
                            <DropdownItem divider />
  
                 <DropdownItem header>COMMUNITY</DropdownItem>
                            <DropdownItem>Blog</DropdownItem>
                            <DropdownItem>Tech Blog</DropdownItem>
                            <DropdownItem>Press</DropdownItem>
                            <DropdownItem>Support</DropdownItem>
                            <DropdownItem divider />

                 <DropdownItem header>PARTNERS</DropdownItem>
                            <DropdownItem>Hey! Vina</DropdownItem>
                            <DropdownItem>Spotify</DropdownItem>
                            <DropdownItem divider />

                 <DropdownItem header>LEGAL</DropdownItem>
                            <DropdownItem>Privacy</DropdownItem>
                            <DropdownItem>Terms</DropdownItem>
                            <DropdownItem>Safety</DropdownItem>
                            <DropdownItem>Communtiy Guidelines</DropdownItem>
               </DropdownMenu>
               </UncontrolledDropdown>
            </Nav>
        </Navbar> 
        </div>
        <div align="center">
        <Img src="/tinder_logo.png" />
        </div>
        </div>
        );
    }
}