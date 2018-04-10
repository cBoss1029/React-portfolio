import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';




class ContactCard extends Component {

  render() {
    return (
      <div className = 'icon'>
				<a className = 'iconStyle' href = {this.props.href} title = {this.props.title}><FontAwesomeIcon icon = {this.props.icon} className = 'iconStyle'/></a>
		  </div>


    );
  }
}

export default ContactCard;
