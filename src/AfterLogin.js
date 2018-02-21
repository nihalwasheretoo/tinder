import React,{Component} from 'react';
import {
  Button,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, CardLink} from 'reactstrap';
  // import { BrowserRouter as Router, Route, Link } from "react-router-dom";


export class AfterLoginInitial extends Component{

  constructor(props) {
    super(props);
    
    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
      dropdownOpen: false
    };
}
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
      dropdownOpen: !this.state.dropdownOpen

    });
  }

  showProfile = () => {
     this.setState({
      displayProfileDropDown : true
    });
  };

   showDeck = () => {
     this.setState({
      displayDeck : true
    });
  };

  showPeople = () =>{
        this.setState({
          displayPeopleCards : true
        });
    };

  render(){
    if(this.state.displayProfileDropDown){
    return(
   <div>
       <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
        <DropdownToggle caret>
          Profile
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem header>DISPLAY SETTINGS</DropdownItem>
          <DropdownItem>Maximum distance</DropdownItem>
          <DropdownItem>Looking for</DropdownItem>
          <DropdownItem>Age range</DropdownItem>
          <DropdownItem divider />


          <DropdownItem header>NOTIFICATIONS</DropdownItem>
          <DropdownItem>New Matches</DropdownItem>
          <DropdownItem>Messages</DropdownItem>
          <DropdownItem>Messages likes</DropdownItem>
          <DropdownItem>Super Like</DropdownItem>

          <DropdownItem divider />

          <DropdownItem header>LANGUAGE</DropdownItem>
          <DropdownItem>Language</DropdownItem>

          <DropdownItem divider />
          <DropdownItem header>CONTACT US</DropdownItem>
          <DropdownItem>Help & support</DropdownItem>

          <DropdownItem divider />
          <DropdownItem header>ACCOUNT</DropdownItem>
          <DropdownItem>Restore purchases</DropdownItem>

          <DropdownItem divider />
          <DropdownItem header>LEGAL</DropdownItem>
          <DropdownItem>Privacy Policy</DropdownItem>
          <DropdownItem>Terms of Service</DropdownItem>
          <DropdownItem>Safety tips</DropdownItem>
          <DropdownItem>Community Guidelines</DropdownItem>

          <DropdownItem divider />
          <Button onClick={this.logout}>Logout</Button>

          <DropdownItem divider />
          <DropdownItem divider />
          <Button onClick={this.deleteAccount}>Delete account</Button>

        </DropdownMenu>
      </Dropdown>
      </div>
      )
}
    if(this.state.displayDeck){
      return(
         <div>
        <Card>
        <CardImg top width="100%" src="/anonymous.jpg" alt="Card image cap" />
        <CardBody>
          <CardTitle>Name, Age</CardTitle>
          <Button onClick={this.showDeck}>Edit Info</Button>
        </CardBody>
         </Card>
      </div>
    
      )
  }

      if(this.state.displayPeopleCards){

  return(

          <div> 
          <Card>
        <CardBody>
          <CardTitle>Card title</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
        </CardBody>
        <img width="100%" src="https://cdn.notonthehighstreet.com/fs/b5/58/5f14-9742-4fbf-90bc-190559043b9c/original_swipe-right-tinder-valentine-s-day-card.jpg" alt="Card" />
        <CardBody>
          <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
          <CardLink href="#">Card Link</CardLink>
          <CardLink href="#">Another Link</CardLink>
        </CardBody>
      </Card>
          </div>

    )
  }



  return(

 <div>
                  <Button onClick={this.showProfile}>Profile </Button> <br />
                  <Button onClick={this.showDeck}>Deck </Button> <br />
                  <Button onClick={this.showPeople}>People </Button> <br />
            </div>

    );
}
}