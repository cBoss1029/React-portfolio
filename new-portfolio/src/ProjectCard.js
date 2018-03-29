import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// <div className="Card">
//   <h5>{this.props.name}</h5>
//   <img className = "project-image" src={window.location.origin + this.props.imgSrc}></img>
//
//   <a href = {this.props.href}>
//     <p className= 'card-body'>{this.props.description}</p>
//   </a>
// </div>


class ProjectCard extends Component {

  render() {
    return (
      <div className="card">
					<figure className="effect-bubba">
						<img className = "project-image" src={window.location.origin + this.props.imgSrc}/>
						<figcaption>
							<h2>{this.props.name}</h2>
							<p className= 'card-body'>{this.props.description}</p>
							<a href={this.props.href}></a>
						</figcaption>
					</figure>
				</div>


    );
  }
}

export default ProjectCard;
