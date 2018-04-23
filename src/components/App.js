import React, {Component} from 'react';
import AppBar from 'material-ui/AppBar';
import About from "./About/About";
import Recommendations from "./Recomendations/Recommendations";
import Education from "./Education/Education";
import Cover from "./Cover/Cover";
import './App.css';

class App extends Component {
  state = {
    authLinkedin: false,
    authBio: false,
    LinkedinProfile: null,
  };

  authenticateLinkedin = (param) => {
    console.log(param);
    this.setState({authLinkedin: true});
    window.IN.API
      .Profile('me')
      .fields("id", "first-name", "last-name", "email-address", "public-profile-url", "picture-url", "picture-urls::(original)", "headline", "summary", "location", "industry", "positions")
      .result((result) => {
        console.log(result);
        this.setState({LinkedinProfile: result})
      });
    this.exportDataFromLinkedinToBio();
  };

  authenticateBio = (param) => {
    console.log(param);
    this.setState({authBio: true});
    this.exportDataFromLinkedinToBio();
  };

  exportDataFromLinkedinToBio = () => {
    if (this.state.authLinkedin && this.state.authBio) {
      fetch('https://bio.torre.co/api/bios/lamesa/education', {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: '{"name":"Program Name","organizations":[188],"media":{"description":"","address":"","metadata":{}},"fromMonth":"","fromYear":"","from":{"month":"","year":""},"toMonth":"","toYear":"","to":{"option":"","month":"","year":""},"location":"","additionalInfo":"","people":[],"achievements":[],"strengths":[],"jobs":[],"projects":[],"publications":[],"education":[],"interests":[],"relatedExperiences":[]}'
      })
    }
  };

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
        <Cover authLinkedin={this.state.authLinkedin}
               authenticateLinkedin={this.authenticateLinkedin}
               authBio={this.state.authBio}
               authenticateBio={this.authenticateBio}
        />
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
