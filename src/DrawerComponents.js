import React, {Component} from 'react';
import Slider from 'material-ui/Slider';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import Toggle from 'material-ui/Toggle';
import Divider from 'material-ui/Divider';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import './styles.css';

const styles = {
  customWidth: {
    width: 200,
  },
   block: {
    maxWidth: 250,
  },
  toggle: {
    marginBottom: 16,
  },
  thumbOff: {
    backgroundColor: '#ffcccc',
  },
  trackOff: {
    backgroundColor: '#ff9d9d',
  },
  thumbSwitched: {
    backgroundColor: 'red',
  },
  trackSwitched: {
    backgroundColor: '#ff9d9d',
  },
  labelStyle: {
    color: 'red',
  },
};


export class DiscoverySettings extends Component {
    constructor(props) {
    super(props);
    this.state = {value: 1};
  }

  handleChange = (event, index, value) => this.setState({value});

  state = {
    firstSlider: 50,
    secondSlider: 50,
  };

  handleDistanceSlider = (event, value) => {
    this.setState({firstSlider: value});
  };

  handleAgeSlider = (event, value) => {
    this.setState({secondSlider: value});
  };

  render() {
    return (
      <div className="discoveryStyles">
        <p>
          <span>{'Maximum Distance : '}</span>
          <span>{this.state.firstSlider}</span>
          <span>{' km '}</span>
        </p>

        <Slider 
          min={0}
          max={100}
          step={1}
          value={this.state.firstSlider}
          onChange={this.handleDistanceSlider}
          />
       
        <p>
          <span>{'Age Range : '}</span>
          <span>{this.state.secondSlider}</span>
        </p>

        <Slider
          min={18}
          max={54}
          step={1}
          value={this.state.secondSlider}
          onChange={this.handleAgeSlider}
        />

        <p>
          <span>{'Looking for : '}</span>
        </p>

         <DropDownMenu value={this.state.value} onChange={this.handleChange}>
          <MenuItem value={1} primaryText="Women" />
          <MenuItem value={2} primaryText="Men" />
          <MenuItem value={3} primaryText="Men and Women" />
        </DropDownMenu>
       
      </div>
    );
  }
}


export class ShowMeOnTinder extends Component{
  render(){
    return(
      <div className="showmeontinderStyles">
          <Toggle
                label="Show me on Tinder"
                thumbStyle={styles.thumbOff}
                trackStyle={styles.trackOff}
                thumbSwitchedStyle={styles.thumbSwitched}
                trackSwitchedStyle={styles.trackSwitched}
                labelStyle={styles.labelStyle}
           />
           <br /> <br />
           <p>
                While turned off, you will not be shown in the card Stack. You can still see your matches and chat with them. 
           </p>
      </div>
      );
  }
}


export class Notifications extends Component{
  render(){
    return(
      <div className="notificationStyles">
          <Toggle
                label="New matches"
                thumbStyle={styles.thumbOff}
                trackStyle={styles.trackOff}
                thumbSwitchedStyle={styles.thumbSwitched}
                trackSwitchedStyle={styles.trackSwitched}
                labelStyle={styles.labelStyle}
           />
                <br />
               <Divider />
                <br />


            <Toggle
                label="Messages"
                thumbStyle={styles.thumbOff}
                trackStyle={styles.trackOff}
                thumbSwitchedStyle={styles.thumbSwitched}
                trackSwitchedStyle={styles.trackSwitched}
                labelStyle={styles.labelStyle}
           />
                <br />
               <Divider />
                <br />

            <Toggle
                label="Messages likes"
                thumbStyle={styles.thumbOff}
                trackStyle={styles.trackOff}
                thumbSwitchedStyle={styles.thumbSwitched}
                trackSwitchedStyle={styles.trackSwitched}
                labelStyle={styles.labelStyle}
           />
                <br />
               <Divider />
                <br />

            <Toggle
                label="Super Like"
                thumbStyle={styles.thumbOff}
                trackStyle={styles.trackOff}
                thumbSwitchedStyle={styles.thumbSwitched}
                trackSwitchedStyle={styles.trackSwitched}
                labelStyle={styles.labelStyle}
           />
         
      </div>
      );
  }
}


export class Language extends Component{
   constructor(props) {
      super(props);
      this.state = {
        value: 1,
        file:null
      };
    }

