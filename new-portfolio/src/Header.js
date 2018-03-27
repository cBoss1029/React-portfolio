import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


class Header extends Component {

  render() {
    return (
      <div className="header">
        <img className = "logo" src={'./img/logo_transparent_background.png'}></img>
      </div>
    );
  }
}

export default Header;
