import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


class NavHeader extends Component {

  render() {
    return (
      <li className="nav" onClick = {() => this.props.clickHandle()}>
        <a href = '#'>{this.props.name}</a>
      </li>
    );
  }
}

export default NavHeader;
