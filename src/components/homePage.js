import React from 'react';
import { Typography, Grid } from '@material-ui/core';
import config from '../config/config';
import {apiService} from '../service/apiService';
import {renderCards} from './Cards'
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';


class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hashtag:"#cheeselove #food",
      appdata:[]
    }
    this.updateAppData = this.updateAppData.bind(this)
  }
 handleChange(e)
 {
    this.setState({hashtag:e.target.value})
    this.setAppData(e.target.value)
 }
 async setAppData(search)
 {
  let appData = await apiService.get_lists(search);
  if(appData.length > 0)
  {
    this.setState({appdata:appData})
  }
 }
 async updateAppData(id,likes)
 {
   let updatedData = await apiService.update(this.state.hashtag,id,likes);
  if(updatedData.length > 0)
  {
    this.setState({appdata:updatedData})
  }
 }
 componentDidMount()
 {
  
  this.setAppData(this.state.hashtag)

 }
  render()
  {
    const {appdata} = this.state;
    let yourPostData = appdata.length > 0 ? appdata.filter(x => x.section === "yourpost"):config.yourPosts;
    let similarPostData = appdata.length > 0 ? appdata.filter(x => x.section === "similarpost"):config.similarPosts;
    console.log(yourPostData.length);
    let imgPath = appdata.length > 0 ? config.imgPath : "asssets/images/"
    return (
      <div className="HomePage" style={{padding:10}}>
        <Grid container>
          <Grid item xs={12}>
        <FormControl className="search_bar" fullWidth variant="outlined">
          <TextField
          className="search_bar"
          variant="outlined"
            id="outlined-adornment-amount"
            value={this.state.hashtag}
            onChange={(e) => this.handleChange(e)}
          />
        </FormControl>
        <Typography style={{margin:20}}><b className="title">HashTags:</b> <span className="hashTags">#food</span> <span className="hashTags">#kofluencer</span></Typography>
        </Grid >
        </Grid>
        <div style={{padding:10}}>
          <Typography className="title">
            Your Posts
          </Typography>
          <div className = "horizontal_wrapper" style={{whiteSpace:"nowrap",overflowX: "scroll",overflowY: "hidden"}}>
          {yourPostData.map((content, index) => (
                <Grid item xs={6} md={3} style={{display:"inline-block",width:"100%",padding:10}} >
                {renderCards(content,this.props.height,this)}
              </Grid >))
              }
            </div>
          </div>
          <Grid container  style={{padding:10}}>
            <Grid item xs={6} style={{display:"flex",alignItems:"center",justifyContent:"flex-start"}}>
          <Typography  className="title">
            Similar Posts
          </Typography>
          </Grid>
          <Grid item xs={6}  style={{display:"flex",alignItems:"center",justifyContent:"flex-end"}}>
          <Typography  className="title">
            {similarPostData.length + " posts"}
          </Typography>
          </Grid>
          <Grid container>
          {similarPostData.map((content, index) => (
                <Grid item xs={6} md={4} sm={6} style={{padding:10}}>
                {renderCards(content,this.props.height,this)}
              </Grid>))
              }
            </Grid>
            </Grid>
            </div>
    );
  }
}

export default HomePage;