import React, {Component} from 'react';
import Paper from 'material-ui/Paper';
import './Cover.css';

class Cover extends Component {
  render() {
    return (
      <Paper className="Cover">
        {/*<img className="background" src="https://starrgate.s3.amazonaws.com:443/users/4037ecee8f3abf7429bde31ddcccbb67c88eae9c/profile_eKe1KUs.jpg"/>*/}
        <img src="https://starrgate.s3.amazonaws.com:443/users/4037ecee8f3abf7429bde31ddcccbb67c88eae9c/profile_eKe1KUs.jpg" alt="User image"/>
      </Paper>
    );
  }
}

export default Cover