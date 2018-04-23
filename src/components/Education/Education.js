import React, {Component} from 'react';
import Paper from 'material-ui/Paper';
import Delete from 'mdi-material-ui/Delete';
import ShareVariant from 'mdi-material-ui/ShareVariant';
import Pencil from 'mdi-material-ui/Pencil';
import './Education.css';

class Education extends Component{
  render(){
    return(
      <Paper className="Education">
        <div className="Education__title">Systems and Computing Engineering</div>
        <div className="Education__place">Universidad de los Andes</div>
        <div className="Education__actions">
          <Delete style={{height:'24px', margin:'10px 10px'}}/>
          <ShareVariant style={{height:'24px', margin:'10px 10px'}}/>
          <Pencil style={{height:'24px', margin:'10px 10px'}}/>
        </div>
      </Paper>
    )
  }
}

export default Education;