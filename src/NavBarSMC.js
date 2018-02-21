import React,{Component} from 'react';
import Img from 'react-image';

export class MatchImage extends Component {
  render() {
    return (
      <div className="matchImage">
        <Img src="/match.png" />
      </div>
    );
  }
} 


export class SwipeImage extends Component {
  render() {
    return (
      <div className="swipeImage">
        <Img src="/swipe.png" />
      </div>
    );
  }
} 


export class ChatImage extends Component {
  render() {
    return (
      <div className="chatImage">
        <Img src="/chat.png" />
      </div>
    );
  }
} 