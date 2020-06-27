


import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { Typography, Grid } from '@material-ui/core';
import {ReactSVG} from 'react-svg';
import QueryBuilderIcon from '@material-ui/icons/QueryBuilder';
import InsertPhotoIcon from '@material-ui/icons/InsertPhoto';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import config from '../config/config';

function convert(number) {
  if(number > 999 && number < 1000000){
      return (number/1000).toFixed(0) + 'K';
  }else if(number > 1000000){
      return (number/1000000).toFixed(0) + 'M';
  }else if(number <= 999){
      return number;
  }
}

export function renderCards(content,height,parent) {


    return <Card>
    <CardContent className="card_bg" style={{background:"url("+config.imgPath+content.media+") no-repeat",height:height+"px",padding:0}}>
  <Grid container style={{padding:5}}>
    <Grid item xs={8} style={{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"flex-start"}}>
    <QueryBuilderIcon className="fontSizeSmall" style={{color:"#fff"}} /> 
      <Typography style={{color:"#fff"}}>{content.date}</Typography>
    </Grid>
    <Grid item xs={4} style={{display:"flex",alignItems:"center",justifyContent:"flex-end"}}>
    <Grid style={{padding:5,background:"#FFBF00",borderRadius:20}}>
    {content.type == "image" ? <InsertPhotoIcon className="fontSizeSmall" /> :<PlayCircleFilledIcon className="fontSizeSmall" />  }
    </Grid>
    </Grid>
  </Grid>
  </CardContent>
  <Grid container alignitems="center" justify="center" style={{background:"#FFBF0033"}}>
      <Grid item xs={2}  style={{display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"row"}}>
      <FavoriteIcon style={{paddingLeft:5}} className="fontSizeSmall small_title" onClick={(e) => {parent.updateAppData(content.id,parseInt(content.totalLikes)+1)}} />
     <Typography   className="small_title" style={{paddingLeft:5}}>{convert(parseInt(content.totalLikes))}</Typography>
      <ChatBubbleIcon className="fontSizeSmall small_title" style={{paddingLeft:10}}/>
     <Typography className="small_title"  style={{paddingLeft:5}}>{content.totalComments}</Typography>
      </Grid>
  </Grid>
  </Card>
  
  
  }