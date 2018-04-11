import React, { Component } from 'react';
import './App.css';




class QuoteCard extends Component {

  render() {
    return (
      <div className = 'quote'>
        <p>{this.props.quote}</p>
		  </div>


    );
  }
}

export default QuoteCard;