   handleChange = (event, index, value) => this.setState({value});

  render(){
    return(
        <div className="languagesStyles">
            <p>
                <span>{'Languages : '}</span>
            </p>
            <DropDownMenu value={this.state.value} onChange={this.handleChange}>
               <MenuItem value={1} primaryText="English(UK)" />
               <MenuItem value={2} primaryText="English(US)" />
               <MenuItem value={3} primaryText="Espanol" />
               <MenuItem value={4} primaryText="Espanol(Argentina)" />
               <MenuItem value={5} primaryText="Dansk" />
               <MenuItem value={6} primaryText="Deutsch" />
               <MenuItem value={7} primaryText="Francias(France)" />
               <MenuItem value={8} primaryText="Francias(Canada)" />
               <MenuItem value={9} primaryText="Hindi" />
               <MenuItem value={10} primaryText="Italiano" />
            </DropDownMenu>
        </div>
    );
  }
}


export class ContactUs extends Component{
  render(){
    return(
      <div className="contactStyles">
        <h1>Help & Support</h1>  
      </div>
    );
  }
}


export class Account extends Component{
  render(){
    return(
      <div className="accountStyles">
        <h1>Restore Purchases</h1>  
      </div>
    );
  }
}


export class Legal extends Component{
  render(){
    return(
      <div className="legalStyles">
        <h1>Privacy Policy</h1>  <br /><br />
        <h1>Terms of Service</h1>  <br /><br />
        <h1>Safety Tips</h1>  <br /><br />
        <h1>Community Guidelines</h1>  <br /><br />
      </div>
    );
  }
}


export class EditProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {file: '',imagePreviewUrl: ''};
  }

  _handleSubmit(e) {
    e.preventDefault();
    // TODO: do something with -> this.state.file
    console.log('handle uploading-', this.state.file);
  }

  _handleImageChange(e) {
    e.preventDefault();

    let reader = new FileReader();
    let file = e.target.files[0];
    let file1 = this.state.file;

    var url_file_upload = "https://app.bleed71.hasura-app.io/APIEP_PP";

      fetch(url_file_upload, {
        mode: 'no-cors',
        method: "POST",
        body: file1
      }).then(function (res) {
      if (res.ok) {
        alert("Perfect! ");
      } else if (res.status === 401) {
        alert("Oops! ");
      }
    }, function (e) {
      alert("Error submitting form!");
    });

    reader.onloadend = () => {
      this.setState({
        file: file,
        imagePreviewUrl: reader.result
      });

    }

    reader.readAsDataURL(file)
  }

  //Backend
   saveProfile = ()=>{

    var name = document.getElementById('name').value;
    var place = document.getElementById('place').value;
    var gender = document.getElementById('gender').value;
    //var url_file_upload = "https://filestore.bleed71.hasura-app.io/v1/file";

    console.log('Name :'+name);
    console.log('Place :'+place);
    console.log('Gender :'+gender);

    

   };

  render() {
    let {imagePreviewUrl} = this.state;
    let $imagePreview = null;
    if (imagePreviewUrl) {
      $imagePreview = (<img src={imagePreviewUrl} alt="ImageHere"/>);
    } else {
      $imagePreview = (<div className="previewText">Please select an Image for Preview</div>);
    }


    return (
      
      <div className="previewComponent" align="center">
      <h3>Upload Image</h3> 
        <form onSubmit={(e)=>this._handleSubmit(e)}>
          <input className="fileInput" type="file" onChange={(e)=>this._handleImageChange(e)} />
          <button className="submitButton" 
            type="submit" 
            onClick={(e)=>this._handleSubmit(e)}>Upload Image</button>
        </form>

        <div className="imgPreview">
          {$imagePreview}
        </div>
        <hr />
        <div className="editProfileStyles">
        <Form>
        <FormGroup>
          <Label>Name</Label>
          <Input id="name" placeholder="Enter name" />
        </FormGroup>
         <FormGroup>
          <Label>Gender</Label>
          <Input id="gender" placeholder="Enter gender" />
        </FormGroup>
        <FormGroup>
          <Label>Place</Label>
          <Input id="place" placeholder="Enter place" />
        </FormGroup>
           <Button onClick={this.saveProfile}>Save</Button>
        </Form>
        </div>
      </div>
    );
  }
}