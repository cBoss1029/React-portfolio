import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Projects from './Projects';
import registerServiceWorker from './registerServiceWorker';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


ReactDOM.render(<MuiThemeProvider><Projects /></MuiThemeProvider>, document.getElementById('root'));
registerServiceWorker();
