import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ProjectCard from './ProjectCard';

const projectInfo = [
  {name: 'Airplane', img: '/img/airplane.png'},
  {name: 'Bootstrap', img: '/img/bootstrap.png'},
  {name: 'Dice', img: '/img/dice.png'},
  {name: 'Tic-Tac-Toe', img: '/img/tic-tac-toe.png'},
  {name: 'Tomorrows Tech', img: '/img/tomorrowstech.png'},
  {name: 'Transition', img: '/img/transition.png'},
  {name: 'Tuccis', img: '/img/tuccis.png'},
  {name: 'Welcome', img: '/img/welcome.png'},
];

class Projects extends Component {
  state = {
    projects: null,
  };

  componentDidMount(){
    this.setState({projects: projectInfo})
  }

  renderCards(){
    if (this.state.projects){
      return this.state.projects.map((obj, key) =>{
        return <ProjectCard name={obj.name} imgSrc={obj.img} key= {key}/>
      })
    }

  }
  render() {
    return (
      <div className="App">
        {this.renderCards()}
      </div>
    );
  }
}

export default Projects;
