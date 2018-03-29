import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


class AboutDisplay extends Component {

  render() {
    return (
      <div className = 'aboutMe'>
        <div className = 'aboutTitle'>
          <h3>About Cory</h3>
        </div>
        <div className = 'aboutBody'>
          <p className= 'about-text'>
          Hi, I'm Cory. I am a web developer in training. I have an intermediate knowledge of HTML, CSS, and Javascript which I am working to improve on a daily basis. Below you'll find a collection of projects and assignments I have completed during my time at Austin Coding Academy.
          </p>
        </div>
        <div className = 'aboutBottom'>
          <button>Close</button>
        </div>
      </div>

    );
  }
}

export default AboutDisplay;
