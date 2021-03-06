import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import App from './components/App';
import './index.css';
// import registerServiceWorker from './registerServiceWorker';

const muiTheme = getMuiTheme({
  fontFamily: 'Muli, sans-serif',
  palette: {
    primary1Color: '#263238',

  }
});
ReactDOM.render(
  <MuiThemeProvider muiTheme={muiTheme}>
    <App/>
  </MuiThemeProvider>
  , document.getElementById('root'));
// registerServiceWorker();
