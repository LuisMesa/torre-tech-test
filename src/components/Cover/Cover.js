import React, {Component} from 'react';
import Paper from 'material-ui/Paper';
import RaisedButton from "material-ui/RaisedButton";
import './Cover.css';

class Cover extends Component {
  handleClickLinkedin = (event) => {
    window.IN.User.authorize( this.props.authenticateLinkedin, window);
  };
  // handleClickBio = (event) => {
  //   window.IN.User.authorize( this.props.authenticateLinkedin, window);
  // };
  render() {
    const {src} = this.props;
    return (
      <Paper className="Cover">
        {/*<img className="background" src="https://starrgate.s3.amazonaws.com:443/users/4037ecee8f3abf7429bde31ddcccbb67c88eae9c/profile_eKe1KUs.jpg"/>*/}
        { this.props.authLinkedin?
          <img src={ src ? src : "https://starrgate.s3.amazonaws.com:443/users/4037ecee8f3abf7429bde31ddcccbb67c88eae9c/profile_eKe1KUs.jpg"} alt="User profile"/>
          :
          <div className="get-started">
            <div className="title">Import all your data from Linkedin to Torre Bio now!</div>
            <div className="description">Are you ready for the next step in your career? Welcome to Torre Bio, the new social network for professionals. To import all your data from Linkedin to Torre Bio just click the below buttons.</div>
            <div className="actions">
              <RaisedButton label="Linkedin" primary={true} onClick={this.handleClickLinkedin}/>
              <RaisedButton label="Torre Bio" primary={true}/>
            </div>
          </div>
        }
      </Paper>
    );
  }
}

export default Cover