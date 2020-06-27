import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import { Typography, Grid } from '@material-ui/core';
import {ReactSVG} from 'react-svg';
import config from '../config/config';

// import './App.css';

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  render()
  {
    return (
        <div className="footer_main">
        <AppBar className="footer">
        <Grid container>
        {config.menu.map(function (content) {
              return <Grid item xs={3}  style={{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"flex-start"}}>
                <ReactSVG src={config.iconpath+content.icon} svgClassName="arrowIcon" className={""+content.name+" back-arrow primary-color"}
                style={{ verticalAlign: 'middle !important' }} role="img" aria-label="back" />
              <Typography className="small_title">{content.name}</Typography>
              </Grid>;
          })}
         </Grid>
         </AppBar>
       </div>
    );
  }
}

export default Footer;
