import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Tabs, Tab} from 'material-ui/Tabs';
import SwipeableViews from 'react-swipeable-views';
import { CSSTransitionGroup } from 'react-transition-group'

import AboutDisplay from './AboutDisplay';
import ProjectCard from './ProjectCard';
import Header from './Header';



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
  tabs: {
    color: '#8B0000',
    backgroundColor: '#F4A460',
  },
  header: {
    width: '300px',
    height: 'auto',
    backgroundColor: '#C0C0C0'
  }
};



class Projects extends Component {
  state = {
    projects: null,
    slideIndex: 0,
  };

  componentDidMount(){
    this.setState({projects: projectInfo})
  }

  handleChange = (value) => {
      this.setState({
        slideIndex: value,
      });
    };


  renderCards(){
    if (this.state.projects){
      return this.state.projects.map((obj, key) =>{
        return <ProjectCard name={obj.name} imgSrc={obj.img} key= {key}/>
      })
    }
  }

  renderHeader() {
    return <Header/>
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
        <CSSTransitionGroup
           transitionName="header-logo"
           transitionAppear={true}
           transitionAppearTimeout={500}
           transitionEnter={false}
           transitionLeave={false}>
           <Header/>
       </CSSTransitionGroup>

      <Tabs
        onChange={this.handleChange}
        value={this.state.slideIndex}
        inkBarStyle={{backgroundColor:"	#8B4513"}}


      >
        <Tab style= {styles.tabs} label="About" value={0} />
        <Tab style= {styles.tabs} label="Work" value={1} />
        <Tab style= {styles.tabs} label="Contact" value={2} />
      </Tabs>
      <SwipeableViews
        index={this.state.slideIndex}
        onChangeIndex={this.handleChange}
      >
        <div>
          <p>  Hi, I'm Cory. I am a web developer in training. I have an intermediate knowledge of HTML, CSS, and Javascript which I am working to improve on a daily basis. Below you'll find a collection of projects and assignments I have completed during my time at
          Austin Coding Academy.
          </p>
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
