import React, {Component} from 'react';
import Paper from 'material-ui/Paper';
import Divider from 'material-ui/Divider';
import EmailOutline from 'mdi-material-ui/EmailOutline';
import Phone from 'mdi-material-ui/Phone';
import Link from 'mdi-material-ui/Link';
import Twitter from 'mdi-material-ui/Twitter';
import Facebook from 'mdi-material-ui/Facebook';
import './About.css';

class About extends Component{
  render(){
    const {name, career, location, description} = this.props;
    return(
      <Paper className="Paper About">
        <div className="text About__name">Hello, my name is {name? name :'Luis Andres Mesa Fajardo'}</div>
        <div className="text About__title">{ career ? career : 'Systems and Computing Engineer'}</div>
        <div className="text About__location">{ location ? location :'Bogota D.C., Colombia'}</div>
        <div className="text About__description">{ description ? description : 'Student of Systems and Computing Engineering in Universidad de los Andes. Mainly interested in web development related topics, including Back-end, Front-end, DevOps and databases.'}</div>
        <Divider/>
        <div className="About__contact">
          <EmailOutline/>
          <Phone/>
          <Link/>
          <Twitter/>
          <Facebook/>
        </div>
      </Paper>
    )
  }
}

export default About