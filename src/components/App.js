import React, {Component} from 'react';
import AppBar from 'material-ui/AppBar';
import About from "./About/About";
import Recommendations from "./Recomendations/Recommendations";
import Education from "./Education/Education";
import Cover from "./Cover/Cover";
import './App.css';

class App extends Component {
  render() {
    const title = <a href="htpps://bio.torre.co">
      <img src="./assets/torre-bio-logo.png" alt="Torre Bio Logo"/>
    </a>;

    return (
      <div className="App">
        <AppBar
          title={title}
          className="AppBar"
          titleStyle={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start'}}
          style={{backgroundColor: '#F5F5F5'}}
        />
        <Cover/>
        <div className="section">
          <About/>
          <Recommendations/>
        </div>
        <div className="section">
          <div className="text section__title">
            Education
          </div>
          <Education/>
        </div>

      </div>
    );
  }
}

export default App;
