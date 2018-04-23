import React, {Component} from 'react';
import Paper from 'material-ui/Paper';
import RaisedButton from "material-ui/RaisedButton";
import Verified from 'mdi-material-ui/Verified';
import Weight from 'mdi-material-ui/Weight';
import './Recommendations.css';

class Recommendations extends Component {
  render() {
    return (
      <Paper className="Paper Recommendations">
        <div className="metrics">
          <div className="metric items-verified">
            <div className="value">
              0
              <Verified className="icon" style={{width:'18px', marginLeft:'2px', color:'#757575'}}/>
            </div>
            <div className="label">
              Items verified
            </div>
          </div>
          <div className="metric items-recommendations">
            <div className="value">
              0
            </div>
            <div className="label">
              recommendations
            </div>
          </div>
          <div className="metric items-weight">
            <div className="value">
              0
              <Weight className="icon" style={{width:'18px', marginLeft:'2px', color:'#757575'}}/>
            </div>
            <div className="label">
              total recommendations weight
              <div className="sub-label">(WHAT IS IT?)</div>
            </div>
          </div>
        </div>
        <div className="action">
          <RaisedButton label="Get recomended" primary={true}  />
          <div className="suggest">
            (without recommendation letters)
          </div>
        </div>
      </Paper>
    )
  }
}

export default Recommendations