import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import { Typography, Grid } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
// import './App.css';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  render()
  {
    return (
      <div className="header_main">
       <AppBar className="header" style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
         <Grid container style={{padding:12}}>
            <Grid item xs={4}  style={{display:"flex",alignItems:"center",justifyContent:"flex-start"}}>
            <ArrowBackIcon />
            </Grid>
            <Grid item xs={4} style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
              <Typography ClassName={"title"}>Details</Typography>
            </Grid>
            <Grid item xs={4} spacing={24} style={{display:"flex",alignItems:"center",justifyContent:"flex-end"}}>
              <MenuIcon />
            </Grid>
         </Grid>
        </AppBar>
      </div>
    );
  }
}

export default Header;
