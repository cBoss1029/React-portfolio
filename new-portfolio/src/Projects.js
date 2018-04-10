import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Tabs, Tab} from 'material-ui/Tabs';
import SwipeableViews from 'react-swipeable-views';
import { CSSTransitionGroup } from 'react-transition-group';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import fontawesome from '@fortawesome/fontawesome';
import brands from '@fortawesome/fontawesome-free-brands';
import faGithubSquare from '@fortawesome/fontawesome-free-brands/faGithubSquare';
import faLinkedin from '@fortawesome/fontawesome-free-brands/faLinkedin';
import faFacebookSquare from '@fortawesome/fontawesome-free-brands/faFacebookSquare';
import faEnvelopeSquare from '@fortawesome/fontawesome-free-solid/faEnvelopeSquare';
import AboutDisplay from './AboutDisplay';
import ProjectCard from './ProjectCard';
import Header from './Header';
import ContactCard from './ContactCard';
import QuoteCard from './QuoteCard';



const projectInfo = [
  {name: 'UX Atlantic', img: '/img/airplane.png', href: 'https://cboss1029.github.io/web-workbook/03week/airplane/index.html', description: 'This is a web page I had to replicate when learning CSS early on. The purpose of this assignment was to get familiar with the Box Model, its components, as well as position and its properites.'},
  {name: 'Bootstrap', img: '/img/bootstrap.png', href: 'https://cboss1029.github.io/web-workbook/05week/news-website/index.html', description: 'Another mock news site. The purpose of this one was to act as an introduction to Bootstrap.'},
  {name: 'Dice', img: '/img/dice.png', href: 'https://codepen.io/anon/pen/zPdPWO?editors=0010', description: 'The focus of this assignment was JS conditionals and loops. Five dice are rolled at random and the results are reported in the text area.'},
  {name: 'Tic-Tac-Toe', img: '/img/tic-tac-toe.png', href: 'https://cboss1029.github.io/web-workbook/08week/tic-tac-toe/index.html', description: 'More practice with JS conditional statements, but with a focus on DOM manipulation using jQuery.'},
  {name: 'Tomorrows Tech', img: '/img/tomorrowstech.png', href: 'https://cboss1029.github.io/web-workbook/04week/tomorrows-technology/index.html', description: "This mock news website was meant to be an exercise in media queries. If you resize the screen you'll notice that there is a different layout for desktop, tablet, and mobile screen sizes."},
  {name: 'Transition', img: '/img/transition.png', href: 'https://cboss1029.github.io/web-workbook/05week/transitions-and-transformations/index.html', description: 'This was an exercise in CSS transitions. Half of the squares spin clockwise and move to the right of the screen, while the other half spins counterclockwise and move to the left.'},
  {name: 'Tuccis', img: '/img/tuccis.png', href: 'https://cboss1029.github.io/checkpoint1/index.html', description: 'For this project I had to build a website for a business. I chose to replicate the home page of my favorite sandwich shop. I focused on making better use of semantic elements in my HTML. From a visual standpoint it is exactly the same as the original.'},
  {name: 'Welcome', img: '/img/welcome.png', href: 'https://cboss1029.github.io/web-workbook/04week/welcome-to-our-site/index.html', description: 'This is another media query exercise. Although it is only formatted for desktop and mobile displays I find it to be more visually appealing than the news site.'},
];

const contactInfo = [
  {href: "https://github.com/cBoss1029", icon: faGithubSquare, title: "GitHub"},
  {href: "https://www.linkedin.com/in/cory-bosselmann-9453a0129/", icon: faLinkedin, title: "LinkedIn"},
  {href: "https://www.facebook.com/cbosselmann", icon: faFacebookSquare, title: "Facebook"},
  {href: "mailto:cbosselmann1029@gmail.com", icon: faEnvelopeSquare, title: "Email"},

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
  tabBar: {
    position: "sticky",
    top: -1,
    zIndex: 1,
  },
  tabs: {
    color: '#8B0000',
    backgroundColor: '#F4A460',
    fontFamily: 'Montserrat Alternates',
    fontSize: '2em'

  },
  header: {
    width: '300px',
    height: 'auto',
    backgroundColor: '#C0C0C0'
  }

};

/*Notes for Later*/
/*
-Remember to add shadow to icons
-Link the tabs to bring the selected slide to the top of its content
-add onClick API call in 'About' section
*/



class Projects extends Component {
  state = {
    projects: null,
    contacts: null,
    slideIndex: 0,
    ronQuote: null,
  };

  componentDidMount(){
    this.setState({projects: projectInfo});
    this.setState({contacts: contactInfo});
  }

  handleChange = (value) => {
      this.setState({
        slideIndex: value,
      });
    };

  handleApiButton=()=>{
    fetch("http://ron-swanson-quotes.herokuapp.com/v2/quotes")
      .then(res => res.json())
      .then(
        (data) => {

          this.setState({
            isLoaded: true,
            ronQuote: data[0],
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }


// renderApiCall(){
//   if(this.state.ronQuote){
//     console.log(this.state.ronQuote);
//     return <div><QuoteCard quote = {this.state.ronQuote}/></div>
//   }
// }

  renderProjectCards(){
    if (this.state.projects){
      return this.state.projects.map((obj, key) =>{
        return <ProjectCard name={obj.name} imgSrc={obj.img} href={obj.href} description={obj.description} key= {key}/>
      })
    }
  };

  renderContactCards(){
    if (this.state.contacts){
      return this.state.contacts.map((obj, key) =>{
        return <ContactCard href = {obj.href} icon = {obj.icon} title = {obj.title} key = {key}/>
      })
    }
  };




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
        style={styles.tabBar}
      >
        <Tab style= {styles.tabs} label="About" value={0} />
        <Tab style= {styles.tabs} label="Work" value={1}/>
        <Tab style= {styles.tabs} label="Contact" value={2} />
      </Tabs>
      <SwipeableViews
        index={this.state.slideIndex}
        onChangeIndex={this.handleChange}
      >
        <div id = "aboutMe">
          <p className= 'about-body'>  Hi, I'm Cory. I am a web developer in training. I have an intermediate knowledge of HTML, CSS, and Javascript which I am working to improve on a daily basis. Below you'll find a collection of projects and assignments I have completed during my time at
          Austin Coding Academy.
          </p>
          <button className = "apiButton" onClick = {this.handleApiButton}>Click here for Ron Swanson Quote!</button>
          <p className = "apiQuote">{this.state.ronQuote}</p>

        </div>
        <div id = "myProjects" style={styles.slide}>
          {this.renderProjectCards()}
        </div>
        <div id = "contactMe" className = 'contact' style={styles.slide}>
           {this.renderContactCards()}
        </div>
      </SwipeableViews>

      </div>
    );
  }
}

export default Projects;
