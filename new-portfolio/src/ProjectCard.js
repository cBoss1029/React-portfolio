import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


class ProjectCard extends Component {

  render() {
    return (
      <div className="Card">
        <h5>{this.props.name}</h5>
        <img className = "project-image" src={window.location.origin + this.props.imgSrc}></img>
      </div>
    );
  }
}

export default ProjectCard;
