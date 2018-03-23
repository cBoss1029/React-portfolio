import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Tabs, Tab} from 'material-ui/Tabs';
import SwipeableViews from 'react-swipeable-views';

import AboutDisplay from './AboutDisplay';
import ProjectCard from './ProjectCard';
import NavHeader from './NavHeader';



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

const navLinks = [
  {name: 'About'},
  {name: 'Work'},
  {name: 'Contact'}
];

const styles = {
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400,
  },
  slide: {
    padding: 10,
  },
};



class Projects extends Component {
  state = {
    projects: null,
    navs: null,
    aboutStatus: false,
    slideIndex: 0,
  };

  componentDidMount(){
    this.setState({projects: projectInfo})
    this.setState({navs: navLinks})
  }

  handleChange = (value) => {
      this.setState({
        slideIndex: value,
      });
    };
  renderNavBar(){
    if (this.state.navs){
      return this.state.navs.map((obj,key) =>{
        return <NavHeader name ={obj.name} key = {key} clickHandle = {()=> this.renderAboutElement()}/>
      })
    }
  }

  renderAboutElement = () => {
    if (!this.state.aboutStatus && this.props.name === 'About') {
      this.setState({aboutStatus: true});
      return <AboutDisplay/>
    }
  }

  renderCards(){
    if (this.state.projects){
      return this.state.projects.map((obj, key) =>{
        return <ProjectCard name={obj.name} imgSrc={obj.img} key= {key}/>
      })
    }
  }
  // <nav className = 'navBar'>
  //   <ul>
  //     {this.renderNavBar()}
  //   </ul>
  // </nav>
  // {this.renderCards()}

  render() {
    return (
      <div className="App">
      <Tabs
        onChange={this.handleChange}
        value={this.state.slideIndex}
      >
        <Tab label="About" value={0} />
        <Tab label="Work" value={1} />
        <Tab label="Contact" value={2} />
      </Tabs>
      <SwipeableViews
        index={this.state.slideIndex}
        onChangeIndex={this.handleChange}
      >
        <div>
          <h2 style={styles.headline}>Tabs with slide effect</h2>
          Swipe to see the next slide.<br />
        </div>
        <div style={styles.slide}>
          {this.renderCards()}
        </div>
        <div style={styles.slide}>
          slide n°3
        </div>
      </SwipeableViews>

      </div>
    );
  }
}

export default Projects;
